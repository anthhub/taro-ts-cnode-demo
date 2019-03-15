import { getCache, setCache } from '@lib/helper/cache'
import { Result } from '@entities/common'

export function useCache(Model, key) {
    // 获取Class对应的原型
    const target = Model.prototype

    // 获取函数对应的描述符
    const descriptor = Object.getOwnPropertyDescriptor(target, key)

    // 生成新的函数，天机缓存逻辑
    const optCache = async function(...arg) {
        const url = [...arg].reverse()[0] as string
        const cacheEnable = arg[1]
        if (cacheEnable) {
            if (cacheStore[url]) {
                return cacheStore[url]
            }

            // 读取缓存
            return await getCache(url)
        }
        try {
            // tslint:disable-next-line: no-invalid-this
            const result = (await descriptor.value.apply(this, arg)) as Result<any> // 调用之前的函数
            const data = result.data
            if (data) {
                cacheStore[url] = data
                try {
                    await setCache(url, data)
                } catch (error) {}
            }
            return data
        } catch {
            return null
        }
    }

    // 将修改后的函数重新定义到原型链上
    Object.defineProperty(target, key, {
        ...descriptor,
        value: optCache, // 覆盖描述符重的value
    })
}

const cacheStore = {}
