import './user.less'

import { autobind } from 'core-decorators'

import { Button, View } from '@tarojs/components'
import { inject, observer } from '@tarojs/mobx'
import Taro, { Component } from '@tarojs/taro'

import Head from '../../components/head/head'

import Panel from '../../components/user/panel'

interface IProps {
    userStore?: IUserStore
    routerStore?: IRouterStore
    topicStore?: ITopicStore
}
@inject(({ userStore, routerStore, topicStore }: IStore) => ({ routerStore, userStore, topicStore }))
@observer
@autobind
class User extends Component<IProps> {
    // 发布话题 跳转到发布话题页面
    publishTopic() {
        const {
            routerStore: { redirectTo },
        } = this.props
        redirectTo('publish')
    }
    render() {
        const {
            userStore: {
                userInfo: { loginname, avatar_url, recent_topics, recent_replies },
            },
        } = this.props

        console.log('============recent_topics===========recent_replies=============')
        console.log(recent_topics, recent_replies)
        console.log('====================================')

        return (
            <View>
                <Head loginname={loginname} avatar_url={avatar_url} />
                <Panel listData={recent_topics || []} title="最近发布的话题" />
                <Panel listData={recent_replies || []} title="最近收到的回复" />
                <Button className="publish_btn" onClick={this.publishTopic}>
                    发布话题
                </Button>
            </View>
        )
    }
}
export default User
