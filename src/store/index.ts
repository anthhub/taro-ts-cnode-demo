import { autobind } from 'core-decorators'
import { UserStore } from '@store/global/user'
import { RouterStore } from '@store/global/router'
import { ViewStore } from '@store/global/view'
import { TopicStore } from '@store/business/topic'

@autobind
export class RootStore {
    userStore: UserStore

    routerStore: RouterStore
    viewStore: ViewStore
    topicStore: TopicStore

    constructor() {
        this.userStore = new UserStore(this)

        this.routerStore = new RouterStore(this)
        this.viewStore = new ViewStore(this)
        this.topicStore = new TopicStore(this)
    }
}

const rootStore = new RootStore()

export default rootStore
