const { NexoraAgent } = require('@nexorasim/agent');

async function main() {
  const agent = new NexoraAgent({
    provider: 'openai',
    apiKey: process.env.OPENAI_API_KEY,
  });

  console.log('Initial status:', agent.getStatus());

  const response1 = await agent.execute('Hello from OpenAI');
  console.log('OpenAI response:', response1.text);

  agent.setProvider('gemini');
  console.log('Updated status:', agent.getStatus());

  const response2 = await agent.execute('Hello from Gemini');
  console.log('Gemini response:', response2.text);
}

main().catch(console.error);
