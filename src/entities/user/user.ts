import { Entity, EntityBase } from '@lib/decorator/entity'

@Entity
export class User extends EntityBase<User> {
    userId: number
    username: string
    auth: number
    avatarColor: string // 用户头像颜色
    token?: string
}

@Entity
export class Acount extends EntityBase<Acount> {
    username: string
    auth: number
}

@Entity
export class Auth extends EntityBase<Auth> {
    auth: 2
    token: string
    username: string
}
