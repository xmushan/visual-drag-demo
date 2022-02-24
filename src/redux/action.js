
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

export {
    addComponent,
    selectComponent
}