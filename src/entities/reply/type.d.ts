import { Reply, RecentReply } from './index'

declare global {
    interface IReply extends Reply {}
    interface IRecentReply extends RecentReply {}
}
