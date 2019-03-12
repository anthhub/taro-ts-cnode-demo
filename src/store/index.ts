import { UserStore } from '@store/user'
// import { ViewStore } from '@store/view'

export class RootStore {
    userStore: UserStore
    // viewStore: ViewStore

    constructor() {
        this.userStore = new UserStore(this)
        // this.viewStore = new ViewStore(this)
    }
}

const rootStore = new RootStore()

export default rootStore
