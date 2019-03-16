import { StoreExt } from '@lib/extent/store'
import { RootStore } from '@store'
import { autobind } from 'core-decorators'

@autobind
export class UserStore extends StoreExt {
    user = null

    rootStore: RootStore
    constructor(rootStore: RootStore) {
        super()
        this.rootStore = rootStore
    }

    // 验证用户信息
    async validateUser() {
        if (this.user.accesstoken) {
            return true
        }
        return false
    }

    protected effects(): void {}
}
