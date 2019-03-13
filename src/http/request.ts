import '@tarojs/async-await'

import { Result } from '@entities/common'
import Taro from '@tarojs/taro'

class Req {
    get(url: string, data) {
        return this.request({ url, data: data || {}, method: 'GET' })
    }

    post(url: string, data) {
        return this.request({ header: { 'content-type': 'application/json' }, url, data: data || {}, method: 'POST' })
    }

    private async request(options) {
        Taro.showLoading({ title: '全力请求中!', mask: true })
        try {
            const result = await Taro.request(options)
            return result.data as Promise<Result<any>>
        } catch (error) {
            Taro.showToast({ title: '请求异常' })
            return null
        } finally {
            Taro.hideLoading()
        }
    }
}

export default new Req()
