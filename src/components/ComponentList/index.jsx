import list from '@/customComponents/componentList'
import s from './index.scss'

function ComponentList(){
    console.log(list)
    const handleDragStart = e => {
        console.log(e,'>>>')
    }
    return (
        <div onDragStart={handleDragStart} className={ s.componentList }>
            {
                list.map((item,index) => (
                    <div draggable key={index} className={s.list}>
                        <span>{item.label}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default ComponentList