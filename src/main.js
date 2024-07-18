// src/main.js
const db = require('./db/connection');
const openai = require('./services/openaiService');

async function main() {
  try {
    console.log('Starting application...');
    // Example: generate text using OpenAI
    const prompt = "Hello, how are you?";
    const response = await openai.generateText(prompt);
    console.log('OpenAI Response:', response);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    db.end();
  }
}

main();

