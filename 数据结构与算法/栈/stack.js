// 栈：先进后出 只能在一端操作 --子弹夹、桶；
// 栈的实现 1、通过数组实现 2、通过链表实现
// 栈的方法：
//   1.push 向栈内压入一个元素 添加一个元素到栈顶
//   2.pop  弹出栈顶元素
//   3.top  返回栈顶元素
//   4.isEmpty 判断栈是否为空
//   5.size 返回栈内元素数量
//   6.clear 清空栈


function Stack (){
  // this.stack = [];//这里 不这样写的原因是 别人能通过obj.stack直接拿到栈进行修改 不安全 我们希望别人只能通过 我们提供的push、pop等方法去操作栈 
  let stack = [];
  this.push = function (el){
    stack.push(el);
  };
  this.pop = function(){
    return stack.pop();
  };
  this.top = function(){
    return stack[stack.length-1];
  };
  this.isEmpty = function(){
    return stack.length === 0;
  };
  this.size =  function(){
    return stack.length;
  };
  // this.push = _push
}
// function _push(e){
//   console.log(e);
//   console.log(stack);//ReferenceError: stack is not defined
//   // 所以 不能找到fn Stack 里面的私有属性stack
//   // js  是词法作用域 也就是静态作用于 函数的作用域在函数定义是就决定了 
//       // 而不是动态作用域 函数的作用域 是在函数执行时决定的
//   // stack.push(e);
// }


// let stack = new Stack();

// stack.push(1);
// console.log(stack.size())

module.exports = Stack