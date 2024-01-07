// Mensagens de interação do ChatBot
const mensagens = [
    { sender: 'bot', message: 'Olá! Como posso ajudar você hoje?' },
    { sender: 'bot', message: 'Estou aqui para responder às suas perguntas.' },
    { sender: 'bot', message: 'Como posso te auxiliar agora?' },
    { sender: 'bot', message: 'Estou disponível para conversar.' },
    { sender: 'bot', message: 'Você pode me fazer qualquer pergunta que estiver em sua mente.' },
    { sender: 'bot', message: 'Posso te ajudar a encontrar informações ou realizar tarefas específicas.' },
    { sender: 'bot', message: 'O que você gostaria de discutir hoje?' },
    // Adicione mais mensagens conforme necessário
  ];
  
  document.addEventListener('DOMContentLoaded', () => {
    // Carregar mensagens iniciais ao iniciar a página
    // Comentando a linha abaixo para evitar a exibição automática das mensagens do bot
    // mensagens.forEach(({ sender, message }) => appendMessage(sender, message));
  });
  
  function appendMessage(sender, message) {
    let messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.innerHTML = `<strong>${sender.charAt(0).toUpperCase() + sender.slice(1)}:</strong> ${message}`;
    chatArea.appendChild(messageDiv);
  
    // Rolando automaticamente para a última mensagem
    chatArea.scrollTop = chatArea.scrollHeight;
  }
  
  // Adicionando respostas do ChatBot para as interações do usuário
