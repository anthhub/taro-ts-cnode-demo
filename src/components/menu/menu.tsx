import './menu.less'

import { autobind } from 'core-decorators'
// import { connect } from '@tarojs/redux'
import { AtDrawer } from 'taro-ui'

import { Image, Text, View } from '@tarojs/components'
import { inject, observer } from '@tarojs/mobx'
import Taro, { Component } from '@tarojs/taro'

// import { changeCata, hideDrawer, showDrawer } from '../../actions/menu'
// import { validateUser } from '../../actions/user'

interface IProps {
    viewStore?: IViewStore
    globalStore?: IGlobalStore
}
@inject(({ viewStore, globalStore }: IStore) => ({ viewStore, globalStore }))
@observer
@autobind
class Menu extends Component<IProps> {
    clickCata(index) {
        const { cataData, changeCata } = this.props.viewStore
        const clickCata = cataData[index] //获取点击项的数据
        changeCata(clickCata) //点击分类 触发切换分类方法
    }

    toUser() {
        const { navigateTo } = this.props.globalStore
        navigateTo('user')
    }
    render() {
        const { drawerVisible, showDrawer, hideDrawer, cataData, currentCata } = this.props.viewStore
        const items = cataData.map(item => item.value)
        return (
            <View className="topiclist-menu">
                <AtDrawer
                    className="atdrawer"
                    onClose={hideDrawer}
                    onItemClick={this.clickCata}
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
