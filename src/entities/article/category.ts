import { Entity, EntityBase } from '@lib/decorator/entity'

@Entity
export class Category extends EntityBase<Category> {
    name: string

    count?: number
}
