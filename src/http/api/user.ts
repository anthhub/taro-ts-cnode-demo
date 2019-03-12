import { Result } from '@entities/common'
import apiObject from '@http/constants'
import request from '@http/request'

export default {
    checkUserToken(data?: { accesstoken: string }) {
        return request.post(apiObject.checkUserToken, data || {}) as Promise<Result<null> & IAuth>
    },
    getUserInfo(data?: { loginname: string }) {
        return request.get(apiObject.getUserInfo, data || {}) as Promise<Result<IUser>>
    },
}
