import RButton from './RButton'
import RText from './RText'
// 公共样式
const commonStyle = {
    rotate: '', 
    opacity: 1,
}

// 编辑器左侧组件列表
const list = [
    {
        component: RText,
        label: '文字',
        propValue: '文字',
        icon: 'el-icon-edit',
        animations: [],
        events: {},
        style: {
            width: 200,
            height: 33,
            fontSize: 14,
            fontWeight: 500,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: '',
            color: '',
        },
    },
    {
        component: RButton, 
        label: '按钮', 
        propValue: '按钮',
        icon: 'el-icon-thumb',
        animations: [],
        events: {},
        style: {
            width: 100,
            height: 34,
            borderWidth: '',
            borderColor: '',
            borderRadius: '',
            fontSize: 14,
            fontWeight: 500,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: '',
            color: '',
            backgroundColor: '',
        },
    },
]

list.forEach(item => {
    item.style = { ...item.style, ...commonStyle }
})

export default list