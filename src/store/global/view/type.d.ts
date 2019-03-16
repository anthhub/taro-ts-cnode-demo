import { ViewStore } from './index'

declare global {
    interface IViewStore extends ViewStore {}
}
