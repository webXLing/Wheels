// router的实现基于eventEmitter
let Event = require('events').EventEmitter;
exports.router = new Event();