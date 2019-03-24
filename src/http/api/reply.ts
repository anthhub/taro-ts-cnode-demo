import apiObject from '@http/constants'
import request from '@http/request'

class Reply {
    async replyTopic(data?) {
        return (await request.post(apiObject.replyTopic + data.topicid + '/replies', data || {})) as Result<null>
    }
    async upReply(data?) {
        return (await request.post(apiObject.upReply + data.replyid + '/ups', data || {})) as Result<null>
    }
}

const reply = new Reply()

export default reply
