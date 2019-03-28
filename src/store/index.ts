import { autobind } from 'core-decorators'

import { TopicStore } from '@store/business/topic'
import { RouterStore } from '@store/router'
import { UserStore } from '@store/user'
import { ViewStore } from '@store/view'

@autobind
export class RootStore {
    userStore: UserStore
    routerStore: RouterStore
    viewStore: ViewStore
    topicStore: TopicStore

    constructor() {
        this.userStore = new UserStore()
        this.routerStore = new RouterStore()
        this.viewStore = new ViewStore()
        this.topicStore = new TopicStore()
    }
}

const rootStore = new RootStore()

export default rootStore
