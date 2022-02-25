import React from 'react'
import cn from 'classnames'
import {store} from '@/redux/store'
import s from './index.scss'

class RText extends React.Component {

    state = {
        editMode: store.getState().editMode
    }
    handleChange = e => {
        const { value } = e.target
        this.props.changeInput(value)
    }
    render() {
        const { value } = this.props
        return (
            <div>
                {
                    this.state.editMode == 'edit' ? <textarea
                        value={value}
                        onChange={this.handleChange}
                        className={cn(s.text, s.textarea)}
                    />
                        : <div className={cn(s.disabled, s.text)}>
                            {
                                value.split('\n').map((item, index) => (
                                    <div key={index}>{item}</div>
                                ))
                            }
                        </div>
                }
            </div>
        )
    }
}
export default RText