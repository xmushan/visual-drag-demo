const initialState = {
    editMode: 'edit', // 编辑器模式 edit read
    canvasStyleData: { // 页面全局数据
        width: 1200,
        height: 740,
    },
    componentData: [],
    curComponent: null,
    curComponentZIndex: null,
    snapshotData: [], // 编辑器快照数据
    snapshotIndex: -1, // 快照索引
    menuTop: 0,
    menuLeft: 0,
    menuShow: false,
}

function Reducer(state=initialState,action){
    switch(action.type){
        case 'change': {
            return {
                ...state,
                ...action.params
            }
        }
        case 'add': {
            return {
                ...state,
                num: action.text
            }
        }
        default: 
            return state
    }
}

export default Reducer