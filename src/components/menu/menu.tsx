import './menu.less'

import { autobind } from 'core-decorators'

import { AtDrawer } from 'taro-ui'

import { Image, Text, View } from '@tarojs/components'
import { inject, observer } from '@tarojs/mobx'
import Taro, { Component } from '@tarojs/taro'

interface IProps {
    viewStore?: IViewStore
    routerStore?: IRouterStore
    userStore?: IUserStore
    topicStore?: ITopicStore
}
@inject(({ viewStore, routerStore, userStore, topicStore }: IStore) => ({ viewStore, routerStore, userStore, topicStore }))
@observer
@autobind
class Menu extends Component<IProps> {
    clickCata(index) {
        const {
            viewStore: { cataData, changeCata, tab },
            topicStore: { loadList },
        } = this.props
        changeCata(cataData[index])
        loadList({ tab })
    }

    toUser() {
        const {
            routerStore: { navigateTo },
            userStore: { validateUser },
        } = this.props
        if (validateUser()) {
            navigateTo('user')
        } else {
            navigateTo('login')
        }
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
