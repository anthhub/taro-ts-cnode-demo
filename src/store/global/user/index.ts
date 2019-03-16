import { autobind } from 'core-decorators'

import { Auth, User } from '@entities/user'
import { StoreExt } from '@lib/extent/store'
import { RootStore } from '@store'

@autobind
export class UserStore extends StoreExt {
    userInfo: IUser = new User()

    userAuth: IAuth = new Auth()

    accesstoken = '3876f1ab-97d3-414e-8cbc-157365f0a977'

    rootStore: RootStore
    constructor(rootStore: RootStore) {
        super()
        this.rootStore = rootStore
    }

    // 验证用户信息
    validateUser() {
        if (this.accesstoken) {
            return true
        }
        return false
    }

    // 获取token
    async accessUserToken(accesstoken: string) {
        const data = await this.api.user.checkUserToken({ accesstoken })
        if (data) {
            this.getUserInfo(data.loginname)
            this.accesstoken = accesstoken
            this.userAuth = new Auth(data)
            this.rootStore.routerStore.redirectTo('user')
        }
    }
    // 获取用户信息
    private async getUserInfo(loginname: string) {
        const data = await this.api.user.getUserInfo({ loginname })
        if (data.success) {
            this.userInfo = data
        }
    }
}
