import { autobind } from 'core-decorators'
import { observable } from 'mobx'

import { StoreExt } from '@lib/extent/store'
import { RootStore } from '@store'
import Taro from '@tarojs/taro'

import { Pages, pagesMap } from './data'

@autobind
export class GlobalStore extends StoreExt {
    @observable
    pagesMap = pagesMap

    rootStore: RootStore
    constructor(rootStore: RootStore) {
        super()
        this.rootStore = rootStore
    }

    navigateTo(page: Pages) {
        if (!this.pagesMap[page]) {
            return
        }

        if (page === 'user') {
            // 用户页面鉴权
            if (!this.rootStore.userStore.validateUser()) {
                Taro.navigateTo({ url: this.pagesMap.login })
                return
            }
        }

        Taro.navigateTo({ url: this.pagesMap[page] })
    }

    protected effects(): void {}
}
