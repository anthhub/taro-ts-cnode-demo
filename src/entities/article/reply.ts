import { Entity, EntityBase } from '@lib/decorator/entity'

@Entity
export class Reply extends EntityBase<Reply> {
    createdAt: string
    id: number
    updatedAt: string
}
