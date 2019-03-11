import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { myTimeToLocal } from "../../utils/date";
import "./topic.less";
class Topic extends Component {
  //跳转到详情页
  goToDetail(topic) {
    Taro.navigateTo({ url: "/pages/detail/index?topicid=" + topic.id });
  }
  render() {
    let { item } = this.props;
    return (
      <View
        className="topiclist-topic"
        onClick={this.goToDetail.bind(this, item)}
      >
        <Image
          className="head-img"
          src={item.author ? item.author.avatar_url : ""}
        />
        <View className="right">
          <View className="topic-title">
            {item.top ? (
              <Text className="topic-up">置顶</Text>
            ) : item.tab == "share" ? (
              <Text className="topic-up blue">分享</Text>
            ) : (
              <Text className="topic-up blue">问答</Text>
            )}

            <Text>{item.title}</Text>
          </View>
          <View className="topic-info">
            <Text>{item.author ? item.author.loginname : ""}</Text>
            <Text>{item.reply_count + "/" + item.visit_count}</Text>
            <Text>创建时间{myTimeToLocal(item.create_at)}</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default Topic;
