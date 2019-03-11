import { PRO_URL } from '@config/index'
import http from '@http/axios'

interface IArticleRs {
    data: IArticle[]
    count: number
}

interface ITagRs {
    data: ITag[]
}

interface ICotegoryRs {
    data: ICotegory[]
}

export default {
    getArticleList(data?: any) {
        return http.get('article/getList', data || {}, PRO_URL) as Promise<IArticleRs>
    },

    getTagList(data?: any) {
        return http.get('tags/getList', data || {}, PRO_URL) as Promise<ITagRs>
    },

    getCategoryList(data?: any) {
        return http.get('categories/getList', data || {}, PRO_URL) as Promise<ICotegoryRs>
    },
}
