import { connect } from 'react-redux'
import cn from 'classnames'
import s from './index.scss'
function RText(props) {
    const { value, editMode, changeInput } = props
    const handleChange = e => {
        const { value } = e.target
        changeInput(value)
    }
    const TextArea = <textarea
        value={value}
        onChange={handleChange}
        className={cn(s.text, s.textarea)}
    />
    return (
        <>
            {
                editMode == 'edit' ? TextArea 
                    : <div className={ cn(s.disabled,s.text) }>
                        {
                            value.split('\n').map((item,index) => (
                                <div key={index}>{item}</div>
                            ))
                        }
                    </div>
            }
        </>
    )
}

export default connect(state=> state )(RText)