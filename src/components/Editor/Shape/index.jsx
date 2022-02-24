import React from 'react'
import { connect } from 'react-redux'
import { selectComponent } from '@/redux/action'
import cn from 'classnames'
import s from './index.scss'

function Shape(props){
    
    const { dispatch,children,style,active,element,zIndex } = props
    const handleMouseDown = e => {
        if (element.icon != 'el-icon-edit') {
            e.preventDefault()
        }
        e.stopPropagation()
        const payload = {
            curComponent: element,
            curComponentZIndex: zIndex,
            editMode: 'review'
        }
        dispatch(selectComponent(payload))
    }
    return (
        <div className={cn(s.shape,{'active':active})} style={style} onMouseDown={handleMouseDown}>
            {
                React.Children.map(children,item=>{
                    return item
                })
            }
        </div>
    )
}

export default connect(state => state)(Shape)