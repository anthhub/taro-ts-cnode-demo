import { autobind } from 'core-decorators'

import { TopicStore } from '@store/complex/topic/index1'
import { GlobalStore } from '@store/global'
import { CountStore } from '@store/test'
import { UserStore } from '@store/user'
import { ViewStore } from '@store/view'

@autobind
export class RootStore {
    userStore: UserStore
    countStore: CountStore
    globalStore: GlobalStore
    viewStore: ViewStore
    topicStore: TopicStore

    constructor() {
        this.userStore = new UserStore(this)
        this.countStore = new CountStore(this)
        this.globalStore = new GlobalStore(this)
        this.viewStore = new ViewStore(this)
        this.topicStore = new TopicStore(this)
    }
}

const rootStore = new RootStore()

export default rootStore
