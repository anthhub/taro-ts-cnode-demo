import { Author } from '@entities/user'
import { entity, EntityBase, field } from '@lib/decorator/entity'

@entity
export class Reply extends EntityBase<Reply> {
    @field readonly id: string
    @field author: Author
    @field content: string
    @field ups: string[]
    @field create_at: string
    @field reply_id: string
    @field is_uped: boolean
}

@entity
export class RecentReply extends EntityBase<RecentReply> {
    @field readonly id: string
    @field author: Author
    @field title: string
    @field last_reply_at: string
}
