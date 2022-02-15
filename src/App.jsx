import s from './app.scss'
import { connect } from 'react-redux'
function App(props) {
  return (
    <div className={s.title}>
      qq
      <p className={s.test}>111</p>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(App);
