import '@tarojs/async-await'

import Taro from '@tarojs/taro'

class Req {
    get(url, data) {
        return this.request({ url, data: data || {}, method: 'GET' })
    }

    post(url, data) {
        return this.request({ header: { 'content-type': 'application/json' }, url, data: data || {}, method: 'POST' })
    }

    private async request(options) {
        Taro.showLoading({ title: '全力请求中!', mask: true })
        const result = ((await Taro.request(options)) as unknown) as Promise<IResult>
        Taro.hideLoading()
        return result
    }
}

export default new Req()
