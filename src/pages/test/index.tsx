import { Button, View } from '@tarojs/components'
import { BaseEvent } from '@tarojs/components/types/common'
import { inject, observer } from '@tarojs/mobx'
import Taro, { Component, PageConfig } from '@tarojs/taro'
import { ComponentClass } from 'react'
import MIcon from '../../components/icon'
import paging from '../../lib/decorator/paging'
import wishShare from '../../lib/decorator/wishShare'
import CounterStore from '../../store1/counter'
import './index.scss'

export interface IPageProps {
    counter: CounterStore
}

export interface IPageState {}

interface Index {
    props: IPageProps
}

@inject('counter')
@observer
@wishShare()
@paging()
class Index extends Component {
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
        this.props.counter.decrement(dataset.number)
    }

    handleIncrement = (event: BaseEvent) => {
        const dataset = event.target.dataset
        this.props.counter.increment(dataset.number)
    }

    render() {
        const { counter } = this.props
        const number = counter.counter
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

export default Index as ComponentClass<IPageProps, IPageState>
