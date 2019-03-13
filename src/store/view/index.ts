import { action, observable } from 'mobx'

import { StoreExt } from '@lib/extent/store'
import { RootStore } from '@store'

export class ViewStore extends StoreExt {
    @observable
    drawerVisible = true

    rootStore: RootStore
    constructor(rootStore: RootStore) {
        super()
        this.rootStore = rootStore
    }

    @action
    showDrawer = () => {
        console.log('============= this.drawerVisible=======================')
        console.log(this.drawerVisible)
        console.log('====================================')
        this.drawerVisible = true
    }

    @action
    hideDrawer = () => {
        console.log('============= this.drawerVisible=======================')
        console.log(this.drawerVisible)
        console.log('====================================')
        this.drawerVisible = false
    }

    protected effects(): void {}
}
