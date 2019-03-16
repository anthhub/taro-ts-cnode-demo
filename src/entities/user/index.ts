import { Entity, EntityBase } from '@lib/decorator/entity'

@Entity
export class Author extends EntityBase<Author> {
    loginname: string
    avatar_url: string
}

@Entity
export class User extends EntityBase<User> {
    loginname: string
    avatar_url: string
    githubUsername: string
    create_at: string
    score: number
}

@Entity
export class Auth extends EntityBase<Auth> {
    id: string
    loginname: string
    avatar_url: string
}
