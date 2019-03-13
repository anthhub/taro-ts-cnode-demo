import { autobind } from 'core-decorators'
import { observable, reaction, runInAction } from 'mobx'

import { StoreExt } from '@lib/extent/store'
import { RootStore } from '@store'

@autobind
export class TopicStore extends StoreExt {
    @observable
    topicList: ITopic[] = []

    rootStore: RootStore = null
    constructor(rootStore: RootStore) {
        super()
        this.rootStore = rootStore
        this.effects()
        this.loadList()
    }

    protected effects(): void {
        reaction(() => this.topicList, topicList => this.setCache('topicList', topicList))
    }

    private async loadList() {
        let topicList: ITopic[]
        try {
            topicList = (await this.api.topic.getTopics()).data
        } catch (error) {
            topicList = await this.getCache('topicList')
        }

        runInAction(() => (this.topicList = topicList))
        console.log('topicList ', this.topicList)
    }
}
