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

    navigateTo(page: Pages, data: PlainObject = {}) {
        let url = this.pagesMap[page]
        if (!url) {
            return
        }

        const paramStr = Object.keys(data)
            .map(key => key + '=' + data[key])
            .join('&')

        url = url + url.includes('?') ? '&' : '?' + paramStr

        if (page === 'user') {
            // 用户页面鉴权
            if (!this.rootStore.userStore.validateUser()) {
                Taro.navigateTo({ url })
                return
            }
        }

        Taro.navigateTo({ url: this.pagesMap[page] })
    }

    protected effects(): void {}
}
