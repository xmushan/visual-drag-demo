import { useEffect,useState } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd';
import ComponentList from './components/ComponentList';
import s from './app.scss'
function App(props) {
  const [ value,setValue ] = useState('default')
  const changeInput = (value) => {
    setValue(value)
  }
  const handleDrop = e => {
    console.log(e,'>>>')
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
          <div className={s.content} onDrop={handleDrop}>
            {/* <Editor /> */}
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
