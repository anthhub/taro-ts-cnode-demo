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

    navigateTo(page: Pages, params: PlainObject = {}) {
        let url = this.pagesMap[page]
        if (!url) {
            Taro.showToast({ title: '页面不存在' })
            return
        }

        const paramStr = Object.keys(params)
            .map(key => key + '=' + params[key])
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
