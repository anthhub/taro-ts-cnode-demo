import '@tarojs/async-await'
import './app.scss'

import es6Promise from 'es6-promise'

import { Provider } from '@tarojs/mobx'
import Taro, { Component, Config } from '@tarojs/taro'

import store from './store'

es6Promise.polyfill()

class App extends Component {
    config: Config = {
        pages: ['pages/index/index', 'pages/login/login', 'pages/user/user', 'pages/detail/index', 'pages/publish/publish'],

        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: 'WeChat',
            navigationBarTextStyle: 'black',
        },
    }

    componentDidMount() {
        // const updateManager = Taro.getUpdateManager()
        // updateManager.onCheckForUpdate(function (res) {
        //   console.log(res.hasUpdate)
        // })
        // updateManager.onUpdateReady(function () {
        //   alert("更新提示", "新版本已经准备好，是否重启应用？").then(() => {
        //     updateManager.applyUpdate()
        //   })
        // })
        // updateManager.onUpdateFailed(function () {
        //   alert("更新提示", "新版本下载失败")
        // })
    }

    componentDidShow() {}

    componentDidHide() {}

    componentDidCatchError() {}

    render() {
        return <Provider store={store} />
    }
}

Taro.render(<App />, document.getElementById('app'))
