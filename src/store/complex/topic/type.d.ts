import { TopicStore } from './index'

declare global {
    interface ITopicStore extends TopicStore {}
}
