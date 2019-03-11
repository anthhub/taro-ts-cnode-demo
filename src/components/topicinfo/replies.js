import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button, Image, RichText } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { myTimeToLocal } from "../../utils/date";
import "./replies.less";
import { validateUser } from "../../actions/user";
const isweapp = process.env.TARO_ENV == "weapp"; //小程序环境
class Replies extends Component {
  admire(reply) {
    let { user } = this.props;
    validateUser(user).then(result => {
      if (result) {
        this.props.onAdmire && this.props.onAdmire(reply);
      }
    });
  }
  replyToReply(reply) {
    let { user } = this.props;
    validateUser(user).then(result => {
      if (result) {
        this.props.onReplyToReply && this.props.onReplyToReply(reply);
      }
    });
  }
  render() {
    let { replies } = this.props;
    return (
      <View className="topicinfo-replies">
        {replies.map((item, index) => {
          return (
            <View key={item.id} className="topicinfo-repliy">
              <Image
                className="topicinfo-repliy-image"
                src={item.author ? item.author.avatar_url : ""}
              />
              <View className="topicinfo-repliy-right">
                <View className="topicinfo-repliy-right-body">
                  <View className="topicinfo-repliy-right-pie">
                    <Text className="loginname">
                      {item.author ? item.author.loginname : ""}
                    </Text>
                    <Text className="floor">{index + 1 + "楼"}</Text>
                    <Text className="time">
                      {myTimeToLocal(item.create_at)}
                    </Text>
                  </View>
                  <View className="topicinfo-repliy-right-content">
                    {isweapp ? (
                      <RichText nodes={item.content} />
                    ) : (
                      <View
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      />
                    )}
                  </View>
                </View>
                <View className="topicinfo-repliy-right-zan">
                  <Image
                    onClick={this.admire.bind(this, item)}
                    className="topicinfo-repliy-image"
                    src={
                      item.is_uped
                        ? require("../../assets/img/myzan.png")
                        : require("../../assets/img/zan.png")
                    }
                  />
                  <Text>{item.ups.length}</Text>
                  <Image
                    onClick={this.replyToReply.bind(this, item)}
                    className="topicinfo-repliy-image"
                    src={require("../../assets/img/zhuan.png")}
                  />
                </View>
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}
export default Replies;
