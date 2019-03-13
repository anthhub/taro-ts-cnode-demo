import Taro, { Component } from '@tarojs/taro'

function showToast(title = '成功', icon = 'success', duration = 2000) {
    Taro.showToast({ title, icon, duration })
}

export abstract class CompExt<P = {}, S = {}> extends Component<P, S> {
    protected $showToast = showToast
}
