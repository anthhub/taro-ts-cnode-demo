import { UserStore } from './index'

declare global {
    interface IUserStore extends UserStore {}
}
