import { action, observable } from 'mobx'

import { groupBy, random } from '@lib'

import { StoreExt } from '@utils/reactExt'

import { ViewStore } from '../index'

export class ViewModal extends StoreExt {
    // 实体类
    @observable
    view: IView = {
        colorList: ['magenta', 'blue', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'geekblue', 'purple'], // 标签颜色
        loginModalVisible: false,
        registerModalVisible: false,
        windowWidth: document.getElementsByTagName('body')[0].clientWidth,
        drawerVisible: false,
        colorMap: {},
    }
    store: ViewStore
    constructor(store: ViewStore, view?: IView) {
        super()
        this.store = store
        if (view) {
            this.view = view
        }

        this.effects()
    }

    @action
    setAuthModal(type, state) {
        if (this.view[type]) {
            this.view[type] = state
        }
    }

    @action
    setDrawer(state) {
        this.view.drawerVisible = state
    }

    @action
    setColorMap(commentList) {
        const list = groupBy(commentList, item => item.userId)
        const colorList = this.view.colorList
        const colorMap = {}
        list.forEach(item => {
            colorMap[item[0].userId] = colorList[random(colorList)]
            item[0].replies.forEach(d => {
                if (!colorMap[d.userId]) {
                    colorMap[d.userId] = colorList[random(colorList)]
                }
            })
        })
    }

    private async effects() {}
}
