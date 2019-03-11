import { Entity, EntityBase } from '@lib/decorator/entity'

@Entity
export class View extends EntityBase<View> {
    colorList: string[]
    loginModalVisible: boolean
    registerModalVisible: boolean
    windowWidth: number
    drawerVisible: boolean
    colorMap: object
}
