import { StoreExt } from '@utils/reactExt'

import { ViewModal } from './modal/modal'
import { RootStore } from '@store'

export class ViewStore extends StoreExt {
    viewModal: ViewModal = new ViewModal(this)

    view = this.viewModal.view

    rootStore: RootStore
    constructor(rootStore: RootStore) {
        super()
        this.rootStore = rootStore
    }
}
