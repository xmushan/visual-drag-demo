import { useEffect,useState } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd';
import ComponentList from '@/components/ComponentList';
import Editor from '@/components/Editor'
import s from './app.scss'
function App(props) {
  const handleDrop = e => {
    console.log(e.dataTransfer.getData('index'), '>>>')
  }

  // 定义可被释放区域 
  // copy：在新位置生成源项的副本
  const handleDragOver = e => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'copy'
  }
  return (
    <div className={s.home}>
      <header>
        <Button>撤销</Button>
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
