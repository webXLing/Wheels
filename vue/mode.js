/*
 * @Author: web_XL
 * @Date: 2019-05-22 21:04:21
 * @Last Modified by: web_XL
 * @Last Modified time: 2019-05-22 21:19:21
 */
// 发布订阅模式  先订阅 再发布  订阅：将事件一个数组中去 [fn1.,fn2.fn3] 发布:将这个数组依次执行

function Dep () {
  this.subs = []
}
Dep.prototype.addSub = function (sub) {//订阅事件
  this.subs.push(sub)
}
Dep.prototype.notify = function () {// 发布事件
  this.subs.forEach(sub => sub.updata())
}

function Watcher (fn) {
  this.fn = fn
}
Watcher.prototype.updata = function () {
  this.fn()
}
let wacher = new Watcher(function () {
  console.log(111)
})
const dep = new Dep();
dep.addSub(wacher)
dep.addSub(wacher)
dep.addSub(wacher)
console.log(dep.subs)
// [Watcher { fn: [Function] },
// Watcher { fn: [Function] },
// Watcher { fn: [Function] } ]

dep.notify()
// 111
// 111
// 111
