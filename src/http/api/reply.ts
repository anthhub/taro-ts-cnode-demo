import apiObject from '@http/constants'
import request from '@http/request'

export default {
    async replyTopic(data?) {
        return await request.post(apiObject.replyTopic + data.topicid + '/replies', data || {})
    },
    async upReply(data?) {
        return await request.post(apiObject.upReply + data.replyid + '/ups', data || {})
    },
}
