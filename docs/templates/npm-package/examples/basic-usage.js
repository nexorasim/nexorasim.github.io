const { NexoraAgent } = require('@nexorasim/agent');

async function main() {
  const agent = new NexoraAgent({
    provider: 'openai',
    apiKey: process.env.OPENAI_API_KEY,
  });

  const response = await agent.execute('What is AI?');
  
  if (response.success) {
    console.log('Response:', response.text);
    console.log('Provider:', response.provider);
  } else {
    console.error('Error:', response.error);
  }
}

main().catch(console.error);
