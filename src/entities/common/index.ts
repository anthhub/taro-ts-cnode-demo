export class Result<Entity> {
    success: boolean
    error_msg?: string
    data?: Entity
    [propName: string]: any
}
