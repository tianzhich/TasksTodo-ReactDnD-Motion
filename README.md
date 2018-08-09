# Tasks To Do List (React DnD + Motion)
React DnD + React Motion 实现的一个待办任务列表

## 运行
```
> $ git clone https://github.com/tianzhich/TasksTodo-ReactDnD-Motion.git
> $ npm i
> $ npm run start
```

## 截图
1. 结果展示 <br />
<img src="https://github.com/tianzhich/TasksTodo-ReactDnD-Motion/blob/master/screenshots/tasklist_react.gif" alt="项目截图" />

2. 参考来源 <br />
<img src="https://github.com/tianzhich/TasksTodo-ReactDnD-Motion/blob/master/screenshots/giphy.gif" alt="项目截图" />

## 备注
1. 这次没有使用create-react-app脚手架，自己用npm把流程走了一遍

2. 为了学习CSS模块化和SCSS语法，项目中都有使用。但是该项目较小，不如直接使用CSS来得方便，也无需模块化

3. 还有部分没实现的功能，例如一些CSS动画效果：Flipping card, 渐变等等

4. 我是直接使用的[react-dnd](https://github.com/react-dnd/react-dnd)，动画使用了react-motion(https://github.com/chenglou/react-motion)。后来发现还有一个更好的库：[react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)，封装了motion实现动画效果

5. 在此基础上可以实现todo list的filter功能，以及add，delete功能，以后有空再做