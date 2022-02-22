import React from'react'
import cn from 'classnames'
import { connect } from 'react-redux'
import Shape from './Shape'
import s from './index.scss'

function Editor(props){
    const { canvasStyleData,componentData } = props
    return (
        <div 
            className={s.editor}
            style={{ width:  canvasStyleData.width + 'px', height: canvasStyleData.height + 'px'}}
        >
            {/* 页面组件列表展示 */}
            {
                    componentData.map(item => {
                        const { component: Component } = item
                        return (
                            <Shape
                                    key={item.id}
                                    style={ item.style }
                                >
                                    <Component/>
                            </Shape>
                        )
                    })
                }
        </div>
    )
}

export default  connect( state => state )(Editor)