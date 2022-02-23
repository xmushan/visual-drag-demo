// 简单实现发布订阅

class Event {
    constructor() {
        this.list = {}
    }

    on(key, fn) {
        if (!this.list[key]) {
            this.list[key] = []
        }
        this.list[key].push(fn)
    }

    off(key) {
        if (!key) {
            this.list = {}
        }
        this.list[key] = []
    }

    emit(...rest) {
        if (!rest.length) return
        const key = rest[0]
        const args = Array.prototype.slice.call(rest, 1)
        if (!this.list[key]) return
        this.list[key].forEach(item => item.apply(null,args))
    }
}