let fieldStore = {}

/**
 *  实体类基类
 */
class EntityBase<T> {
    constructor(_props?: T) {}
}

/**
 *  实体类装饰器, 自动构建类属性
 */

function Entity<T extends new (...args: any[]) => {}>(constructor: T) {
    return class extends constructor {
        // tslint:disable-next-line: no-any
        constructor(...props: any[]) {
            super()
            if (!props.length) {
                return
            }
            const prop = props[0]
            Object.keys(this).map(item => this[item] && prop[item] && (this[item] = prop[item]))
            Object.keys(fieldStore).map(item => (this[item] = prop[fieldStore[item]]))
            fieldStore = {}
        }
    }
}

/**
 * 字段别名装饰器, new class 优先级最高
 */

function FiledName(param?: string) {
    if (!param) {
        return
    }
    return (_target, key) => {
        fieldStore[key] = param
    }
}

@Entity
class Auth extends EntityBase<Auth> {
    id: string
    loginname: string
    avatar_url: string
}

const auth = new Auth({ id: '', loginname: '', avatar_url: '' })
console.log('================auth====================')
console.log(auth)
console.log('====================================')
