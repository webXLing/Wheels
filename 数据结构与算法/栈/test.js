let Stack = require('./stack');
// let stack = new Stack();
// stack.push(1);
// console.log(stack.size())
// console.log(stack.pop())


// 栈的应用：word中的撤销 返回
// 例1：字符串中含有小括号，请编写一个函数判断字符串是否合法，所谓合法就是括号要成对出现。
  // '(d()23()ew)wewq'  合法
  // 'd()2(3()ew)wewq'  合法
  // '(d()23()ew)we(wq' 不合法
  // '(d()2)3()ew)we(wq' 不合法

  // 思路：
    // 1.遍历字符串 
    // 2.遇到'(' 将其入栈
    // 3.当遇到 ')' 如何栈为空，则为非法字符串。如果栈不为空，弹栈一次，抵消左右括号一次
    // 4.遍历到最后 栈内为空，则为合法的字符串
  // function isLegal(str){
  //   let stack = new Stack(); 
  //   for(let i = 0;i<str.length;i++){
  //     if(str[i] === '('){
  //       stack.push('(');
  //     }else if(str[i] === ')'){
  //       if(!stack.isEmpty()){
  //         stack.pop();
  //       }else{
  //         return false;
  //       }
  //     }else{
  //       continue;
  //     }
  //   }
  //   return stack.isEmpty();
  // }
  // console.log(isLegal('(d()23()ew)wewq'));//合法
  // console.log(isLegal('d()2(3()ew)wewq'));//合法
  // console.log(isLegal('(d()23()ew)we(wq'));//不合法
  // console.log(isLegal('(d()2)3()ew)we(wq'));//不合法
// 例1------------------------------------------

// 例2：计算逆波兰表达式的结果。
  // 逆波兰表达式（后缀表达式）  1 8 2 / + 2 -
  // 中缀表达式               1 + 8 / 2 - 2
  // ['1', '8', '2', '/', '+', '2', '-']  3
  // ['4','13','5','/','+']               6.6


  // 思路：
    // 1.遍历数组 
    // 2.如果不是 + - * / ,就将 数值 压入栈中
    // 3.如果是 + - * / ,连续两次弹栈  将两个数字与运算符进行运算 然后将结果压入栈中
    // 4.遍历到最后 栈内仅有一个元素 这个元素就是后缀表达式计算结果
  // function calc_exp(arr){
  //   let stack = new Stack(); 
  //   let operators = ['+', '-', '*', '/'];
  //   for(let i = 0;i<arr.length;i++){
  //     if(operators.includes(arr[i])){//运算符
  //       let num1 = stack.pop();
  //       let num2 = stack.pop();
  //       let res = eval(num2+arr[i]+num1);
  //       stack.push(res);
  //     }else{//数字 压栈
  //       stack.push(arr[i])
  //     }
  //   }
  //   return stack.pop();
  // }
  // console.log(calc_exp(['1', '8', '2', '/', '+', '2', '-']));//3
  // console.log(calc_exp(['4','13','5','/','+']));//6.6

// 例2------------------------------------------

// 例3：实现一个栈，除了常用的push、pop方法外，还有一个min方法获取栈内的最小值，且空间复杂度为O(1);

  // 思路：
    // 1.一个栈存储数据 另一个栈存储最小值 
    // 2.当元素A push时 如果数据栈为空或者元素A小于栈顶元素，将元素A push到数据栈和min栈中，反之将min栈中的栈顶元素再次push到min栈中
    // 3.当pop 时，数据栈与min栈都pop
    // 4.可以发觉数据栈的长度和min栈的长度始终相等的  例如数据栈前4位元素的最小值 就是min栈中的第4位元素，数据栈的最小值在当元素push进来的是时候就已经记录，而且由于2中的反之情况 ，解决了当数据栈pop时，无需再次去计算栈内最小值，因为之前已经计算过了。
  // function MinStack(){
  //   let dataStack = new Stack(); //数据栈
  //   let minStack = new Stack(); //min栈

  //   // 2.当元素A push时 如果数据栈为空或者元素A小于栈顶元素，将元素A push到数据栈和min栈中，反之将min栈中的栈顶元素再次push到min栈中
  //   this.push = function(el){
  //     if(dataStack.isEmpty()||el<minStack.top()){
  //       dataStack.push(el);
  //       minStack.push(el);
  //     }else{
  //       minStack.push(minStack.top());//
  //     }
  //   }

  //   this.pop = function(){
  //     minStack.pop();
  //     return dataStack.pop();
  //   }

  //   this.min = function(){
  //     return minStack.top();
  //   }
  // }
  

  // let minStack = new MinStack();
  // minStack.push(8);
  // minStack.push(3);
  // minStack.push(3);
  // minStack.push(2);
  // console.log(minStack.min());
  // console.log(minStack.pop());
  // console.log(minStack.min());

// 例3------------------------------------------

