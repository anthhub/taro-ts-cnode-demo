// import { connect } from '@tarojs/redux'
import './replycontent.less'

import { autobind } from 'core-decorators'

import { Button, Textarea, View } from '@tarojs/components'
import Taro, { Component } from '@tarojs/taro'

interface IProps {
    onOKReplyContent?: (value: string) => void
    onCancelReplyContent?: () => void
}

@autobind
class ReplyContent extends Component<IProps> {
    state = { value: '' }

    btnOK() {
        if (this.state.value) {
            // 父组件方法
            this.props.onOKReplyContent(this.state.value)
        } else {
            Taro.showToast({ title: '请输入评论内容', icon: 'none' })
        }
    }

    changeContent(event) {
        this.setState({ value: event.target.value })
    }
    render() {
        const { onCancelReplyContent } = this.props
        const { value } = this.state

        return (
            <View className="replycontent">
                <Textarea value={value} onInput={this.changeContent} className="replycontent-text" placeholder="请输入回复内容" />
                <View className="replycontent-btngroup">
                    <Button onClick={this.btnOK} className="btn">
                        确定
                    </Button>
                    <Button onClick={onCancelReplyContent} className="btn">
                        取消
                    </Button>
                </View>
            </View>
        )
    }
}
export default ReplyContent
