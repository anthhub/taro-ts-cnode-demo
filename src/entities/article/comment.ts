import { Entity, EntityBase } from '@lib/decorator/entity'
import { Reply } from './reply'

@Entity
export class Comment extends EntityBase<Comment> {
    createdAt: string
    id: number
    replies: Reply[]
    updatedAt: string
}
