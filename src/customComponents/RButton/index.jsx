import cn from 'classnames'
import s from './index.scss'

function RButton(props){
    const { btnText } = props
    return (
        <button className={cn(s.btn)} >{ btnText || '按钮'}</button>
    )
}

export default RButton