import { Result } from '@entities/common'
import apiObject from '@http/constants'
import request from '@http/request'

export default {
    async checkUserToken(data: { accesstoken: string }) {
        return (await request.post(apiObject.checkUserToken, data || {})) as Result<null> & IAuth
    },
    async getUserInfo(data: { loginname: string }) {
        return (await request.get(apiObject.getUserInfo + data.loginname, {})).data as IUser
    },
}
