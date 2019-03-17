import { Result } from '@entities/common'
import apiObject from '@http/constants'
import request from '@http/request'

export default {
    async replyTopic(data?) {
        return await request.post(apiObject.replyTopic, data || {})
    },
    async upReply(data?: { id: string }) {
        return await request.post(apiObject.upReply + data.id, data || {})
    },
}
