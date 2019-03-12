import { CountStore } from '@store/tset'
import { UserStore } from '@store/user'

export class RootStore {
    userStore: UserStore
    countStore: CountStore
    // viewStore: ViewStore

    constructor() {
        this.userStore = new UserStore(this)
        this.countStore = new CountStore(this)
        // this.viewStore = new ViewStore(this)
    }
}

const rootStore = new RootStore()

export default rootStore
