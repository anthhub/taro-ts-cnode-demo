import Taro, { Component } from '@tarojs/taro'

export abstract class CompExt<P = {}, S = {}> extends Component<P, S> {
    protected $showToast(title = '成功', icon = 'success', duration = 2000) {
        Taro.showToast({ title, icon, duration })
    }
}
