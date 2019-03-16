import apiObject from '@http/constants'
import request from '@http/request'

export default {
    async getTopics(data?) {
        return (await request.get(apiObject.getTopics, data || {})).data as ITopic[]
    },
    async getTopicInfo(data?: { id: string }) {
        return (await request.get(apiObject.getTopicInfo + data.id)).data as ITopicDetail
    },
    async createTopic(data?) {
        return await request.post(apiObject.createTopic, data || {})
    },
    async updateTopic(data?) {
        return (await request.post(apiObject.replyTopic, data || {})).data
    },
}
