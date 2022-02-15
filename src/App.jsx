import { connect } from 'react-redux'
import { Button } from 'antd';
import s from './app.scss'
function App(props) {
  return (
    <div className={s.home}>
      <header>
        <Button>撤销</Button>
        <Button>重做</Button>
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(App);
