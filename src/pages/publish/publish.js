import Taro, { Component } from "@tarojs/taro";
import {
  Input,
  View,
  Text,
  Button,
  Picker,
  Textarea
} from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { submitTopic, updateTopic } from "../../actions/topiclist";
import "./publish.less";
@connect(function(store) {
  return { ...store.menu, ...store.user, topicinfo: store.topiclist.topicinfo };
})
class Publish extends Component {
  componentWillMount() {
    let { edit } = this.$router.params;
    let { topicinfo } = this.props;
    this.setState({
      isEdit: edit == "1",
      topicinfo: topicinfo,
      title: topicinfo ? topicinfo.title : "",
      content: topicinfo ? topicinfo.content : ""
    });
  }
  state = {
    selectCata: null,
    title: null,
    content: null,
    isEdit: false
  };
  changeCata(event) {
    let { cataData } = this.props;
    this.setState({ selectCata: cataData[event.detail.value] });
  }
  //标题改变
  titleChange(event) {
    this.setState({ title: event.target.value });
  }
  //内容改变
  contentChange(event) {
    this.setState({ content: event.target.value });
  }
  //提交
  submitTopic() {
    let { title, content, selectCata, isEdit } = this.state;
    let { accesstoken, topicinfo } = this.props;
    if (title && content && selectCata) {
      let params = {
        tab: "dev",
        title,
        content,
        accesstoken,
        topic_id: topicinfo.id
      };
      if (isEdit) {
        updateTopic(params).then(result => {
          if (result) {
            Taro.navigateBack();
          }
        });
      } else {
        submitTopic(params).then(result => {
          if (result) {
            Taro.redirectTo({ url: "/pages/user/user" });
          }
        });
      }
    } else {
      Taro.showToast({ title: "分类或者标题内容都不能为空!", icon: "none" });
    }
  }
  render() {
    let { cataData } = this.props;
    let { selectCata, topicinfo, isEdit } = this.state;
    return (
      <View className="publish-topic">
        <Input
          type="text"
          value={isEdit ? (topicinfo ? topicinfo.title : "") : ""}
          className="publish-topic-title"
          onInput={this.titleChange.bind(this)}
          placeholder="请输入你要发布的标题"
        />
        <Textarea
          value={isEdit ? (topicinfo ? topicinfo.content : "") : ""}
          className="publish-topic-content"
          onInput={this.contentChange.bind(this)}
          placeholder="请输入您要发布的内容"
        />
        <Picker
          onChange={this.changeCata.bind(this)}
          mode="selector"
          range={cataData}
          rangeKey="value"
        >
          <View className="publish-topic-cata">
            {selectCata ? selectCata.value : "请选择"}
          </View>
        </Picker>
        <Button
          className="publish-topic-btn"
          onClick={this.submitTopic.bind(this)}
        >
          提交
        </Button>
      </View>
    );
  }
}
export default Publish;
