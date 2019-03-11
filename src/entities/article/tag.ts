import { Entity, EntityBase } from '@lib/decorator/entity'

@Entity
export class Tag extends EntityBase<Tag> {
    name: string

    count?: number
}
