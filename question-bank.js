// 你的题库 —— 只存在于服务端，前端永远看不到
const QUESTION_BANK = [
  {
    id: "q1",
    question: "以下哪个是 JavaScript 的基本数据类型？",
    options: ["String", "Array", "Object", "Date"],
    answer: 0,  // 正确选项的索引
    explanation: "String 是基本类型，其余都是引用类型。"
  },
  {
    id: "q2",
    question: "CSS 中，哪个属性可以隐藏元素但保留占位？",
    options: ["display: none", "visibility: hidden", "opacity: 0", "position: absolute"],
    answer: 1,
    explanation: "visibility: hidden 隐藏但仍占据空间。"
  }
  // 继续添加题目……
];

module.exports = QUESTION_BANK;
