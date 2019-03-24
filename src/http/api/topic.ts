import apiObject from '@http/constants'
import request from '@http/request'

class Topic {
    async getTopics(data?) {
        return (await request.get(apiObject.getTopics, data || {})).data as ITopic[]
    }
    async getTopicDetail(data?: { id: string }) {
        return (await request.get(apiObject.getTopicInfo + data.id, data || {})).data as ITopicDetail
    }
    async createTopic(data?) {
        return await request.post(apiObject.createTopic, data || {})
    }
    async updateTopic(data?) {
        return (await request.post(apiObject.replyTopic, data || {})).data
    }
}

const topic = new Topic()

export default topic
