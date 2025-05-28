import { OPENAI_API_KEY } from '$env/static/private'

export async function POST({ request }) {
  const { potionName } = await request.json()

  if (!potionName) {
    return new Response(JSON.stringify({ error: 'Missing potion name' }), { status: 400 })
  }

  const prompt = `Describe a fantasy TTRPG potion called "${potionName}". Keep your description a single short sentence, leaving it open to player agency and creativity. The description should be suitable for a game like Mörk Borg, where potions are often humorous and bizarre.`

  const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 200,
    }),
  })

  const data = await openaiResponse.json()

  if (!openaiResponse.ok) {
    return new Response(JSON.stringify({ error: data.error?.message || 'OpenAI API error' }), { status: 500 })
  }

  const description = data.choices?.[0]?.message?.content?.trim()

  return new Response(JSON.stringify({ potionName, description }), {
    headers: { 'Content-Type': 'application/json' },
  })
}
