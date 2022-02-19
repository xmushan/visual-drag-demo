import s from './index.scss'

function RButton(props){
    const { btnText } = props
    return (
        <button className={s.btn} >{ btnText || '按钮'}</button>
    )
}

export default RButton