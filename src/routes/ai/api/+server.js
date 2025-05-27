import { OPENAI_API_KEY } from '$env/static/private'

export async function POST({ request }) {
  const { spellName } = await request.json()

  if (!spellName) {
    return new Response(JSON.stringify({ error: 'Missing spell name' }), { status: 400 })
  }

  const prompt = `Describe a fantasy TTRPG spell called "${spellName}". Keep your description a single sentence but evocative to encourage player agency and creativity. The spells should be whimsical and silly, taking the most ridiculous aspects of the name into account. The description should be suitable for a game like Troika, where spells are often humorous and bizarre.`

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

  return new Response(JSON.stringify({ spellName, description }), {
    headers: { 'Content-Type': 'application/json' },
  })
}
