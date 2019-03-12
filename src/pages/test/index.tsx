import { Button, View } from '@tarojs/components'
import { BaseEvent } from '@tarojs/components/types/common'
import { inject, observer } from '@tarojs/mobx'
import Taro, { Component, PageConfig } from '@tarojs/taro'

import MIcon from '../../components/icon'

import './index.scss'

interface IStoreProps {
    countStore: ICounterStore
}

@inject(
    (store: IStore): IStoreProps => {
        const { countStore } = store
        return { countStore }
    }
)
@observer
class Index extends Component<IStoreProps> {
    config: PageConfig = {
        navigationBarTitleText: '首页',
        enablePullDownRefresh: true,
    }

    componentDidShow() {
        this.reload()
    }

    reload = () => {
        console.log('reload')
    }

    handleDecrement = (event: BaseEvent) => {
        const dataset = event.target.dataset
        this.props.countStore.decrement(dataset.number)
    }

    handleIncrement = (event: BaseEvent) => {
        const dataset = event.target.dataset
        this.props.countStore.increment(dataset.number)
    }

    render() {
        const { countStore } = this.props
        const number = countStore.counter
        return (
            <View>
                改一下
                <Button onClick={this.handleDecrement} data-number={10}>
                    <MIcon type="minus" /> 10
                </Button>
                <Button onClick={this.handleDecrement}>
                    <MIcon type="minus" />
                </Button>
                <View className="text">
                    <MIcon type="warning" className="icon" />
                    {number}
                </View>
                <Button onClick={this.handleIncrement}>
                    <MIcon type="plus" />
                </Button>
                <Button onClick={this.handleIncrement} data-number={10}>
                    <MIcon type="plus" /> 10
                </Button>
            </View>
        )
    }
}

export default Index
