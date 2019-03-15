import { autobind } from 'core-decorators'

import { TopicStore } from '@store/complex/topic'
import { GlobalStore } from '@store/global'
import { CountStore } from '@store/test'
import { UserStore } from '@store/user'
import { ViewStore } from '@store/view'

import { ServerStore } from './server/index'

@autobind
export class RootStore {
    userStore: UserStore
    countStore: CountStore
    globalStore: GlobalStore
    viewStore: ViewStore
    topicStore: TopicStore
    serverStore: ServerStore

    constructor() {
        this.userStore = new UserStore(this)
        this.countStore = new CountStore(this)
        this.globalStore = new GlobalStore(this)
        this.viewStore = new ViewStore(this)
        this.topicStore = new TopicStore(this)
        this.serverStore = new ServerStore(this)
    }
}

const rootStore = new RootStore()

const serverStore = rootStore.serverStore

export { serverStore }

export default rootStore
