import { observable } from 'mobx'

import { StoreExt } from '@lib/extent/store'

import { UserStore } from '../index'

export class UserModal extends StoreExt {
    // 实体类
    @observable
    user: IUser

    store: UserStore
    constructor(store: UserStore, user?: IUser) {
        super()
        this.store = store
        if (user) {
            this.user = user
        }

        this.effects()
    }

    protected effects(): void {}
}
