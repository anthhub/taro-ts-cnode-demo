export class Result<entity> {
    success: boolean
    error_msg?: string
    data?: entity
    [propName: string]: any
}
