import { entity, EntityBase, field } from '@lib/decorator/entity'

@entity
export class Author extends EntityBase<Author> {
    @field loginname: string
    @field avatar_url: string
}

@entity
export class User extends EntityBase<User> {
    @field loginname: string
    @field avatar_url: string
    @field githubUsername: string
    @field create_at: string
    @field score: number
}

@entity
export class Auth extends EntityBase<Auth> {
    @field
    id: string
    @field
    loginname: string
    @field
    avatar_url: string
}
