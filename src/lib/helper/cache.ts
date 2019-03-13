import Taro from '@tarojs/taro'
import { IValue } from '../../interfaces/ICache'
// 设置缓存
export async function setCache(key: string, value: IValue) {
    let params: any = value
    if (typeof value === 'object') {
        params = JSON.stringify(value)
    }
    await Taro.setStorage({ key, data: params })
    return true
}
// 读取缓存
export async function getCache(key: string) {
    const result = ((await Taro.getStorage({ key })) as unknown) as string
    if (result) {
        return JSON.parse(result)
    } else {
        return null
    }
}
