import { autobind } from 'core-decorators'
import { observable, runInAction, action } from 'mobx'

import { StoreExt } from '@lib/extent/store'
import { RootStore } from '@store'
import { TopicDetailStore } from './detail'

@autobind
export class TopicStore extends StoreExt {
    detail: TopicDetailStore = new TopicDetailStore(this)

    @observable
    topicList: ITopic[] = []

    @observable
    page = 0

    rootStore: RootStore = null
    constructor(_rootStore?: RootStore) {
        super()
        // this.rootStore = rootStore
        // this.effects()
        this.loadList()
    }

    @action
    setPage(page: number) {
        this.page = page
    }

    // protected effects(): void {
    //     // reaction(() => this.topicList, topicList => this.setCache('topicList', topicList))

    //     reaction(() => this.tab, tab => this.loadList({ tab }))

    //     reaction(() => this.page, page => this.apendList({ tab: this.tab, page }))
    // }

    async apendList(params?) {
        let topicList: ITopic[]
        try {
            topicList = await this.api.topic.getTopics(params)
        } catch (error) {
            // topicList = await this.getCache('topicList')
        }

        runInAction(() => (this.topicList = [...this.topicList, ...topicList]))
        console.log('topicList ', this.topicList)
    }

    async loadList(params?) {
        let topicList: ITopic[]
        try {
            topicList = await this.api.topic.getTopics(params)
        } catch (error) {
            // topicList = await this.getCache('topicList')
        }

        runInAction(() => (this.topicList = topicList))
        console.log('topicList ', this.topicList)
    }
}
