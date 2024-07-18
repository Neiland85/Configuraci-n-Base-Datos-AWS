// src/services/openaiService.js
const axios = require('axios');
require('dotenv').config();

const instance = axios.create({
  baseURL: 'https://api.openai.azure.com/v1',
  headers: {
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    'Content-Type': 'application/json'
  }
});

async function generateText(prompt) {
  const response = await instance.post('/completions', {
    model: 'text-davinci-003',
    prompt: prompt,
    max_tokens: 100
  });

  return response.data.choices[0].text;
}

module.exports = { generateText };