// 例4：中缀表达式 转 后缀表达式。
  // 输入：['1','+','4','-','3']== 1+4-3
  // 输出：['1','4','+','3','-']
  

  // 输入：(1+(4+5+3)-2)+(7+3)===['(','1','+','(','4','+','5','+','3'+')','-','2',')','+','(','7','+','3',')']
  // 输出：['1','4','5','+','3','+','+','2','-','7','3','+','+']

  // 输入：(1+(4+5+3)/4-3)+(6+8)*3
  // 输出：['1','4','5','+','3','+','4','/','+','3','-','6','8','+','3','*','+']

  // 输入：['1','+','4','/','3'+'*'+'2']== 1+4/3*2
  // 输出：[ '1', '4', '3', '/','2','*', '+' ]

  // 输入：1+4/3+3/1
  // 输出：[ '1', '4', '3', '/', '+', '3', '1', '/', '+' ]
  // 1.  p_list = ['1']  1
  // 2.  stack = ['+']   +
  // 3.  p_list = ['1','4'] 4
  // 4.  stack = ['+','/']  /
  // 5.  p_list = ['1','4','3'] 3
  // 6.  p_list = ['1','4','3','/'] stack = ['+','*'] *
  // 7.  p_list = ['1','4','3','/','2'] stack = ['+','*']



  // // 思路：
  //   1.只含有一个或多个运算符( + - * /) ,不含有括号的情
  //   2.储存空间 1个栈-用来储存运算符 1个数组 res 用来储存最终的后缀表达式的结果
      // 3.循环数组 
      //   ..如果遇到数字 直接将其push 到res数组中去
      //   ..如果是运算符F 要确保当前运算符栈中 不含有比 它 优先级高的运算符，如果有 将其在运算符栈中弹出 push到res数组中，直到运算符栈的元素为空或者栈顶的运算符 比当前的循环的运算符 优先级低。 上面运算后 再将运算符F压入栈中。
      //   总之当循环到运算符时，它是一定要被压入运算符栈中的，不能立即push res数组中，因为当前无法知道后面是否有比它运算优先级更高的运算符。在此之前，它用于决定运算符栈中的运算符是否现在出栈到res数组中，它要保证能当前运算符栈中的栈顶符号优先级比它低。
  //   1+4/3*2  
  // 1+4/3+3/1  为什么会出现while 


// 定义运算符的优先级 
var priority_map = {
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2
};
function infix_exp_2_postfix_exp(exp){
  var stack = new Stack();
  var postfix_lst = [];
  for(var i = 0;i<exp.length;i++){
    var item = exp[i];
    // 如果是数字,直接放⼊入到postfix_lst中 
    if(!isNaN(item)){
      console.log(item)
        postfix_lst.push(item);
    }else if (item == "("){
    // 遇到左括号⼊入栈
        stack.push(item);
    }else if (item == ")"){
    // 遇到右括号,把栈顶元素弹出,直到遇到左括号 
    while(stack.top() != "("){
        postfix_lst.push(stack.pop());
    }
    stack.pop(); // 左括号出栈 
    }else{
      // 遇到运算符,把栈顶的运算符弹出,直到栈顶的运算符优先级⼩小于当前运算符
      console.log('w1')

      while(!stack.isEmpty() && ["+", "-", "*", "/"].indexOf(stack.top()) >=
      0 && priority_map[stack.top()] >= priority_map[item]){
        console.log('w2')
      // 把弹出的运算符加⼊入到postfix_lst
          postfix_lst.push(stack.pop());
      }
      // 当前的运算符⼊入栈
      stack.push(item);
    }
  }
// for循环结束后, 栈⾥里里可能还有元素,都弹出放⼊入到postfix_lst中 
  while(!stack.isEmpty()) {
      postfix_lst.push(stack.pop())
  }
   return postfix_lst
};
// 12+3
// console.log(infix_exp_2_postfix_exp(["12","+", "3"]))
// 2-3+2
// console.log(infix_exp_2_postfix_exp(["2","-", "3", "+", "2"]))
// (1+(4+5+3)-3)+(9+8)
// var exp = ["(","1","+","(","4","+","5","+","3",")","-","3",")","+","(","9","+","8"
// ,")"];
// console.log(infix_exp_2_postfix_exp(exp))
// (1+(4+5+3)/4-3)+(6+8)*3
var exp = ['(', '1', '+', '(', '4', '+', '5', '+', '3', ')', '/', '4', '-', '3', ')', '+', '(', '6', '+', '8', ')', '*', '3']
// console.log(infix_exp_2_postfix_exp(exp))
// console.log(infix_exp_2_postfix_exp(["12","+", "3","*", "5"]))
// console.log(infix_exp_2_postfix_exp(["12","*", "3","+", "5"]))
// console.log(infix_exp_2_postfix_exp(['1','+','4','/','3']))
console.log(infix_exp_2_postfix_exp(['1','+','4','/','3','+','3','/','1']))
console.log(['1','+','4','/','3','+','3','/','1'].join(''))


// 例4------------------------------------------



