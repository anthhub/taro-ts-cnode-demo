import './topic.less'

import { myTimeToLocal } from '@lib/utils/date'
import { Image, Text, View } from '@tarojs/components'
import Taro, { Component } from '@tarojs/taro'
import { autobind } from 'core-decorators'

interface IProps {
    item?: ITopic
    routerStore?: IRouterStore
}

@autobind
class Topic extends Component<IProps> {
    // 跳转到详情页
    goToDetail(topic) {
        const {
            routerStore: { navigateTo },
        } = this.props
        navigateTo('detail', { topicid: topic.id })
    }
    render() {
        const { item } = this.props
        return (
            <View className="topiclist-topic" onClick={this.goToDetail.bind(this, item)}>
                <Image className="head-img" src={item.author ? item.author.avatar_url : ''} />
                <View className="right">
                    <View className="topic-title">
                        {item.top ? (
                            <Text className="topic-up">置顶</Text>
                        ) : item.tab === 'share' ? (
                            <Text className="topic-up blue">分享</Text>
                        ) : (
                            <Text className="topic-up blue">问答</Text>
                        )}

                        <Text>{item.title}</Text>
                    </View>
                    <View className="topic-info">
                        <Text>{item.author ? item.author.loginname : ''}</Text>
                        <Text>{item.reply_count + '/' + item.visit_count}</Text>
                        <Text>创建时间{myTimeToLocal(item.create_at)}</Text>
                    </View>
                </View>
            </View>
        )
    }
}
export default Topic
