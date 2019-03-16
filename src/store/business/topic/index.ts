import { autobind } from 'core-decorators'
import { observable, reaction, runInAction, computed, action } from 'mobx'

import { StoreExt } from '@lib/extent/store'
import { RootStore } from '@store'

@autobind
export class TopicStore extends StoreExt {
    @observable
    topicList: ITopic[] = []

    @observable
    topicInfo: ITopicDetail = null

    @observable
    page = 0

    @computed
    get tab() {
        return this.rootStore.viewStore.currentCata.key
    }

    rootStore: RootStore = null
    constructor(rootStore: RootStore) {
        super()
        this.rootStore = rootStore
        this.effects()
        this.loadList()
    }

    @action
    setPage(page: number) {
        this.page = page
    }

    async loadTopicInfo(params) {
        const topicInfo = await this.api.topic.getTopicInfo(params)
        runInAction(() => (this.topicInfo = topicInfo))
    }

    protected effects(): void {
        // reaction(() => this.topicList, topicList => this.setCache('topicList', topicList))

        reaction(() => this.tab, tab => this.loadList({ tab }))

        reaction(() => this.page, page => this.apendList({ tab: this.tab, page }))
    }

    private async apendList(params?) {
        let topicList: ITopic[]
        try {
            topicList = await this.api.topic.getTopics(params)
        } catch (error) {
            // topicList = await this.getCache('topicList')
        }

        runInAction(() => (this.topicList = [...this.topicList, ...topicList]))
        console.log('topicList ', this.topicList)
    }

    private async loadList(params?) {
        let topicList: ITopic[]
        try {
            topicList = await this.api.topic.getTopics(params)
        } catch (error) {
            topicList = await this.getCache('topicList')
        }

        runInAction(() => (this.topicList = topicList))
        console.log('topicList ', this.topicList)
    }
}
