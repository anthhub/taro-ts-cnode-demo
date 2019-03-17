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

    // // 请求话题详情
    // getTopicInfo(params) {
    //     return async dispatch => {
    //         let result = await getJSON(api.gettopicinfo + params.id, params)
    //         if (result && result.data && result.data.success) {
    //             dispatch({ type: 'getTopicInfo', infoData: result.data.data })
    //         } else {
    //             console.error('请求话题详情失败！')
    //         }
    //     }
    // }
    // // 点赞话题回复
    // async admireTopic(params) {
    //     let result = await postJSON(api.upreply + params.replyid + '/ups', params)
    //     if (result && result.data && result.data.success) {
    //         // 成功点赞
    //         return result.data
    //     } else {
    //         // 点赞失败
    //         Taro.showToast({ title: '点赞失败!', icon: 'none' })
    //     }
    //     return false
    // }

    // async replyContent(params) {
    //     let result = await postJSON(api.replytopic + params.topicid + '/replies', params)
    //     if (result && result.data && result.data.success) {
    //         // 成功评论
    //         return result.data
    //     } else {
    //         // 评论失败
    //         Taro.showToast({ title: '评论失败!', icon: 'none' })
    //     }
    //     return false
    // }
    // async submitTopic(params) {
    //     let result = await postJSON(api.createtopic, params)
    //     if (result && result.data && result.data.success) {
    //         return result.data
    //     } else {
    //         Taro.showToast({ title: '发布话题失败!', icon: 'none' })
    //     }
    //     return false
    // }
    // // 更新话题
    // async updateTopic(params) {
    //     let result = await postJSON(api.updatetopic, params)
    //     if (result && result.data && result.data.success) {
    //         return result.data
    //     } else {
    //         Taro.showToast({ title: '更新话题失败!', icon: 'none' })
    //     }
    //     return false
    // }
}
