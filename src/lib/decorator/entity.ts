let fieldStore = {}

/**
 *  实体类基类
 */
class EntityBase<T> {
    constructor(props: T) {}
}

/**
 *  实体类装饰器, 自动构建类属性
 */

function Entity<T extends new (...args: any[]) => {}>(constructor: T) {
    return class extends constructor {
        constructor(...props) {
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
    return (target, key) => {
        fieldStore[key] = param
    }
}

export { EntityBase, Entity, FiledName }
