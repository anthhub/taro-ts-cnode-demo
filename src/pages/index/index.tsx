import './index.less'

import Menu from '@components/menu/menu'
// import TopicList from '@components/topiclist/topiclist'
import { View } from '@tarojs/components'
import Taro, { Component, PageConfig } from '@tarojs/taro'

class Index extends Component {
    config: PageConfig = {
        navigationBarTitleText: '首页',
    }

    render() {
        return (
            <View className="index">
                <Menu />
                {/* <TopicList /> */}
            </View>
        )
    }
}

export default Index
