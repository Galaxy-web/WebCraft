let chatPopup = document.getElementById('chatPopup');
let chatArea = document.getElementById('chatArea');
let userInput = document.getElementById('userInput');
let sendMessageButton = document.getElementById('sendMessageButton');

sendMessageButton.addEventListener('click', sendMessage);
userInput.addEventListener('keyup', function (event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});

function toggleChat() {
  chatPopup.style.display = (chatPopup.style.display === 'none' || chatPopup.style.display === '') ? 'block' : 'none';
}

function sendMessage() {
  let message = userInput.value;
  if (message.trim() === '') return;

  appendMessage('user', message);

  // Processamento da mensagem do usuário (simulação assíncrona)
  simulateChatbotResponse(message);

  userInput.value = '';
}

function simulateChatbotResponse(userMessage) {
  // Simulação de uma requisição assíncrona para obter a resposta do chatbot
  setTimeout(() => {
    let botMessage = getChatbotResponse(userMessage);
    appendMessage('bot', botMessage);
  }, 500);
}

function getChatbotResponse(userMessage) {
  // Simulação simples de lógica de chatbot
  let lowerCaseMessage = userMessage.toLowerCase();

  if (lowerCaseMessage.includes('como você está')) {
    return 'Eu sou apenas um programa, não tenho sentimentos, mas obrigado por perguntar!';
  } else if (lowerCaseMessage.includes('qual é o seu nome')) {
    return getRandomResponse(respostasPersonalizadas.nome);
  } else if (lowerCaseMessage.includes('ajuda')) {
    return getRandomResponse(respostasPersonalizadas.ajuda);
  } else {
    return 'Desculpe, não entendi. Posso ajudar com algo mais?';
  }
}

function getRandomResponse(respostas) {
  const randomIndex = Math.floor(Math.random() * respostas.length);
  return respostas[randomIndex];
}

function appendMessage(sender, message) {
  let messageDiv = document.createElement('div');
  messageDiv.classList.add('message', sender);
  messageDiv.innerHTML = `<strong>${sender.charAt(0).toUpperCase() + sender.slice(1)}:</strong> ${message}`;
  chatArea.appendChild(messageDiv);

  // Rolando automaticamente para a última mensagem
  chatArea.scrollTop = chatArea.scrollHeight;
}
