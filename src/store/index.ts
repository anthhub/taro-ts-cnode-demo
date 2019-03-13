import { GlobalStore } from '@store/global'
import { CountStore } from '@store/test'
import { UserStore } from '@store/user'

export class RootStore {
    userStore: UserStore
    countStore: CountStore
    globalStore: GlobalStore

    constructor() {
        this.userStore = new UserStore(this)
        this.countStore = new CountStore(this)
        this.globalStore = new GlobalStore(this)
    }
}

const rootStore = new RootStore()

export default rootStore
