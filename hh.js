// Biblioteca do ChatBot
const chatbotLibrary = {
    greetings: ['oi', 'olá', 'opa'],
    payment: ['pagamento', 'forma de pagamento'],
    delivery: ['prazo de entrega', 'entrega'],
    promotions: ['promoções', 'ofertas', 'descontos', 'promoção especial'],
    return: ['devolução', 'devolver produto', 'troca'],
    trackOrder: ['rastrear pedido', 'consulta de pedido', 'acompanhar entrega'],
    workingHours: ['horário de atendimento', 'atendimento'],
    projects: ['trabalho', 'projetos', 'desenvolvimento', 'soluções personalizadas'],
    partnership: ['parceria', 'colaboração'],
    focus: ['qual é o seu foco', 'seu objetivo', 'missão'],
    technologies: ['tecnologias utilizadas', 'linguagens de programação', 'stack tecnológico'],
    help: ['pode me ajudar', 'preciso de ajuda', 'assistência'],
    loginPage: ['página de login', 'login', 'registro seguro'],
    portfolio: ['portfólio', 'trabalhos realizados', 'projetos concluídos'],
    blogPage: ['página de blog', 'blog', 'conteúdo exclusivo'],
    productPage: ['página de produto', 'produto', 'detalhes do produto'],
    homePage: ['página inicial', 'inicial', 'visão geral'],
    landingPage: ['página de destino', 'destino', 'oferta exclusiva'],
    hiring: ['como posso trabalhar com vocês', 'estão contratando', 'oportunidades de emprego'],
    design: ['design', 'interface do usuário', 'experiência do usuário'],
    server: ['servidor', 'back end', 'infraestrutura técnica', 'lógica de negócios'],
    exclusiveOffer: ['oferta exclusiva', 'promoção exclusiva', 'oferta limitada', 'promoção única'],
    scarcity: ['escassez', 'últimas unidades', 'por tempo limitado'],
    advantage: ['vantagem competitiva', 'diferencial', 'benefícios exclusivos'],
    satisfaction: ['satisfação do cliente', 'opiniões dos clientes', 'feedback positivo','Cliente dizem','dizem os clientes','avaliação dos clientes'],
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    // ... (código existente)
  });
  
  function typeWriter(message, index, element, sender) {
    if (index < message.length) {
      element.innerHTML += message.charAt(index);
      chatArea.scrollTop = chatArea.scrollHeight;
  
      setTimeout(() => {
        typeWriter(message, index + 10, element, sender);
      }, 50);  // Ajuste o valor para controlar a velocidade da digitação
    } else {
      // Adiciona uma nova linha após a digitação ser concluída
      let messageDiv = document.createElement('div');
      messageDiv.classList.add('message', sender);
      messageDiv.innerHTML = `<strong>${sender.charAt(0).toUpperCase() + sender.slice(1)}:</strong> ${message}`;
      chatArea.appendChild(messageDiv);
      chatArea.scrollTop = chatArea.scrollHeight;
    }
  }
  
  function appendMessageWithTyping(sender, message) {
    let messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    chatArea.appendChild(messageDiv);
  
    typeWriter(message, 0, messageDiv, sender);
  }
  
  function getBotResponse(userMessage) {
    let lowerCaseMessage = userMessage.toLowerCase();
  
    // Verificando palavras-chave
    if (checkKeywords(lowerCaseMessage, chatbotLibrary.greetings)) {
      return 'Oi! Como posso ajudar hoje? 😊';
    } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.payment)) {
      return 'Aceitamos várias formas de pagamento, incluindo cartões de crédito e débito. Garantimos segurança e praticidade para suas transações. Mais alguma dúvida sobre pagamento?';
    } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.delivery)) {
      return 'O prazo de entrega depende da sua localização. Geralmente, enviamos em até 3 dias úteis. Queremos garantir que você receba seu pedido o mais rápido possível. Posso ajudar com mais alguma coisa?';
    } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.promotions)) {
      return 'Não perca nossas promoções incríveis! Estamos oferecendo descontos exclusivos para clientes como você. Confira nossa página de promoções para detalhes. Mais alguma pergunta sobre nossas ofertas?';
    } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.return)) {
      return 'Sua satisfação é nossa prioridade. Você pode solicitar a devolução de um produto dentro de 30 dias após a compra. Estamos aqui para garantir que sua experiência seja perfeita. Posso te ajudar com mais alguma coisa relacionada a devoluções?';
    } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.trackOrder)) {
      return 'Rastrear seu pedido é fácil! Acesse nossa página de rastreamento em nossa loja online e insira o número do seu pedido. Queremos manter você informado sobre cada etapa da entrega. Alguma outra dúvida sobre pedidos?';
    } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.workingHours)) {
      return 'Nosso horário de atendimento é de segunda a sexta-feira, das 9h às 18h. Estamos aqui para fornecer o melhor atendimento possível. Posso ajudar com mais alguma coisa relacionada ao atendimento?';
    } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.projects)) {
      return 'Fico feliz em saber do seu interesse! Trabalhamos no desenvolvimento de soluções personalizadas para empresas. Sua visão é nossa prioridade. Como posso ajudar especificamente no seu projeto? 😊';
    } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.partnership)) {
      return 'Valorizamos parcerias e colaborações! Se tiver algum projeto específico em mente ou se quiser discutir possíveis colaborações, ficarei feliz em conversar mais a respeito. Juntos, podemos alcançar grandes resultados. 👥';
    } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.focus)) {
      return 'Nosso foco está em oferecer soluções personalizadas para empresas, incluindo plataformas web, aplicativos móveis e muito mais. Estamos comprometidos com a excelência. Posso fornecer mais detalhes sobre nossos serviços, se desejar.';
    } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.technologies)) {
      return 'Utilizamos diversas tecnologias modernas no desenvolvimento, incluindo JavaScript (Node.js, React, React Native), Python (Django), entre outras. Se tiver alguma preferência ou dúvida específica sobre tecnologias, estou à disposição para esclarecer.';
    } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.help)) {
      return 'Claro, pode me informar o que você está procurando? Você tem interesse em uma:<br>' +
        '- Página de Destino;<br>' +
        '- Página Inicial;<br>' +
        '- Página de Produto;<br>' +
        '- Página de Blog;<br>' +
        '- Portfolio;<br>' +
        '- Página de Login;<br><br>' +
        'Qual modalidade de página te interessa?';
    } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.loginPage)) {
      return 'A "Login/Sign-up Page" é uma página da web dedicada a gerenciar o acesso de usuários a uma plataforma online. Ela desempenha um papel crucial em fornecer uma experiência segura e personalizada para os usuários. Seu registro seguro está a apenas um clique de distância. 🔐';
    } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.portfolio)) {
      return 'Um portfólio é uma coleção organizada e deliberada de trabalhos, projetos ou realizações de uma pessoa ou organização. Ele é usado para destacar e exibir exemplos representativos de habilidades, experiências e competências. Nosso portfólio reflete nosso compromisso com a qualidade e inovação. 📂';
    } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.blogPage)) {
      return 'Uma página de blog é uma seção específica de um site dedicada à exibição e organização de artigos, posts ou conteúdo editorial regularmente atualizado. Estamos constantemente compartilhando conteúdo exclusivo para manter nossos clientes informados e inspirados. 📝';
    } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.productPage)) {
      return 'Nossa página de produto oferece uma experiência única. Detalhamos cada produto para garantir que você tenha todas as informações necessárias antes de tomar uma decisão informada. Explore nossa variedade e faça uma compra com confiança. 🛍️';
    } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.homePage)) {
      return 'A página inicial, muitas vezes chamada de "home page" em inglês, é a porta de entrada para nossa oferta exclusiva. Projetamos nossa página inicial para proporcionar uma visão envolvente e informativa. Explore e descubra o que torna nossa marca única. 🏠';
    } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.landingPage)) {
      return 'Nossa página de destino é mais do que uma oferta exclusiva; é uma oportunidade imperdível. Projetada para cativar, nossa página de destino destaca benefícios exclusivos e vantagens que você não encontrará em nenhum outro lugar. 🚀';
    } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.hiring)) {
      return 'Sim, estamos contratando talentos como você! Temos oportunidades emocionantes tanto no Design quanto no Servidor. O que desperta mais seu interesse? 😊';
    } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.design)) {
      return 'Então você vai adorar nossa equipe de Front End! Eles são responsáveis por apresentar informações de maneira visualmente atraente, garantindo uma experiência única aos usuários. 🎨';
    } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.server)) {
      return 'Se você tem interesse no Servidor, nosso time de Back End é essencial. Eles lidam com a lógica de negócios, processamento de dados e garantem um funcionamento suave. Seja parte do coração técnico da nossa equipe! 💻';
    } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.exclusiveOffer)) {
      return 'Você está com sorte! Temos uma oferta exclusiva esperando por você. Mas corra, pois é por tempo limitado. Não perca a oportunidade de aproveitar benefícios exclusivos. 🌟';
    } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.scarcity)) {
      return 'Atenção! Nossos produtos estão em alta demanda, e as unidades são limitadas. Garanta o seu agora antes que acabe. Essa oportunidade não vai durar para sempre! ⏳';
    } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.advantage)) {
      return 'Nossa vantagem competitiva está em oferecer não apenas produtos de alta qualidade, mas também benefícios exclusivos para nossos clientes. Descubra como podemos tornar sua experiência excepcional. 🌐';
    } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.satisfaction)) {
      return 'A satisfação dos nossos clientes é nossa prioridade. Leia as opiniões dos clientes para entender como estamos superando as expectativas. Seja parte de nossa comunidade satisfeita. 😊';
    } else {
      return 'Desculpe, não entendi. Posso ajudar com algo mais? 😕';
    }
  }
  
  function checkKeywords(message, keywords) {
    return keywords.some(keyword => message.includes(keyword));
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
  
    appendMessageWithTyping('user', message);
    simulateChatbotResponseWithTyping(message);
  
    userInput.value = '';
  }
  
  // Função para simular resposta do ChatBot com efeito de digitação
  function simulateChatbotResponseWithTyping(userMessage) {
    setTimeout(() => {
      let botMessage = getBotResponse(userMessage);
      appendMessageWithTyping('bot', botMessage);
    }, 500);
  }
  