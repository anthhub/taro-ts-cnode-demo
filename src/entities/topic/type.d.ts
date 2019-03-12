import { Auth, Acount, User } from './index'

declare global {
    interface IAuth extends Auth {}
    interface IAcount extends Acount {}
    interface IUser extends User {}
}
