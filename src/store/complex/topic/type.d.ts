import { TopicStore } from './index1'

declare global {
    interface ITopicStore extends TopicStore {}
}
