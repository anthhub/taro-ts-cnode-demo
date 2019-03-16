import { autobind } from 'core-decorators'
import { observable, computed } from 'mobx'

import { StoreExt } from '@lib/extent/store'
import { RootStore } from '@store'

@autobind
export class ServiceStore extends StoreExt {
    @observable
    rootPath = 'https://cnodejs.org/api/v1'

    @computed
    get apiObject() {
        return {
            getTopics: this.rootPath + '/topics', // 获取话题列表
            getTopicInfo: this.rootPath + '/topic/', // 获取话题详情
            checkUserToken: this.rootPath + '/accesstoken', // 验证用户token
            getUserInfo: this.rootPath + '/user/', // 获取用户信息
            createTopic: this.rootPath + '/topics', // 新建话题
            replyTopic: this.rootPath + '/topic/', // 回复话题消息
            upReply: this.rootPath + '/reply/', // 点赞
            updateTopic: this.rootPath + '/topics/update', // 更新主题
        }
    }

    rootStore: RootStore
    constructor(rootStore: RootStore) {
        super()
        this.rootStore = rootStore
    }

    protected effects(): void {}
}
