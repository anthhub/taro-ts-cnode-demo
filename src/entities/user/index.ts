import { entity, EntityBase, field } from '@lib/decorator/entity'

@entity
export class Author extends EntityBase<Author> {
    @field loginname: string
    @field avatar_url: string
}

@entity
export class User extends Author {
    @field githubUsername: string
    @field create_at: string
    @field score: number

    constructor(_props?: User) {
        super(_props)
    }
}

@entity
export class Auth extends Author {
    @field readonly id: string

    constructor(_props?: Auth) {
        super(_props)
    }
}
