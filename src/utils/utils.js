function deepCopy(target) {
    if (typeof target == 'object') {
        const result = Array.isArray(target)? [] : {}
        for (const key in target) {
            if (typeof target[key] == 'object') {
                result[key] = deepCopy(target[key])
            } else {
                result[key] = target[key]
            }
        }

        return result
    }
    
    return target
}

function swap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function findIndex(searchkey,attribute,arr){
    if (!arr.length) return -1
    for (let i =0;i<arr.length;i++){
        if (searchkey == arr[i][attribute]){
            return i
        }
    }
}


export {
    swap,
    deepCopy,
    findIndex
}