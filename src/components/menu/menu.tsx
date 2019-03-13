import './menu.less'

// import { connect } from '@tarojs/redux'
import { AtDrawer } from 'taro-ui'

import { Image, Text, View } from '@tarojs/components'
import { inject, observer } from '@tarojs/mobx'
import Taro, { Component } from '@tarojs/taro'
import { autobind } from 'core-decorators'

// import { changeCata, hideDrawer, showDrawer } from '../../actions/menu'
// import { validateUser } from '../../actions/user'

interface IProps {
    viewStore?: IViewStore
}
@inject(({ viewStore }: IStore) => ({ viewStore }))
@observer
@autobind
class Menu extends Component<IProps> {
    clickCata(index) {
        const { cataData, changeCata } = this.props.viewStore
        const clickCata = cataData[index] //获取点击项的数据
        changeCata(clickCata) //点击分类 触发切换分类方法
    }

    toUser() {
        // let { user } = this.props
        // validateUser(user).then(result => {
        //     if (result) {
        //         //成功跳转到用户详情
        // Taro.navigateTo({ url: '/pages/user/user' })
        //     }
        // })
    }
    render() {
        const { drawerVisible, showDrawer, hideDrawer, cataData, currentCata } = this.props.viewStore
        const items = cataData.map(item => item.value)
        return (
            <View className="topiclist-menu">
                <AtDrawer
                    onClose={hideDrawer}
                    onItemClick={this.clickCata}
                    style="position:absolute;"
                    show={drawerVisible}
                    items={items}
                />
                <Image onClick={showDrawer} className="image  left" src={require('../../assets/img/cata.png')} />
                <Text onClick={hideDrawer}>{currentCata.value} </Text>
                <Image onClick={this.toUser} className="image right" src={require('../../assets/img/login.png')} />
            </View>
        )
    }
}

export default Menu
