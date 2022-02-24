import { connect } from 'react-redux'
import cn from 'classnames'
import s from './index.scss'
function RText(props) {
    const { value, changeInput,editMode } = props
    const handleChange = e => {
        const { value } = e.target
        changeInput(value)
    }
    return (
        <div>
            {
                editMode == 'edit' ? <textarea
                    value={value}
                    onChange={handleChange}
                    className={cn(s.text, s.textarea)}
                /> 
                    : <div className={ cn(s.disabled,s.text) }>
                        {
                            value.split('\n').map((item,index) => (
                                <div key={index}>{item}</div>
                            ))
                        }
                    </div>
            }
        </div>
    )
}

export default connect(state => state)(RText)