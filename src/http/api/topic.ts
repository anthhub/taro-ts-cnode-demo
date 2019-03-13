import { Result } from '@entities/common'
import apiObject from '@http/constants'
import request from '@http/request'

export default {
    getTopics(data?) {
        return request.get(apiObject.getTopics, data || { limit: 20 }) as Promise<Result<ITopic[]>>
    },
    getTopicInfo(data?: { id: string }) {
        return request.get(apiObject.getTopicInfo, data || {}) as Promise<Result<ITopicDetail>>
    },
    createTopic(data?) {
        return request.post(apiObject.createTopic, data || {}) as Promise<Result<null>>
    },
    updateTopic(data?) {
        return request.post(apiObject.replyTopic, data || {}) as Promise<Result<null>>
    },
}
