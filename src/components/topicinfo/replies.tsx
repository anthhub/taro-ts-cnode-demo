// import { myTimeToLocal } from '../../utils/date'
import './replies.less'

import { autobind } from 'core-decorators'

import { myTimeToLocal } from '@lib/utils/date'
import { Image, RichText, Text, View } from '@tarojs/components'
import Taro, { Component } from '@tarojs/taro'

const isweapp = process.env.TARO_ENV === 'weapp' // 小程序环境

interface IProps {
    user: IUser
    onReplyToReply: (reply: string) => void
    replies: IReply[]
    onAdmire: (reply: string) => void
}

@autobind
class Replies extends Component<IProps> {
    render() {
        const { replies, onAdmire, onReplyToReply } = this.props
        return (
            <View className="topicinfo-replies">
                {replies.map((item, index) => {
                    return (
                        <View key={item.id} className="topicinfo-repliy">
                            <Image className="topicinfo-repliy-image" src={item.author ? item.author.avatar_url : ''} />
                            <View className="topicinfo-repliy-right">
                                <View className="topicinfo-repliy-right-body">
                                    <View className="topicinfo-repliy-right-pie">
                                        <Text className="loginname">{item.author ? item.author.loginname : ''}</Text>
                                        <Text className="floor">{index + 1 + '楼'}</Text>
                                        <Text className="time">{myTimeToLocal(item.create_at)}</Text>
                                    </View>
                                    <View className="topicinfo-repliy-right-content">
                                        {isweapp ? (
                                            <RichText nodes={item.content} />
                                        ) : (
                                            <View dangerouslySetInnerHTML={{ __html: item.content }} />
                                        )}
                                    </View>
                                </View>
                                <View className="topicinfo-repliy-right-zan">
                                    <Image
                                        onClick={onAdmire.bind(this, item)}
                                        className="topicinfo-repliy-image"
                                        src={item.is_uped ? require('../../assets/img/myzan.png') : require('../../assets/img/zan.png')}
                                    />
                                    <Text>{item.ups.length}</Text>
                                    <Image
                                        onClick={onReplyToReply.bind(this, item)}
                                        className="topicinfo-repliy-image"
                                        src={require('../../assets/img/zhuan.png')}
                                    />
                                </View>
                            </View>
                        </View>
                    )
                })}
            </View>
        )
    }
}
export default Replies
