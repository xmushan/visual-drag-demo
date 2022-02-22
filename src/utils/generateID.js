let id = 0
// 为每个元素创建一个独一无二的 ID
export default function generateID() {
    id++
    return Math.random().toString(36).substring(7).split('').join('.') + id
}