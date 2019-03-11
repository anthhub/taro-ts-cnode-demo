import { action, observable, reaction, runInAction } from 'mobx'

import { StoreExt } from '@utils/reactExt'

import { UserStore } from '../index'

export class UserModal extends StoreExt {
    // 实体类
    @observable
    user: IUser = { userId: 0, username: '', auth: 0, avatarColor: '#52c41a' }

    store: UserStore
    constructor(store: UserStore, user?: IUser) {
        super()
        this.store = store
        if (user) {
            this.user = user
        }

        this.effects()
    }

    async login(acount: IAcount) {
        try {
            const auth = await this.api.user.login(acount)
            runInAction(() => (this.user = { ...this.user, ...auth }))
        } catch (error) {
            this.$message.error('登录失败')
        }
    }

    async register(acount: IAcount) {
        try {
            await this.api.user.login(acount)
        } catch (error) {
            this.$message.error('登出失败')
        }
    }

    @action
    logout() {
        this.user.token = null
    }

    private async effects() {
        reaction(
            () => this.user.token,
            token => (token ? localStorage.setItem('token', token) : localStorage.removeItem('token'))
        )
    }
}
