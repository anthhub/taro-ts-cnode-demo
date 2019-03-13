import { GlobalStore } from './index'

declare global {
    interface IGlobalStore extends GlobalStore {}
}
