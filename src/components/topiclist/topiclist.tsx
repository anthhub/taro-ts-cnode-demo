import { autobind } from 'core-decorators'

import { ScrollView } from '@tarojs/components'
import { inject, observer } from '@tarojs/mobx'
import Taro, { Component } from '@tarojs/taro'

import Topic from './topic'

interface IProps {
    viewStore?: IViewStore
    routerStore?: IRouterStore
    topicStore?: ITopicStore
}
@inject(({ viewStore, routerStore, topicStore }: IStore) => ({ viewStore, routerStore, topicStore }))
@observer
@autobind
class TopicList extends Component<IProps> {
    // 触发分页请求 肯定是要请求下一页的  没有总页码
    onScrollToLower() {
        console.log('============onScrollToLower========================')
        console.log('onScrollToLower')
        console.log('====================================')
        const {
            topicStore: { setPage, page },
        } = this.props
        setPage(page + 1)
    }
    render() {
        const {
            topicStore: { topicList },
            routerStore,
        } = this.props

        return (
            <ScrollView style={{ height: '650PX' }} onScrollToLower={this.onScrollToLower} scrollY={true}>
                {topicList.map(item => (
                    <Topic item={item} routerStore={routerStore} />
                ))}
            </ScrollView>
        )
    }
}
export default TopicList
