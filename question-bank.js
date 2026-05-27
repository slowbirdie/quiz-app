// question-bank.js 大幅扩充，增加多选/判断/填空/编程题型
const QUESTION_BANK = [
  // 原有单选题保留
  { id: "q1", type: "single", question: "以下哪个是 JavaScript 的基本数据类型？", options: ["String", "Array", "Object", "Date"], answer: 0, explanation: "String、Number、Boolean、null、undefined、Symbol、BigInt 是基本类型。" },
  { id: "q2", type: "single", question: "CSS 中，哪个属性可以隐藏元素但保留占位？", options: ["display: none", "visibility: hidden", "opacity: 0", "position: absolute"], answer: 1, explanation: "visibility: hidden 让元素不可见但仍占位。" },
  { id: "q3", type: "single", question: "在 React 中，哪个 Hook 用于处理副作用？", options: ["useState", "useEffect", "useContext", "useReducer"], answer: 1, explanation: "useEffect 用于数据获取、订阅等副作用。" },
  { id: "q4", type: "single", question: "以下哪个是 Vue 3 组合式 API 中定义响应式数据的函数？", options: ["data()", "computed", "ref", "watch"], answer: 2, explanation: "ref() 和 reactive() 是核心。" },
  { id: "q5", type: "single", question: "HTTP 状态码 404 表示什么？", options: ["服务器内部错误", "请求成功", "资源未找到", "禁止访问"], answer: 2, explanation: "404 Not Found 代表资源不存在。" },
  // 多项选择题示例
  { id: "q6", type: "multiple", question: "以下哪些是 JavaScript 的循环语句？", options: ["for", "while", "do...while", "if...else"], answer: [0,1,2], explanation: "for, while, do...while 是循环；if...else 是条件判断。" },
  { id: "q7", type: "multiple", question: "属于前端开发框架的有？", options: ["React", "Vue", "Django", "Spring"], answer: [0,1], explanation: "React 和 Vue 是前端框架，Django 和 Spring 是后端框架。" },
  // 判断题示例
  { id: "q8", type: "truefalse", question: "JavaScript 是静态类型语言。", options: ["正确", "错误"], answer: false, explanation: "JavaScript 是动态类型语言，变量类型可以运行时改变。" },
  { id: "q9", type: "truefalse", question: "Flexbox 布局中，`justify-content: center` 可使子元素水平居中。", options: ["正确", "错误"], answer: true, explanation: "justify-content 主轴对齐，center 使子元素沿主轴居中。" },
  // 填空题 (支持同义多答案)
  { id: "q10", type: "fill", question: "CSS 中，________ 属性用于设置圆角边框。", options: null, answer: ["border-radius", "borderRadius"], explanation: "border-radius 是设置圆角的标准属性。" },
  { id: "q11", type: "fill", question: "在 JavaScript 中，声明变量的关键字有 var、let 和 ________。", options: null, answer: ["const"], explanation: "const 用于声明常量，不可重新赋值。" },
  // 编程题/简答题 (比对时大小写不敏感且去空格)
  { id: "q12", type: "code", question: "请写出一行 JavaScript 代码，在控制台输出 'Hello Frontend'。", options: null, answer: "console.log('Hello Frontend')", explanation: "console.log('Hello Frontend') 或类似函数调用均可，关键输出正确字符串。" },
  { id: "q13", type: "code", question: "简答题：解释一下什么是闭包（Closure）？用一句话描述核心特征。", options: null, answer: ["函数可以记住并访问所在的词法作用域", "函数和其周围状态的引用组合", "内部函数访问外部函数变量"], explanation: "闭包是指函数能够记住并访问它的词法作用域，即使函数在其作用域之外执行。" }
];

module.exports = QUESTION_BANK;