function simulateChatbotResponse(userMessage) {
    // Simulação de uma requisição assíncrona para obter a resposta do chatbot
    setTimeout(() => {
      let botMessage;
  
      let lowerCaseMessage = userMessage.toLowerCase();
  
      // Verificando saudações
      if (lowerCaseMessage.includes('oi') || lowerCaseMessage.includes('olá') || lowerCaseMessage.includes('opa')) {
        botMessage = 'Oi, tudo bem? Como posso te ajudar hoje?';
      } else if (lowerCaseMessage.includes('pagamento')) {
        botMessage = 'Aceitamos cartões de crédito, débito e outras formas de pagamento. Como mais posso ajudar?';
      } else if (lowerCaseMessage.includes('prazo de entrega')) {
        botMessage = 'O prazo de entrega depende da sua localização. Geralmente, enviamos em até 3 dias úteis. Posso ajudar com mais alguma coisa?';
      } else if (lowerCaseMessage.includes('promoções')) {
        botMessage = 'Sim, temos promoções sazonais! Recomendo verificar nossa página de promoções para mais detalhes. Mais alguma pergunta?';
      } else if (lowerCaseMessage.includes('devolver um produto')) {
        botMessage = 'Você pode solicitar a devolução de um produto dentro de 30 dias após a compra. Certifique-se de que o produto esteja nas mesmas condições em que foi recebido. Posso te ajudar com mais alguma coisa?';
      } else if (lowerCaseMessage.includes('rastrear meu pedido')) {
        botMessage = 'Para rastrear seu pedido, acesse a página de rastreamento em nossa loja online e insira o número do seu pedido. Alguma outra dúvida?';
      } else if (lowerCaseMessage.includes('horário de atendimento')) {
        botMessage = 'Nosso horário de atendimento é de segunda a sexta-feira, das 9h às 18h. Posso ajudar com mais alguma coisa?';
      } else if (lowerCaseMessage.includes('trabalho') || lowerCaseMessage.includes('projetos') || lowerCaseMessage.includes('desenvolvimento')) {
        botMessage = 'Fico feliz em saber do seu interesse! Trabalho no desenvolvimento de plataformas e aplicativos sob medida para empresas. Como posso ajudar especificamente no seu projeto?';
      } else if (lowerCaseMessage.includes('parceria') || lowerCaseMessage.includes('colaboração')) {
        botMessage = 'Estou aberto a parcerias e colaborações! Se tiver algum projeto específico em mente ou se quiser discutir possíveis colaborações, ficarei feliz em conversar mais a respeito.';
      } else if (lowerCaseMessage.includes('qual é o seu foco')) {
        botMessage = 'Meu foco está no desenvolvimento de soluções personalizadas para empresas, incluindo plataformas web, aplicativos móveis e muito mais. Posso fornecer mais detalhes sobre meus serviços, se desejar.';
      } else if (lowerCaseMessage.includes('tecnologias utilizadas')) {
        botMessage = 'Utilizo diversas tecnologias modernas no desenvolvimento, incluindo JavaScript (Node.js, React, React Native), Python (Django), entre outras. Se tiver alguma preferência ou dúvida específica sobre tecnologias, estou à disposição.';
      } // Verificação da mensagem do usuário
      else if (lowerCaseMessage.includes('pode me ajudar?')) {
        // Resposta do chat bot com quebras de linha em HTML
        botMessage = 'Claro, pode me informar o que você está procurando? Você tem interesse em uma:<br>' +
          '- Página de Destino;<br>' +
          '- Página Inicial;<br>' +
          '- Página de Produto;<br>' +
          '- Página de Blog;<br>' +
          '- Portfolio;<br>' +
          '- Página de Login;<br><br>' +
          'Qual modalidade de página te interessa?';
      } else if (lowerCaseMessage.includes('Página de Login') || lowerCaseMessage.includes('página de login')) {
        botMessage = 'A "Login/Sign-up Page" é uma página da web dedicada a gerenciar o acesso de usuários a uma plataforma online. Ela desempenha um papel crucial em fornecer uma experiência segura e personalizada para os usuários.';
      } else if (lowerCaseMessage.includes('Portfólio') || lowerCaseMessage.includes('portfólio')) {
        botMessage = 'Um portfólio é uma coleção organizada e deliberada de trabalhos, projetos ou realizações de uma pessoa ou organização. Ele é usado para destacar e exibir exemplos representativos de habilidades, experiências e competências. Portfólios são comumente utilizados em diversas áreas, incluindo arte, design, redação, programação, fotografia, educação e muitos outros campos profissionais.';
      } else if (lowerCaseMessage.includes('Página de Blog') || lowerCaseMessage.includes('blog')) {
        botMessage = 'Uma página de blog é uma seção específica de um site dedicada à exibição e organização de artigos, posts ou conteúdo editorial regularmente atualizado. Geralmente, essa seção é designada para compartilhar informações, notícias, insights ou opiniões sobre tópicos específicos, e é uma parte fundamental de muitos sites, especialmente aqueles voltados para criação de conteúdo e interação com a audiência.';
      } else if (lowerCaseMessage.includes('página de produto') || lowerCaseMessage.includes('produto')) {
        botMessage = 'Uma página de produto é uma seção específica de um site de comércio eletrônico ou de uma loja online que destaca e descreve detalhadamente um produto específico. Essa página é projetada para fornecer aos potenciais compradores todas as informações necessárias sobre o produto, ajudando-os a tomar decisões informadas antes de efetuar uma compra.';
      } else if (lowerCaseMessage.includes('Página Inicial') || lowerCaseMessage.includes('inicial')) {
        botMessage = 'A página inicial, muitas vezes chamada de "home page" em inglês, é a página principal de um site. Ela é a primeira página que os visitantes veem ao acessar um domínio específico na web. A página inicial desempenha um papel crucial na navegação do usuário, fornecendo uma visão geral do conteúdo, objetivos e identidade da organização ou indivíduo responsável pelo site.';
      } else if (lowerCaseMessage.includes('Página de Destino') || lowerCaseMessage.includes('destino')) {
        botMessage = 'Uma página de destino, ou "landing page" em inglês, é uma página da web específica projetada para receber visitantes direcionados de uma campanha de marketing, anúncio ou link específico. O objetivo principal de uma página de destino é converter visitantes em leads ou clientes, concentrando-se em uma oferta ou chamada para ação específica.<br><br>';
      }    
      else {
        botMessage = 'Desculpe, não entendi. Posso ajudar com algo mais?';
      }
  
      appendMessage('bot', botMessage);
    }, 500);
  }
  
  // Adicionando um evento para permitir que o usuário envie mensagens ao pressionar Enter
  userInput.addEventListener('keyup', function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });
  
  // Adicionando a função de envio de mensagens do usuário
  function sendMessage() {
    let message = userInput.value;
    if (message.trim() === '') return;
  
    appendMessage('user', message);
    simulateChatbotResponse(message);
  
    userInput.value = '';
  }
  