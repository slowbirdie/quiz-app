const QUESTION_BANK = require('../question-bank.js');

module.exports = (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { id, answer } = req.body;
  const q = QUESTION_BANK.find(q => q.id === id);
  if (!q) return res.status(400).json({ error: '题目不存在' });

  const correct = (answer === q.answer);
  res.status(200).json({
    correct,
    explanation: correct ? '回答正确！' : (q.explanation || '再想想噢')
  });
};
