import React from 'react'
import cn from 'classnames'
import s from './index.scss'

function Shape(props){
    const { children } = props
    console.log(children)
    return (
        <div>
            {
                React.Children.map(children,item=>{
                    return item
                })
            }
        </div>
    )
}

export default Shape