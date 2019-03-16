import { ServiceStore } from './index'

declare global {
    interface IServiceStore extends ServiceStore {}
}
