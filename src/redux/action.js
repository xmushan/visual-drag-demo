
function addComponent(payload){
    return {
        type: 'addComponent',
        payload
    }
}

function selectComponent(payload){
    return {
        type: 'selectComponent',
        payload
    }
}

function setShapeStyle(payload){
    return {
        type: 'setShapeStyle',
        payload
    }
}

export {
    addComponent,
    selectComponent,
    setShapeStyle
}