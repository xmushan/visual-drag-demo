function RButton(props){
    const { btnText } = props
    return (
        <button>{ btnText || '按钮'}</button>
    )
}

export default RButton