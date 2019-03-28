import { autobind } from 'core-decorators'
import { action, observable, computed } from 'mobx'

import { StoreExt } from '@lib/extent/store'
import { RootStore } from '@store'

@autobind
export class ViewStore extends StoreExt {
    @observable
    drawerVisible = false

    @observable
    cataData = [
        { key: 'all', value: '全部' },
        { key: 'good', value: '精华' },
        { key: 'share', value: '分享' },
        { key: 'ask', value: '问答' },
        { key: 'job', value: '招聘' },
        { key: 'dev', value: '客户端测试' },
    ]

    @observable
    currentCata = { key: 'all', value: '全部' }

    @computed
    get tab() {
        return this.currentCata.key
    }

    rootStore: RootStore = null
    constructor(_rootStore?: RootStore) {
        super()
        // this.rootStore = rootStore
    }

    @action
    showDrawer() {
        this.drawerVisible = true
    }

    @action
    hideDrawer() {
        this.drawerVisible = false
    }

    @action
    changeCata(cata) {
        this.currentCata = cata
    }

    protected effects(): void {}
}
