import { StoreExt } from '@utils/reactExt'

import { UserModal } from './modal/modal'
import { RootStore } from '@store'

export class UserStore extends StoreExt {
    userModal: UserModal = new UserModal(this)

    user = this.userModal.user

    rootStore: RootStore
    constructor(rootStore: RootStore) {
        super()
        this.rootStore = rootStore
    }
}
