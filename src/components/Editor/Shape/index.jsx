import React from 'react'
import { connect } from 'react-redux'
import { selectComponent,setShapeStyle } from '@/redux/action'
import cn from 'classnames'
import s from './index.scss'
import { deepCopy,findIndex } from '@/utils/utils'

function Shape(props) {

    const { 
        dispatch, 
        children, 
        style, 
        active, 
        element, 
        zIndex,
        curComponent,
        defaultStyle,
        componentData,
        id
    } = props
    const handleMouseDown = e => {
        if (element.icon != 'el-icon-edit') {
            e.preventDefault()
        }
        e.stopPropagation()
        const payload = {
            curComponent: element,
            curComponentZIndex: zIndex,
        }
        dispatch(selectComponent(payload))
        if (!curComponent) return
        const pos = { ...defaultStyle }
        const startY = e.clientY
        const startX = e.clientX
        // 如果直接修改属性，值的类型会变为字符串，所以要转为数值型
        const startTop = Number(pos.top)
        const startLeft = Number(pos.left)
        // 如果元素没有移动，则不保存快照
        let hasMove = false
        const move = moveEvent => {
            hasMove = true
            const currX = moveEvent.clientX
            const currY = moveEvent.clientY
            pos.top = currY - startY + startTop
            pos.left = currX - startX + startLeft
            // 修改当前组件样式
            const dComponent = deepCopy(curComponent)
            const dcomponentData = deepCopy(componentData)
            const {top,left,width,height} = pos
            if (top) dComponent.style.top = top
            if (left) dComponent.style.left = left
            if (width) dComponent.style.width = width
            if (height) dComponent.style.height = height
            // TODO
            const componentIndex = findIndex(id,'id',componentData)
            // 这个地方有问题 
            dcomponentData[componentIndex] = dComponent
            dispatch(setShapeStyle(dcomponentData))
        }
        const up = () => {
            document.removeEventListener('mousemove', move)
            document.removeEventListener('mouseup', up)
        }

        document.addEventListener('mousemove', move)
        document.addEventListener('mouseup', up)
    }
    return (
        <div className={cn(s.shape, active ? s.active: '' )} style={style} onMouseDown={handleMouseDown}>
            {
                React.Children.map(children, item => item)
            }
        </div>
    )
}

export default connect(state => state)(Shape)