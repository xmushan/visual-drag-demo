import list from '@/customComponents/componentList'
import s from './index.scss'

function ComponentList(){
    // 拖动选中组件时，记录下标
    const handleDragStart = e => {
        e.dataTransfer.setData('index', e.target.dataset.index)
    }
    return (
        <div onDragStart={handleDragStart} className={ s.componentList }>
            {
                list.map((item,index) => (
                    <div draggable="true" key={index} className={s.list} data-index={index}>
                        <span>{item.label}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default ComponentList