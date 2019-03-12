export class Result<Entity> {
    success: boolean
    data?: Entity
    [propName: string]: any
}
