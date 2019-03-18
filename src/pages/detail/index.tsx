import './detail.less'

import { autobind } from 'core-decorators'
import { toJS } from 'mobx'

import Replies from '@components/topicinfo/replies'
import ReplyContent from '@components/topicinfo/replycontent'
import { Button, View } from '@tarojs/components'
import { inject, observer } from '@tarojs/mobx'
import Taro, { Component, PageConfig } from '@tarojs/taro'

import TopicInfo from '../../components/topicinfo/topicinfo'

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

    state = {
        currentReply: '',
        showReplyContent: false, // 显示回复组件
    }
    componentWillMount() {
        this.getDetail()
    }
    getDetail() {
        const {
            userStore: { accesstoken },
        } = this.props
        const params = {
            id: this.$router.params.topicid,
            mdrender: true,
            accesstoken,
        }
        const {
            topicStore: {
                detail: { loadTopicDetail },
            },
        } = this.props
        loadTopicDetail(params)
    }
    async admire(reply) {
        const {
            userStore: { accesstoken, validateUser },
            topicStore: {
                detail: { admireTopicReply },
            },
        } = this.props
        if (validateUser()) {
            const params = { replyid: reply.id, accesstoken }
            await admireTopicReply(params)
            this.getDetail()
        }
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
        const params = { reply_id, content: preName + content, accesstoken, topicid: this.$router.params.topicid }
        await replyContent(params)
        this.closeReplyContent()
        this.getDetail()
    }
    // 提供给子组件使用的函数
    replyToReply(reply) {
        const {
            userStore: { validateUser },
        } = this.props

        if (validateUser()) {
            this.setState({ currentReply: reply, showReplyContent: true })
        }
    }
    render() {
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
