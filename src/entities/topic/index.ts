import { Reply } from '@entities/reply'
import { Author } from '@entities/user'
import { entity, EntityBase } from '@lib/decorator/entity'

@entity
export class Topic extends EntityBase<Topic> {
    readonly id: string
    author_id: string
    tab: string
    content: string
    title: string
    last_reply_at: string
    good: boolean
    top: boolean
    reply_count: number
    visit_count: number
    create_at: string
    author: Author
}

@entity
export class TopicDetail extends Topic {
    is_collect: boolean
    reply: Reply[]

    constructor(_props: TopicDetail & Topic) {
        super(_props)
    }
}

@entity
export class RecentTopic extends EntityBase<RecentTopic> {
    readonly id: string
    author: Author
    title: string
    last_reply_at: string
}
