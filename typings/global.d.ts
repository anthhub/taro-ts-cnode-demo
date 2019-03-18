declare var process: {
    env: {
        TARO_ENV: string
        NODE_ENV: string
        APP_ENV: string
        BASEURL: string
    }
}

declare interface Result<T> {
    success: boolean
    error_msg?: string
    data?: T
    [propName: string]: any
}

declare interface PlainObject {
    [propName: string]: any
}

declare interface BooleanObject {
    [propName: string]: boolean
}

declare interface StringObject {
    [propName: string]: string
}

declare interface NumberObject {
    [propName: string]: number
}

declare interface Window {
    [method: string]: Function
    [property: string]: string
}
