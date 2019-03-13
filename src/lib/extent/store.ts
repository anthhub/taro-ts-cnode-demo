import * as api from '@http/'

import Taro from '@tarojs/taro'

export abstract class StoreExt {
    protected readonly api = api
    protected $showToast(title = '成功', icon = 'success', duration = 2000) {
        Taro.showToast({ title, icon, duration })
    }
    protected abstract effects(): void
}
