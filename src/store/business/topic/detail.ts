import { autobind } from 'core-decorators'
import { observable, runInAction } from 'mobx'

import { TopicDetail } from '@entities/topic'
import { StoreExt } from '@lib/extent/store'

@autobind
export class TopicDetailStore extends StoreExt {
    //  实体类
    @observable
    topicDetail: ITopicDetail = null

    store: ITopicStore = null
    constructor(store: ITopicStore, topicDetail?: ITopicDetail, autoSave = false) {
        super()
        this.store = store
        this.topicDetail = new TopicDetail(topicDetail)
        if (autoSave) {
        }
    }

    async loadTopicDetail(params) {
        const topicDetail = await this.api.topic.getTopicDetail(params)
        runInAction(() => (this.topicDetail = topicDetail))
    }

    // 点赞话题回复
    async admireTopicReply(params) {
        const data = await this.api.reply.upReply(params)
        console.log('==============data======================')
        console.log(data)
        console.log('====================================')

        // let result = await postJSON(api.upreply + params.replyid + '/ups', params)
        // if (result && result.data && result.data.success) {
        //     // 成功点赞
        //     return result.data
        // } else {
        //     // 点赞失败
        //     Taro.showToast({ title: '点赞失败!', icon: 'none' })
        // }
        // return false
    }

    async replyContent(params) {
        const result = await this.api.reply.replyTopic(params)
        console.log('====================================')
        console.log(result)
        console.log('====================================')
        // let result = await postJSON(api.replytopic + params.topicid + '/replies', params)
        // if (result && result.data && result.data.success) {
        //     // 成功评论
        //     return result.data
        // } else {
        //     // 评论失败
        //     Taro.showToast({ title: '评论失败!', icon: 'none' })
        // }
        // return false
    }

    async submitTopic(params) {
        const result = await this.api.topic.createTopic(params)
        console.log('====================================')
        console.log(result)
        console.log('====================================')
    }
    // // 更新话题
    async updateTopic(params) {
        const result = await this.api.topic.updateTopic(params)
        console.log('====================================')
        console.log(result)
        console.log('====================================')
    }
}
