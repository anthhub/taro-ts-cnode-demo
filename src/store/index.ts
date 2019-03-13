import { GlobalStore } from '@store/global'
import { CountStore } from '@store/test'
import { UserStore } from '@store/user'
import { ViewStore } from '@store/view'
import { autobind } from 'core-decorators'
@autobind
export class RootStore {
    userStore: UserStore
    countStore: CountStore
    globalStore: GlobalStore
    viewStore: ViewStore

    constructor() {
        this.userStore = new UserStore(this)
        this.countStore = new CountStore(this)
        this.globalStore = new GlobalStore(this)
        this.viewStore = new ViewStore(this)
    }
}

const rootStore = new RootStore()

export default rootStore
