import './menu.less'

import { autobind } from 'core-decorators'

import { AtDrawer } from 'taro-ui'

import { Image, Text, View } from '@tarojs/components'
import { inject, observer } from '@tarojs/mobx'
import Taro, { Component } from '@tarojs/taro'

interface IProps {
    viewStore?: IViewStore
    routerStore?: IRouterStore
}
@inject(({ viewStore, routerStore }: IStore) => ({ viewStore, routerStore }))
@observer
@autobind
class Menu extends Component<IProps> {
    clickCata(index) {
        const { cataData, changeCata } = this.props.viewStore
        changeCata(cataData[index])
    }

    toUser() {
        const { navigateTo } = this.props.routerStore
        navigateTo('user')
    }
    render() {
        const { drawerVisible, showDrawer, hideDrawer, cataData, currentCata } = this.props.viewStore
        const items = cataData.map(item => item.value)
        return (
            <View className="topiclist-menu">
                <AtDrawer className="atdrawer" onClose={hideDrawer} onItemClick={this.clickCata} show={drawerVisible} items={items} />

                <Image onClick={showDrawer} className="image  left" src={require('../../assets/img/cata.png')} />
                <Text onClick={hideDrawer}>{currentCata.value} </Text>
                <Image onClick={this.toUser} className="image right" src={require('../../assets/img/login.png')} />
            </View>
        )
    }
}

export default Menu
