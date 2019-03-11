import { RootStore } from './index'

declare global {
    interface IRootStore extends RootStore {}
}
declare global {
    interface IStore extends IRootStore {}
}
