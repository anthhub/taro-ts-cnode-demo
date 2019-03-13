import { observable } from 'mobx'

import { StoreExt } from '@lib/extent/store'
import { RootStore } from '@store'
import Taro from '@tarojs/taro'

import { Pages, pagesMap } from './data'

export class GlobalStore extends StoreExt {
    @observable
    pagesMap = pagesMap

    rootStore: RootStore
    constructor(rootStore: RootStore) {
        super()
        this.rootStore = rootStore
    }

    navigateTo(url: Pages) {
        if (!this.pagesMap[url]) {
            return
        }
        Taro.navigateTo({ url: this.pagesMap[url] })
    }

    protected effects(): void {}
}
