import { Author } from '@entities/user'
import { entity, EntityBase } from '@lib/decorator/entity'

@entity
export class Reply extends EntityBase<Reply> {
    readonly id: string
    author: Author
    content: string
    ups: string[]
    create_at: string
    reply_id: string
    is_uped: boolean
}

@entity
export class RecentReply extends EntityBase<RecentReply> {
    readonly id: string
    author: Author
    title: string
    last_reply_at: string
}
