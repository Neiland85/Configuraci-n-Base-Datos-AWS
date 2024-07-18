// tests/openaiService.test.js
const openai = require('../src/services/openaiService');

test('should generate text using OpenAI', async () => {
  const prompt = "Hello, how are you?";
  const response = await openai.generateText(prompt);
  expect(response).toBeTruthy();
});

