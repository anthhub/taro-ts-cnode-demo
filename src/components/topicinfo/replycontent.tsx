import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button, Textarea } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import "./replycontent.less";
class ReplyContent extends Component {
  btnOK() {
    if (this.state.value) {
      let value = this.state.value;
      this.props.onOKReplyContent && this.props.onOKReplyContent(value);
    } else {
      Taro.showToast({ title: "请输入评论内容", icon: "none" });
    }
  }
  btnCancel() {
    this.props.onCancelReplyContent && this.props.onCancelReplyContent();
  }
  changeContent(event) {
    if (event && event.target) {
      this.setState({ value: event.target.value });
    }
  }
  render() {
    return (
      <View className="replycontent">
        <Textarea
          onInput={this.changeContent.bind(this)}
          className="replycontent-text"
          placeholder="请输入回复内容"
        />
        <View className="replycontent-btngroup">
          <Button onClick={this.btnOK.bind(this)} className="btn">
            确定
          </Button>
          <Button onClick={this.btnCancel.bind(this)} className="btn">
            取消
          </Button>
        </View>
      </View>
    );
  }
}
export default ReplyContent;
