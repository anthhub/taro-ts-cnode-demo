import { Button, ScrollView, Text, View } from '@tarojs/components'
import { inject, observer } from '@tarojs/mobx'

import Taro, { Component } from '@tarojs/taro'
import { autobind } from 'core-decorators'

// import { getNextList, getTopicList } from '../../actions/topiclist'
// import Topic from './topic'

// @connect(
//   function(store) {
//     return { ...store.topiclist, currentCata: store.menu.currentCata };
//   },
//   function(dispatch) {
//     return {
//       getTopicList(params) {
//         dispatch(getTopicList(params));
//       },
//       getNextList(params) {
//         dispatch(getNextList(params));
//       }
//     };
//   }
// )
interface IProps {
    viewStore?: IViewStore
    globalStore?: IGlobalStore
}
@inject(({ viewStore, globalStore }: IStore) => ({ viewStore, globalStore }))
@observer
@autobind
class TopicList extends Component<IProps> {
    componentWillMount() {
        // let { page, limit, currentCata } = this.props
        // this.props.getTopicList && this.props.getTopicList({ page, limit, tab: currentCata.key })
    }
    //触发分页请求 肯定是要请求下一页的  没有总页码
    onScrollToLower() {
        // let { page, limit, currentCata } = this.props
        // this.props.getNextList && this.props.getNextList({ page: page + 1, limit, tab: currentCata.key })
    }
    render() {
        let { list } = this.props
        return (
            <ScrollView style={{ height: '650PX' }} onScrollToLower={this.onScrollToLower.bind(this)} scrollY={true}>
                {list.map(
                    item => '123'
                    // <Topic item={item} />
                )}
            </ScrollView>
        )
    }
}
export default TopicList
