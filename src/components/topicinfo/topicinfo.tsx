import './topicinfo.less'

import { autobind } from 'core-decorators'

import { Image, RichText, Text, View } from '@tarojs/components'

import Taro, { Component } from '@tarojs/taro'
import { myTimeToLocal } from '@lib/utils/date'

interface IProps {
    topicinfo?: ITopicDetail
    selfPublish?: boolean
}

@autobind
class TopicInfo extends Component<IProps> {
    getTitle(title) {
        // return title
    }
    delTopic(topicinfo) {
        // this.props.onDelTopic && this.props.onDelTopic(topicinfo)
    }
    //编辑话题
    editTopic(topicinfo) {
        // Taro.redirectTo({ url: '/pages/publish/publish?edit=1' })
    }
    render() {
        const { topicinfo, selfPublish } = this.props
        return (
            <View className="topic-info">
                <View className="topic-info-header">
                    <View className="topic-info-header-title">
                        {topicinfo.top ? (
                            <Text className="topic-up">置顶</Text>
                        ) : topicinfo.tab == 'share' ? (
                            <Text className="topic-up blue">分享</Text>
                        ) : (
                            <Text className="topic-up blue">问答</Text>
                        )}
                        <Text>{topicinfo.title}</Text>
                    </View>
                    <View className="topic-info-header-pie">
                        <Text>{myTimeToLocal(topicinfo.create_at)}</Text>
                        <Text>{topicinfo.author ? topicinfo.author.loginname : ''}</Text>
                        <Text>{topicinfo.visit_count + '次浏览'}</Text>
                    </View>
                    {selfPublish ? (
                        <View className="topic-info-header-img">
                            <Image
                                onClick={this.delTopic.bind(this, topicinfo)}
                                className="img"
                                src={require('../../assets/img/del.png')}
                            />
                            <Image
                                onClick={this.editTopic.bind(this, topicinfo)}
                                className="img"
                                src={require('../../assets/img/edit.png')}
                            />
                        </View>
                    ) : null}
                </View>
                <View className="topic-info-body">
                    <RichText nodes={topicinfo.content} />
                </View>
            </View>
        )
    }
}

export default TopicInfo
