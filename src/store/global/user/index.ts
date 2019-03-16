import { StoreExt } from '@lib/extent/store'
import { RootStore } from '@store'
import { autobind } from 'core-decorators'

@autobind
export class UserStore extends StoreExt {
    userInfo: IUser

    userAuth: IAuth

    rootStore: RootStore
    constructor(rootStore: RootStore) {
        super()
        this.rootStore = rootStore
    }

    // 验证用户信息
    async validateUser() {
        if (this.user.accesstoken) {
            return true
        }
        return false
    }

    // 获取token
    async accessUserToken(accesstoken: string) {
        const data = await this.api.user.checkUserToken({ accesstoken })
        if (data.success) {
            this.userAuth = data
            this.getUserInfo(data.loginname)
            this.rootStore.routerStore.navigateTo('user')
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
