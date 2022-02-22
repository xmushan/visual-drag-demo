import React from 'react'
import cn from 'classnames'
import s from './index.scss'

function Shape(props){
    const { children,style } = props
    console.log(children)
    return (
        <div style={style}>
            {
                React.Children.map(children,item=>{
                    return item
                })
            }
        </div>
    )
}

export default Shape