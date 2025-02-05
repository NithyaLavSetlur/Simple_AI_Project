import OpenAI from 'openai';

const client = new OpenAI({
  baseURL: 'https://api.zukijourney.com/v1',  // Ensure this API URL is correct
  apiKey: 'zu-ff88a8fb767fe960759c56446db04f65', // WARNING: Exposing API keys publicly is dangerous!
});

async function sendMessage() {
  const userInputField = document.getElementById("userInput");
  const messagesDiv = document.getElementById("messages");
  
  const userInput = userInputField.value.trim();
  if (!userInput) return; // Prevent sending empty messages
  
  // Display user's message in chat
  const userMessage = document.createElement("p");
  userMessage.textContent = "You: " + userInput;
  messagesDiv.appendChild(userMessage);
  userInputField.value = ""; // Clear input field
  messagesDiv.scrollTop = messagesDiv.scrollHeight; // Auto-scroll chat

  try {
    const response = await client.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: userInput }
      ],
    });

    // Display bot's response
    const botMessage = document.createElement("p");
    botMessage.textContent = "Bot: " + response.choices[0].message.content;
    messagesDiv.appendChild(botMessage);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Auto-scroll chat

  } catch (error) {
    console.error("Error:", error);
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Error: Could not retrieve response.";
    messagesDiv.appendChild(errorMessage);
  }
}

// Attach event listener for the button
document.getElementById("sendButton").addEventListener("click", sendMessage);

// Allow pressing Enter to send a message
document.getElementById("userInput").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});