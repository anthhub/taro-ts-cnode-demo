import './menu.less'

// import { connect } from '@tarojs/redux'
import { AtDrawer } from 'taro-ui'

import { Image, Text, View } from '@tarojs/components'
import { inject, observer } from '@tarojs/mobx'
import Taro, { Component } from '@tarojs/taro'

// import { changeCata, hideDrawer, showDrawer } from '../../actions/menu'
// import { validateUser } from '../../actions/user'

// @connect(
//     function(store) {
//         return { ...store.menu, user: store.user }
//     },
//     function(dispatch) {
//         return {
//             showMenu() {
//                 dispatch(showDrawer())
//             },
//             hideDrawer() {
//                 dispatch(hideDrawer())
//             },
//             changeCata(cata) {
//                 dispatch(changeCata(cata))
//             },
//         }
//     }
// )

interface IProps {
    viewStore?: IViewStore
}
@inject(({ viewStore }: IStore) => ({ viewStore }))
@observer
class Menu extends Component<IProps> {
    getItems(cataData) {
        // return cataData.map(item => item.value)
    }
    //点击分类时触发
    clickCata(index) {
        // let { cataData } = this.props
        // let clickCata = cataData[index] //获取点击项的数据
        // if (clickCata.key !== this.props.currentCata.key) {
        //     this.props.changeCata && this.props.changeCata(clickCata) //点击分类 触发切换分类方法
        // }
    }

    toUser() {
        // let { user } = this.props
        // validateUser(user).then(result => {
        //     if (result) {
        //         //成功跳转到用户详情
        Taro.navigateTo({ url: '/pages/user/user' })
        //     }
        // })
    }
    render() {
        const { drawerVisible, showDrawer, hideDrawer } = this.props.viewStore

        // let items = this.getItems(cataData) //获取分类列表
        return (
            <View className="topiclist-menu">
                <AtDrawer
                    onClose={hideDrawer}
                    onItemClick={this.clickCata}
                    style="position:absolute;"
                    show={drawerVisible}
                    items={[]}
                />
                <Image onClick={showDrawer} className="image  left" src={require('../../assets/img/cata.png')} />
                <Text onClick={hideDrawer}>menu </Text>
                <Image onClick={this.toUser} className="image right" src={require('../../assets/img/login.png')} />
            </View>
        )
    }
}

export default Menu
