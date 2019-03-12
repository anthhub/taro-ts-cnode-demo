import { action, observable } from 'mobx'

import { StoreExt } from '@lib/extent/store'
import { RootStore } from '@store'

export class CountStore extends StoreExt {
    @observable
    counter: number = 0

    rootStore: RootStore
    constructor(rootStore: RootStore) {
        super()
        this.rootStore = rootStore
    }

    @action
    increment = (number: number = 1) => {
        this.counter += number
    }

    @action
    decrement = (number: number = 1) => {
        this.counter -= number
    }

    protected effects(): void {}
}
