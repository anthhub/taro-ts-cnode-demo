import Taro from "@tarojs/taro"
import { IValue } from "../../interfaces/ICache"
// 设置缓存
export function setCahce(key: string, value: IValue): void {
  let params: any = value
  if (typeof value == "object") {
    params = JSON.stringify(value)
  }
  Taro.setStorageSync(key, params)
}
// 读取缓存
export function getCache(key) {
  let result = Taro.getStorageSync(key)
  if (result) {
    result = JSON.parse(result)
  } else {
    return null
  }
  return result
}
