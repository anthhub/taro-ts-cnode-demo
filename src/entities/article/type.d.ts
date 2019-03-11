import { Comment } from './comment'
import { Tag } from './tag'
import { Article } from './article'
import { Cotegory } from './cotegory'
import { Reply } from './reply'

declare global {
    interface IArticle extends Article {}
    interface ITag extends Tag {}
    interface IComment extends Comment {}

    interface ICotegory extends Cotegory {}
    interface IReply extends Reply {}
}
