import { Image, Text, View } from '@tarojs/components'
import Taro, { Component } from '@tarojs/taro'
import { IHeadProps } from '../../interfaces/IHead'
import './head.less'
class Head extends Component<IHeadProps, {}> {
    render() {
        const { loginname, avatar_url } = this.props
        return (
            <View className="login-head">
                <Image className="login-head-back" src={require('../../assets/img/loginBack.jpg')} />
                <Image className="login-head-head" src={avatar_url ? avatar_url : require('../../assets/img/head.png')} />
                {loginname ? <Text className="login-head-name">{loginname}</Text> : null}
            </View>
        )
    }
}
export default Head
