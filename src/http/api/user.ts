import { Result } from '@entities/common'
import apiObject from '@http/constants'
import request from '@http/request'

export default {
    checkUserToken(data) {
        return request.post(apiObject.checkUserToken, data || {}) as Promise<Result<IAuth>>
    },
    getUserInfo(data) {
        return request.post(apiObject.getUserInfo, data || {}) as Promise<Result<IUser>>
    },
}
