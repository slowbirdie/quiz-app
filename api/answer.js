// answer.js 支持全题型判题逻辑
const QUESTION_BANK = require('../question-bank.js');

// 辅助：标准化字符串用于填空/编程对比
function normalizeString(str) {
  if (typeof str !== 'string') return '';
  return str.trim().replace(/\s+/g, ' ').toLowerCase();
}
// 多选题数组比较（无视顺序）
function isMultipleChoiceEqual(userArr, correctArr) {
  if (!Array.isArray(userArr) || !Array.isArray(correctArr)) return false;
  if (userArr.length !== correctArr.length) return false;
  const sortedUser = [...userArr].sort((a,b)=>a-b);
  const sortedCorrect = [...correctArr].sort((a,b)=>a-b);
  return sortedUser.every((val, idx) => val === sortedCorrect[idx]);
}

module.exports = (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { id, answer } = req.body;
  const question = QUESTION_BANK.find(q => q.id === id);
  if (!question) return res.status(400).json({ error: '题目不存在' });

  let correct = false;
  const type = question.type;

  try {
    if (type === 'single') {
      correct = (answer === question.answer);
    } 
    else if (type === 'multiple') {
      // answer 应该为数组
      if (Array.isArray(answer) && Array.isArray(question.answer)) {
        correct = isMultipleChoiceEqual(answer, question.answer);
      } else correct = false;
    }
    else if (type === 'truefalse') {
      // answer 是布尔 true/false 或者字符串 'true'/'false'
      let userBool = (answer === true || answer === 'true' || answer === 1);
      let correctBool = (question.answer === true || question.answer === 'true' || question.answer === 1);
      correct = (userBool === correctBool);
    }
    else if (type === 'fill') {
      const userNorm = normalizeString(answer);
      // 支持多个可能答案（数组）
      let possibleAnswers = Array.isArray(question.answer) ? question.answer : [question.answer];
      possibleAnswers = possibleAnswers.map(a => normalizeString(a));
      correct = possibleAnswers.some(correctAns => userNorm === correctAns);
    }
    else if (type === 'code') {
      const userNorm = normalizeString(answer);
      let possibleCode = Array.isArray(question.answer) ? question.answer : [question.answer];
      possibleCode = possibleCode.map(c => normalizeString(c));
      // 编程题或简答题：只要包含核心词或完全匹配其中一个基准答案即正确
      correct = possibleCode.some(valid => userNorm.includes(valid) || valid === userNorm);
      // 对于特定 console.log 严格匹配示例增加容错
      if (!correct && userNorm.includes("console.log('hello frontend')")) correct = true;
    }
    else {
      correct = false;
    }
  } catch(e) {
    correct = false;
  }

  const explanation = question.explanation || (correct ? '回答正确！' : '答案不匹配，看看解析再试试～');
  res.status(200).json({
    correct,
    explanation
  });
};
