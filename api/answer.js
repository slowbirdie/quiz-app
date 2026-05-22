// 随机抽题接口，完全兼容原逻辑，无需修改
const QUESTION_BANK = require('../question-bank.js');

module.exports = (req, res) => {
  const randomIndex = Math.floor(Math.random() * QUESTION_BANK.length);
  const q = QUESTION_BANK[randomIndex];
  res.status(200).json({
    id: q.id,
    question: q.question,
    options: q.options
  });
};
