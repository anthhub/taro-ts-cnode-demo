// import { autobind } from 'core-decorators'
// import { computed, observable, reaction, runInAction } from 'mobx'

// import { StoreExt } from '@lib/extent/store'
// import { RootStore } from '@store'

// import { TopicModal } from './modal'

// @autobind
// export class TopicStore extends StoreExt {
//     @observable
//     topicModalList: TopicModal[] = []

//     @computed
//     get topicList() {
//         console.log('get topicList() ')
//         return this.topicModalList.slice().map(item => item.topic)
//     }

//     rootStore: RootStore = null
//     constructor(rootStore: RootStore) {
//         super()
//         this.rootStore = rootStore
//         this.effects()
//         this.loadList()
//     }

//     protected effects(): void {
//         reaction(() => this.topicList, topicList => this.setCache('topicList', topicList))
//     }

//     private async loadList() {
//         let topicList: ITopic[]
//         try {
//             topicList = (await this.api.topic.getTopics()).data
//         } catch (error) {
//             topicList = await this.getCache('topicList')
//         }

//         runInAction(() => (this.topicModalList = topicList.map(item => new TopicModal(this, item))))
//         console.log('topicModalList ', this.topicModalList)
//     }
// }
