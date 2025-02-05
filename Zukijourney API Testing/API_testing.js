import OpenAI from 'openai';

const client = new OpenAI({
  baseURL: 'https://api.zukijourney.com/v1',
  apiKey: 'zu-ff88a8fb767fe960759c56446db04f65',
});

async function main() {
  const response = await client.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: "What's the weather like today?" }
    ],
  });

  console.log(response.choices[0].message.content);
}

main();