import { Reply } from '@entities/reply'
import { Author } from '@entities/user'
import { entity, EntityBase, field } from '@lib/decorator/entity'

@entity
export class Topic extends EntityBase<Topic> {
    @field readonly id: string
    @field author_id: string
    @field tab: string
    @field content: string
    @field title: string
    @field last_reply_at: string
    @field good: boolean
    @field top: boolean
    @field reply_count: number
    @field visit_count: number
    @field create_at: string
    @field author: Author
}

@entity
export class TopicDetail extends Topic {
    @field is_collect: boolean
    @field replies: Reply[]

    constructor(_props?: TopicDetail & Topic) {
        super(_props)
    }
}

@entity
export class RecentTopic extends EntityBase<RecentTopic> {
    @field readonly id: string
    @field author: Author
    @field title: string
    @field last_reply_at: string
}
