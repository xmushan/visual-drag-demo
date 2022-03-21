import c from 'classnames'
import s from './index.scss'

function ContextMenu(){
    return (
        <div className={s.contextmenu} style={{ top: menuTop + 'px', left: menuLeft + 'px' }}>
            <ul>
                <li>删除</li>
                <li>置顶</li>
                <li>置底</li>
                <li>上移</li>
                <li>下移</li>
            </ul>
        </div>
    )
}

export default ContextMenu