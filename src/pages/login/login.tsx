import './login.less'

import { autobind } from 'core-decorators'

import { Button, Input, View } from '@tarojs/components'
import { inject, observer } from '@tarojs/mobx'
import Taro, { Component } from '@tarojs/taro'

import Head from '../../components/head/head'

interface IProps {
    userStore?: IUserStore
    routerStore?: IRouterStore
}
@inject(({ userStore, routerStore }: IStore) => ({ routerStore, userStore }))
@observer
@autobind
class Login extends Component<IProps> {
    token: string = null

    config = {
        navigationBarTitleText: '登录',
    }
    changeToken(event) {
        this.token = event.target.value
    }
    // 验证token
    loginToken() {
        const {
            userStore: { accessUserToken },
        } = this.props
        accessUserToken(this.token)
    }
    render() {
        return (
            <View className="login-body">
                <Head />
                <View className="form">
                    <Input type="text" onInput={this.changeToken} className="access_input" placeholder="请输入accesstoken" />
                    <Button onClick={this.loginToken} className="btn_login">
                        登录
                    </Button>
                </View>
            </View>
        )
    }
}
export default Login
