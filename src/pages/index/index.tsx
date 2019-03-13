import './index.less'

import { View } from '@tarojs/components'
import Taro, { Component, PageConfig } from '@tarojs/taro'

import Menu from '../../components/menu/menu'

// import TopicList from "../../components/topiclist/topiclist";

class Index extends Component {
    config: PageConfig = {
        navigationBarTitleText: '首页',
    }

    render() {
        return (
            <View className="index">
                index
                <Menu />
                {/* <TopicList /> */}
            </View>
        )
    }
}

export default Index
