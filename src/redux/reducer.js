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
        case 'addComponent': {
            return {
                ...state,
                componentData: action.payload
            }
        }
        case 'selectComponent': {
            return {
                ...state,
                ...action.payload
            }
        }
        case 'setShapeStyle': {
            return {
                ...state,
                componentData: action.payload
            }
        }
        default: 
            return state
    }
}
export default Reducer