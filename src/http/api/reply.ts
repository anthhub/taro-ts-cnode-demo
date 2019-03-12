import { Result } from '@entities/common'
import apiObject from '@http/constants'
import request from '@http/request'

export default {
    replyTopic(data?) {
        return request.post(apiObject.replyTopic, data || {}) as Promise<Result<null>>
    },
    upReply(data?) {
        return request.post(apiObject.createTopic, data || {}) as Promise<Result<null>>
    },
}
