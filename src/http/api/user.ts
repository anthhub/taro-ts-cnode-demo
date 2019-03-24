import '@tarojs/async-await'

import { Result } from '@entities/common'
import apiObject from '@http/constants'
import request from '@http/request'

class User {
    async checkUserToken(data: { accesstoken: string }) {
        return (await request.post(apiObject.checkUserToken, data || {})) as Result<null> & IAuth
    }
    async getUserInfo(data: { loginname: string }) {
        return (await request.get(apiObject.getUserInfo + data.loginname, {})).data as IUser
    }
}
const user = new User()

export default user
