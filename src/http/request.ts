import '@tarojs/async-await'

import { autobind } from 'core-decorators'

import { Result } from '@entities/common'
import Taro from '@tarojs/taro'

async function request(options) {
    Taro.showLoading({ title: '全力请求中!', mask: true })
    try {
        const { data } = ((await Taro.request(options)) as unknown) as Result<any>

        if (!data.success) {
            Taro.showToast({ title: data.error_msg + '', icon: 'none' })
            return null
        }
        return data
    } catch (error) {
        Taro.showToast({ title: '请求异常', icon: 'none' })
        return null
    } finally {
        Taro.hideLoading()
    }
}

@autobind
class Req {
    get(url: string, data?) {
        return request({ url, data: data || {}, method: 'GET' })
    }

    post(url: string, data?) {
        return request({ header: { 'content-type': 'application/json' }, url, data: data || {}, method: 'POST' })
    }
}

export default new Req()
