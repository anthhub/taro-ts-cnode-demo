import { RouterStore } from './index'

declare global {
    interface IRouterStore extends RouterStore {}
}
