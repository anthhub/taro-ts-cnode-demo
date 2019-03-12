import { Reply } from '@entities/reply'
import { Author } from '@entities/user'
import { Entity, EntityBase } from '@lib/decorator/entity'

@Entity
export class Topic extends EntityBase<Topic> {
    id: string
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

@Entity
export class TopicDetail extends Topic {
    is_collect: boolean
    reply: Reply[]

    constructor(_props: TopicDetail & Topic) {
        super(_props)
    }
}

@Entity
export class RecentTopic extends EntityBase<RecentTopic> {
    id: string
    author: Author
    title: string
    last_reply_at: string
}
