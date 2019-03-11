import { Entity, EntityBase } from '@lib/decorator/entity'

import { Category } from './category'
import { Comment } from './comment'
import { Tag } from './tag'

@Entity
export class Article extends EntityBase<Tag> {
    categories: Category[]
    comments: Comment[]
    content: string
    description?: string
    createdAt: string
    id: number
    tags: Tag[]
    title: string
    updatedAt: string
}
