import './detail.less'

import { autobind } from 'core-decorators'
import { toJS } from 'mobx'

import Replies from '@components/topicinfo/replies'
import { Button, View } from '@tarojs/components'
import { inject, observer } from '@tarojs/mobx'
// import { connect } from '@tarojs/redux'
import Taro, { Component, PageConfig } from '@tarojs/taro'

// import { admireTopic, getTopicInfo, replyContent } from '../../actions/topiclist'
// import { validateUser } from '../../actions/user'
// import Replies from '../../components/topicinfo/replies'
// import ReplyContent from '../../components/topicinfo/replycontent'
import TopicInfo from '../../components/topicinfo/topicinfo'
import { IDetailProps, IDetailState } from '../../interfaces/IDetail'
import ReplyContent from '@components/topicinfo/replycontent'

// @connect(
//     function(store): IDetailProps {
//         return {
//             getTopicInfo,
//             admireState: store.topiclist.admireState,
//             user: store.user,
//             topicinfo: store.topiclist.topicinfo,
//             replies: store.topiclist.replies,
//         }
//     },
//     function(dispatch) {
//         return {
//             getTopicInfo(params) {
//                 dispatch(getTopicInfo(params))
//             },
//         }
//     }
// )
interface IProps {
    viewStore?: IViewStore
    routerStore?: IRouterStore
    topicStore?: ITopicStore
    userStore?: IUserStore
}
@inject(({ viewStore, routerStore, topicStore, userStore }: IStore) => ({ viewStore, routerStore, topicStore, userStore }))
@observer
@autobind
class Detail extends Component<IProps> {
    config: PageConfig = {
        navigationBarTitleText: '话题详情',
    }

    state: IDetailState = {
        showReplyContent: false, // 显示回复组件
    }
    componentWillMount() {
        this.getDetail()
    }
    getDetail() {
        // const { user } = this.props
        const params = {
            id: this.$router.params.topicid,
            mdrender: true,
            //  accesstoken: user.accesstoken
        }
        const {
            topicStore: {
                detail: { loadTopicDetail },
            },
        } = this.props
        loadTopicDetail(params)
    }
    admire(reply) {
        // const { user } = this.props
        // const params = { replyid: reply.id, accesstoken: user.accesstoken }
        // admireTopic(params).then(result => {
        //     if (result.success) {
        //         this.getDetail()
        //     }
        // })
    }
    componentWillReceiveProps(nextProps) {
        // if (this.props.admireState != nextProps.admireState) {
        //     // 发生变化 请求数据
        //     this.getDetail()
        // }
    }
    reply() {
        const {
            userStore: { validateUser },
        } = this.props

        if (validateUser()) {
            this.setState({ showReplyContent: true })
        }
    }
    closeReplyContent() {
        this.setState({ showReplyContent: false })
    }
    // 评论
    async replyContentValue(content) {
        const {
            userStore: { accesstoken },
            topicStore: {
                detail: { replyContent },
            },
        } = this.props
        const { currentReply } = this.state
        const reply_id = currentReply ? currentReply.id : null
        const preName = currentReply ? '@' + currentReply.author.loginname + '   ' : '' // 评论人的昵称
        const params = {
            reply_id,
            content: preName + content,
            accesstoken,
            topicid: this.$router.params.topicid,
        }
        await replyContent(params)
        this.getDetail()
        this.closeReplyContent()
    }
    // 提供给子组件使用的函数
    replyToReply(reply) {
        this.setState({ currentReply: reply, showReplyContent: true })
    }
    render() {
        // const { topicinfo, replies, user } = this.props
        const { showReplyContent } = this.state

        let {
            topicStore: {
                detail: { topicDetail: topicDetail },
            },
            userStore: { userInfo },
        } = this.props
        topicDetail = toJS(topicDetail)

        const selfPublish = topicDetail && topicDetail.author && topicDetail.author.loginname === userInfo.loginname

        const replies = topicDetail ? topicDetail.replies : []

        return (
            <View className="detail">
                {showReplyContent && (
                    <ReplyContent onOKReplyContent={this.replyContentValue} onCancelReplyContent={this.closeReplyContent} />
                )}
                {topicDetail && <TopicInfo selfPublish={selfPublish} topicinfo={topicDetail} />}
                {replies && <Replies user={userInfo} onReplyToReply={this.replyToReply} replies={replies} onAdmire={this.admire} />}
                <Button className="replyBtn" onClick={this.reply}>
                    回复
                </Button>
            </View>
        )
    }
}
export default Detail
