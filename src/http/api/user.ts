import { PRO_URL } from '@config/index'
import http from '@http/axios'

export default {
    login(data: IAcount) {
        return http.post('login', data || {}, PRO_URL) as Promise<IAuth>
    },

    register(data: IAcount) {
        return http.post('register', data || {}, PRO_URL) as Promise<any>
    },
}
