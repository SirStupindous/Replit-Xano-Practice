require('dotenv').config();
const fetch = require('node-fetch');

async function generateMeta(content) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [{ role: 'user', content: `Generate SEO metadata for: ${content}` }]
    })
  });

  const data = await response.json();
  console.log(data.choices[0].message.content);
}

generateMeta("How to optimize your blog for search engines.");
