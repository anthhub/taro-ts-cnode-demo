import './user.less'

// @connect(function(store) {
//     return { ...store.user }
// })
import { autobind } from 'core-decorators'

import { Button, View } from '@tarojs/components'
import { inject, observer } from '@tarojs/mobx'
// import { connect } from '@tarojs/redux'
import Taro, { Component } from '@tarojs/taro'

// import { getUserInfo } from '../../actions/user'
import Head from '../../components/head/head'
// import Panel from '../../components/user/panel'

interface IProps {
    userStore?: IUserStore
    routerStore?: IRouterStore
}
@inject(({ userStore, routerStore }: IStore) => ({ routerStore, userStore }))
@observer
@autobind
class User extends Component<IProps> {
    state = {
        recent_topics: [],
        recent_replies: [],
    }
    componentWillMount() {
        // getUserInfo({ loginname: this.props.loginname }).then(result => {
        //     this.setState({
        //         recent_topics: result.data.recent_topics,
        //         recent_replies: result.data.recent_replies,
        //     })
        // })
    }
    //发布话题 跳转到发布话题页面
    publishTopic() {
        // Taro.redirectTo({ url: '/pages/publish/publish' })
    }
    render() {
        // let { loginname, avatar_url } = this.props
        const {
            userStore: {
                userInfo: { loginname, avatar_url },
            },
        } = this.props

        // let { recent_topics, recent_replies } = this.state
        return (
            <View>
                <Head loginname={loginname} avatar_url={avatar_url} />
                {/* <Panel listData={recent_topics} title="最近发布的话题" />
                <Panel listData={recent_replies} title="最近收到的回复" /> */}
                <Button className="publish_btn" onClick={this.publishTopic.bind(this)}>
                    发布话题
                </Button>
            </View>
        )
    }
}
export default User
