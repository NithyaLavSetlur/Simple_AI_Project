from openai import OpenAI

client = OpenAI(base_url="https://api.zukijourney.com/v1", api_key='zu-ff88a8fb767fe960759c56446db04f65')

response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "What's the weather like today?"}
    ]
)

print(response.choices[0].message.content)