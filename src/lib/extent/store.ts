import api from '@http/'
import { getCache, setCache } from '@lib/helper/cache'
import Taro from '@tarojs/taro'

export abstract class StoreExt {
    protected readonly api = api
    protected readonly getCache = getCache
    protected readonly setCache = setCache

    constructor() {}

    protected $showToast(title = '成功', icon = 'none', duration = 2000) {
        Taro.showToast({ title, icon, duration })
    }
}
