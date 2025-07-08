export async function POST(request) {
  const { inputt } = await request.json();
  
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "google/gemini-2.0-flash-exp:free",
        messages: [{
          role: "user",
          content: [{
            type: "text",
            text: inputt.includes("What is") || inputt.includes("How to") 
                  ? inputt : `What is ${inputt}`
          }]
        }]
      })
    });

    if (!response.ok) throw new Error(`OpenRouter error: ${response.status}`);

    return new Response(await response.text(), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}