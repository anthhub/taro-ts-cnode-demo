import "./index.less"

import { View } from "@tarojs/components"
import Taro, { Component } from "@tarojs/taro"

// import Menu from "../../components/menu/menu";
// import TopicList from "../../components/topiclist/topiclist";

class Index extends Component {
  config = {
    navigationBarTitleText: "首页",
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {}
  componentDidMount() {}
  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        index
        {/* <Menu />
        <TopicList /> */}
      </View>
    )
  }
}

export default Index
