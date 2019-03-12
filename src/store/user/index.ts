import { StoreExt } from '@lib/extent/store'
import { RootStore } from '@store'

import { UserModal } from './modal/modal'

export class UserStore extends StoreExt {
    userModal: UserModal = new UserModal(this)

    user = this.userModal.user

    rootStore: RootStore
    constructor(rootStore: RootStore) {
        super()
        this.rootStore = rootStore
    }
    protected effects(): void {}
}
