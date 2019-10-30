import React from 'react'
import ReactDOM from 'react-dom'
// all in js
import './index.css'
// import App from './App';
import TodoList from './TodoList'

// import Board from './Board'
// import A from './A'
// import Game from './game/Game'





// PWA progressive web application
// https协议服务器 用户断网 也能看到网页 类似于缓存
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<TodoList name='xl' />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
