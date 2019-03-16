import './login.less'

import { autobind } from 'core-decorators'

import { Button, Input, View } from '@tarojs/components'
import { inject, observer } from '@tarojs/mobx'
// import { connect } from '@tarojs/redux'
import Taro, { Component } from '@tarojs/taro'

// import { accessUserToken } from '../../actions/user'
import Head from '../../components/head/head'

// @connect(
//     function(store) {
//         return { user: store.user }
//     },
//     function(dispatch) {
//         return {
//             accessUserToken(params) {
//                 return dispatch(accessUserToken(params))
//             },
//         }
//     }
// )
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
    //验证token
    loginToken() {
        // if (this.state.token) {
        //     if (this.props.accessUserToken) {
        //         this.props.accessUserToken({ accesstoken: this.state.token }).then(result => {
        //             Taro.redirectTo({ url: '/pages/user/user' })
        //         })
        //     }
        // } else {
        //     Taro.showToast({ title: '请输入秘钥再进行登录验证!', icon: 'none' })
        // }
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
