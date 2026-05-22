// 大幅扩充题库，让模式不再单调，涵盖 HTML/CSS/JS/React/Vue 实用知识点
const QUESTION_BANK = [
  {
    id: "q1",
    question: "以下哪个是 JavaScript 的基本数据类型？",
    options: ["String", "Array", "Object", "Date"],
    answer: 0,
    explanation: "String、Number、Boolean、null、undefined、Symbol、BigInt 是基本类型。Array、Object、Date 都是引用类型。"
  },
  {
    id: "q2",
    question: "CSS 中，哪个属性可以隐藏元素但保留占位？",
    options: ["display: none", "visibility: hidden", "opacity: 0", "position: absolute"],
    answer: 1,
    explanation: "visibility: hidden 会让元素不可见，但依然占据原本的布局空间。display: none 则完全移除占位。"
  },
  {
    id: "q3",
    question: "在 React 中，哪个 Hook 用于处理副作用？",
    options: ["useState", "useEffect", "useContext", "useReducer"],
    answer: 1,
    explanation: "useEffect 用于处理数据获取、订阅或手动修改 DOM 等副作用操作。"
  },
  {
    id: "q4",
    question: "以下哪个是 Vue 3 组合式 API 中定义响应式数据的函数？",
    options: ["data()", "computed", "ref", "watch"],
    answer: 2,
    explanation: "ref() 和 reactive() 是 Vue 3 组合式 API 中创建响应式状态的核心函数。"
  },
  {
    id: "q5",
    question: "HTTP 状态码 404 表示什么？",
    options: ["服务器内部错误", "请求成功", "资源未找到", "禁止访问"],
    answer: 2,
    explanation: "404 Not Found 代表服务器无法找到请求的资源。"
  },
  {
    id: "q6",
    question: "下列哪个 CSS 单位是相对视口宽度的？",
    options: ["rem", "em", "vw", "px"],
    answer: 2,
    explanation: "vw (viewport width) 相对于浏览器视口宽度的 1%。"
  },
  {
    id: "q7",
    question: "在 Git 中，哪个命令用于查看提交历史？",
    options: ["git status", "git log", "git diff", "git branch"],
    answer: 1,
    explanation: "git log 显示当前分支的版本历史记录。"
  },
  {
    id: "q8",
    question: "以下哪个不是 JavaScript 框架/库？",
    options: ["React", "Angular", "Django", "Vue"],
    answer: 2,
    explanation: "Django 是基于 Python 的后端 Web 框架，而 React、Angular、Vue 是前端 JS 框架/库。"
  },
  {
    id: "q9",
    question: "关于 CSS Flexbox，哪个属性用于定义主轴方向？",
    options: ["flex-wrap", "justify-content", "flex-direction", "align-items"],
    answer: 2,
    explanation: "flex-direction 决定主轴方向 (row, column 等)。"
  },
  {
    id: "q10",
    question: "在 JavaScript 中，以下哪个方法用于将数组元素连接成字符串？",
    options: ["concat()", "join()", "slice()", "splice()"],
    answer: 1,
    explanation: "join(separator) 将数组所有元素连接成一个字符串。"
  },
  {
    id: "q11",
    question: "以下哪种方式可以实现 JavaScript 的异步编程？",
    options: ["Promise", "async/await", "回调函数", "以上都是"],
    answer: 3,
    explanation: "Promise、async/await 以及回调函数都是处理异步操作的方式。"
  },
  {
    id: "q12",
    question: "HTML5 中哪个元素用于绘制图形？",
    options: ["svg", "canvas", "graphics", "vector"],
    answer: 1,
    explanation: "canvas元素用于通过 JavaScript 绘制位图图形。"
  }
];

module.exports = QUESTION_BANK;
