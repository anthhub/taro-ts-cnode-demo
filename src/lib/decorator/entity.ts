let fieldStore = {}

/**
 *  实体类基类
 */
class EntityBase<T> {
    constructor(_props?: T) {}
}

/**
 *  实体类装饰器, 自动构建类属性, 构造函数空参赋值null
 */

function entity<T extends new (...args: any[]) => {}>(constructor: T) {
    return class extends constructor {
        constructor(...props) {
            super()
            const prop = props[0]
            Object.keys(fieldStore).map(item => (this[item] = prop ? prop[fieldStore[item]] : null))
            fieldStore = {}
        }
    }
}

/**
 * 字段别名装饰器,  优先级最高
 */

function fieldName(param?: string) {
    return (_target, key) => {
        fieldStore[key] = param || key
    }
}

/**
 * 字段装饰器,  声明字段
 */

function field(_target, key) {
    fieldStore[key] = key
}

export { EntityBase, entity, fieldName, field }
