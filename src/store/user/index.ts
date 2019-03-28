import { autobind } from 'core-decorators'
import { observable, runInAction } from 'mobx'

import { Auth, User } from '@entities/user'
import { StoreExt } from '@lib/extent/store'
import { RootStore } from '@store'

@autobind
export class UserStore extends StoreExt {
    @observable
    userAuth: IAuth = new Auth()

    @observable
    userInfo: IUser = new User()

    @observable
    accesstoken = '5f48a3bb-eec3-4f8d-abd8-dd6bcffbda52'

    // accesstoken = ''

    rootStore: RootStore = null
    constructor(_rootStore?: RootStore) {
        super()
        // this.rootStore = rootStore
        // this.accessUserToken && this.accessUserToken(this.accesstoken)
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
            runInAction(() => {
                this.accesstoken = accesstoken
                this.userAuth = new Auth(data)
            })

            return true
            // this.rootStore.routerStore.redirectTo('user')
        }
        return false
    }
    // 获取用户信息
    private async getUserInfo(loginname: string) {
        const data = await this.api.user.getUserInfo({ loginname })
        if (data) {
            runInAction(() => (this.userInfo = new User(data)))
        }
    }
}
