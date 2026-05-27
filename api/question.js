// question.js 增加 type 字段，对填空/编程题不返回 options
const QUESTION_BANK = require('../question-bank.js');

module.exports = (req, res) => {
  const randomIndex = Math.floor(Math.random() * QUESTION_BANK.length);
  const q = QUESTION_BANK[randomIndex];
  const response = {
    id: q.id,
    type: q.type,
    question: q.question,
  };
  // 只有单选、多选、判断题返回选项数组，填空编程题前端无需选项数组
  if (['single', 'multiple', 'truefalse'].includes(q.type)) {
    response.options = q.options;
  }
  res.status(200).json(response);
};
