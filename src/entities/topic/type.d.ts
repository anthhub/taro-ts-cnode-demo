import { Topic, TopicDetail, RecentTopic } from './index'

declare global {
    interface ITopic extends Topic {}
    interface ITopicDetail extends TopicDetail {}
    interface IRecentTopic extends RecentTopic {}
}
