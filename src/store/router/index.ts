import { autobind } from 'core-decorators'
import { observable } from 'mobx'

import { StoreExt } from '@lib/extent/store'
import { RootStore } from '@store'
import Taro from '@tarojs/taro'
import { pagesMap, Pages } from '../../route'

@autobind
export class RouterStore extends StoreExt {
    @observable
    pagesMap = pagesMap

    rootStore: RootStore = null
    constructor(_rootStore?: RootStore) {
        super()
        // this.rootStore = rootStore
    }

    redirectTo(page: Pages, params: PlainObject = {}) {
        const url = this.filterPage(page, params)
        if (url) {
            Taro.redirectTo({ url })
        }
    }

    navigateTo(page: Pages, params: PlainObject = {}) {
        const url = this.filterPage(page, params)
        if (url) {
            Taro.navigateTo({ url })
        }
    }

    private filterPage(page: Pages, params) {
        const url = this.pagesMap[page]

        if (!url) {
            Taro.showToast({ title: '页面不存在' })
            return
        }

        // if (page === 'user') {
        //     // 用户页面鉴权
        //     if (!this.rootStore.userStore.validateUser()) {
        //         this.navigateTo('login', params)
        //         return
        //     }
        // }

        const paramStr =
            (url.includes('?') ? '&' : '?') +
            Object.keys(params)
                .map(key => key + '=' + params[key])
                .join('&')

        return '/' + url + paramStr
    }
}
