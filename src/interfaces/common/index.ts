import { Entity, EntityBase } from '@lib/decorator/entity'

@Entity
export class Result extends EntityBase<Result> {
    success: boolean
    [propName: string]: any
}
