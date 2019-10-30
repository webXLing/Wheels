### 虚拟DOM
- state + JSX => 数据 + 模板
- 生成虚拟DOM (JS对象 用于描述真实的DOM) 消耗性能 
```
<div id='box'>
  <span class='item'>nihao 0610</span>
</div>
=>
['div',{ id:'box'},['span',{class:'item','nihao 0610'}]]
```
- 通过虚拟DOM 生成真实DOM
- state 发生改变
- 数据 + 模板 => 生成新的虚拟DOM (JS对象 用于描述真实的DOM) 消耗性能 
- 比较 旧的虚拟DOM  与新的虚拟DOM之间的区别 比如 span 的内容分不一样
- 直接操作DOM 改变span 的内容


优点：
1 性能提升
2 使得跨端得以实现 React Native

### diff 算法
- React 会将多次的setState 合并为一次 减少比较虚拟DOM的次数
- diff算法在 比对虚拟DOM 会对新旧虚拟 逐层、同层比对 如果当前的 父层比对不一致 那么就直接替换 旧的dom 不在比对子层
- key 在列表循环的作用 稳定唯一的key 能够快速的比对新旧的虚拟dom 所以尽量不要用index作为key 
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
