import { CountStore } from './index'

declare global {
    interface ICounterStore extends CountStore {}
}
