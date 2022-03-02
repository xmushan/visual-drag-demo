import { connect } from 'react-redux'
import { Button } from 'antd';
import ComponentList from '@/components/ComponentList';
import list from '@/customComponents/componentList'
import Editor from '@/components/Editor'
import { deepCopy } from '@/utils/utils'
import generateID from '@/utils/generateID';
import { addComponent } from './redux/action';
import s from './app.scss'
function App(props) {
  const { dispatch,componentData } = props
  const handleDrop = e => {
    const index = e.dataTransfer.getData('index')
    const newComponent = deepCopy(list[index])
    const newComponentData = deepCopy(componentData)
    newComponent.style.top = e.nativeEvent.offsetY
    newComponent.style.left = e.nativeEvent.offsetX

    newComponent.id = generateID()
    newComponentData.push(newComponent)
    dispatch(addComponent(newComponentData))
  }

  // 定义可被释放区域 
  // copy：在新位置生成源项的副本
  const handleDragOver = e => {
    e.preventDefault()
    e.stopPropagation()
    e.dataTransfer.dropEffect = 'copy'
  }
  return (
    <div className={s.home}>
      <header>
        <Button onClick={() => { props.dispatch({type: 'add',payload: 'ppp'}) }}>撤销</Button>
        <Button>重做</Button>
      </header>
      <main>
        {/* 左侧组件列表 */}
        <section className={s.left}>
          <ComponentList />
        </section>
        {/* 中间画布 */}
        <section className={s.center}>
          <div className={s.content} onDrop={handleDrop} onDragOver={handleDragOver}>
            <Editor />
          </div>
        </section>
      </main>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(App);
