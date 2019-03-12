import { CountStore } from './index'

declare global {
    interface ICountStore extends CountStore {}
}
