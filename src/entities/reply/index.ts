import { Author } from '@entities/user'
import { Entity, EntityBase } from '@lib/decorator/entity'

@Entity
export class Reply extends EntityBase<Reply> {
    id: string
    author: Author
    content: string
    ups: string[]
    create_at: string
    reply_id: string
    is_uped: boolean
}

@Entity
export class RecentReply extends EntityBase<RecentReply> {
    id: string
    author: Author
    title: string
    last_reply_at: string
}
