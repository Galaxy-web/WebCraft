// Biblioteca do ChatBot
const chatbotLibrary = {
  greetings: ['oi', 'olá', 'opa', 'ola', 'hello', 'hi'],
  payment: ['pagamento', 'forma de pagamento', 'aquisição'],
  delivery: ['prazo de entrega', 'entrega'],
  promotions: ['promoções', 'ofertas', 'descontos', 'promoção especial'],
  return: ['devolução', 'devolver produto', 'troca'],
  trackOrder: ['rastrear pedido', 'consulta de pedido', 'acompanhar entrega'],
  workingHours: ['horário de atendimento', 'atendimento'],
  projects: ['trabalho', 'projetos', 'desenvolvimento', 'soluções personalizadas'],
  partnership: ['parceria', 'colaboração'],
  focus: ['qual é o seu foco', 'seu objetivo', 'missão'],
  technologies: ['tecnologias utilizadas', 'linguagens de programação', 'stack tecnológico'],
  help: ['pode me ajudar', 'preciso de ajuda', 'assistência', 'ideia', 'ideias'],
  loginPage: ['página de login', 'login', 'registro seguro'],
  portfolio: ['portfólio', 'trabalhos realizados', 'projetos concluídos'],
  blogPage: ['página de blog', 'blog', 'conteúdo exclusivo'],
  productPage: ['página de produto', 'produto', 'detalhes do produto'],
  homePage: ['página inicial', 'inicial', 'visão geral'],
  landingPage: ['página de destino', 'destino', 'oferta exclusiva', 'leadingpage'],
  hiring: ['como posso trabalhar com vocês', 'estão contratando', 'oportunidades de emprego', 'contratando', 'procurando emprego', 'quero emprego', 'buscando um emprego', 'buscando emprego', 'emprego'],
  design: ['design', 'interface do usuário', 'experiência do usuário', 'decoração', 'personalização', 'estilização'],
  server: ['servidor', 'back end', 'infraestrutura técnica', 'lógica de negócios'],
  exclusiveOffer: ['oferta exclusiva', 'promoção exclusiva', 'oferta limitada', 'promoção única', 'exclusivo', 'exclusiva'],
  scarcity: ['escassez', 'últimas unidades', 'por tempo limitado'],
  advantage: ['vantagem competitiva', 'diferencial', 'benefícios exclusivos'],
  satisfaction: ['satisfação do cliente', 'opiniões dos clientes', 'feedback positivo', 'cliente dizem', 'dizem os clientes', 'avaliação dos clientes'],
  iniciante: ['informação', 'detalhes', 'me diga mais', 'contratando', 'saber', 'não tenho curso', 'preciso me especializar?'],
  positivo: ['tenho', 'positivo'],
  negativo: ['queria', 'mais', 'poxa'],
  page: ['Sim tenho interesse', 'quero essa modalidade', 'preciso de algo assim', 'estou pensando em algo parecido', 'sim'],
  nopage: ['não me interessa', 'essa modalidade não me agrada', 'não', 'Não, tem outra'],
};

document.addEventListener('DOMContentLoaded', () => {
  // Aqui você pode adicionar código de inicialização se necessário
});

function typeWriter(message, index, element, sender) {
  if (index < message.length) {
    element.innerHTML += message.charAt(index);
    chatArea.scrollTop = chatArea.scrollHeight;

    setTimeout(() => {
      typeWriter(message, index + 1, element, sender);
    }, 1);  // Ajuste o valor para controlar a velocidade da digitação
  } else {
    chatArea.scrollTop = chatArea.scrollHeight;
  }
}

// ... (seu código existente)

function appendMessageWithTyping(sender, message) {
  const lastMessage = chatArea.lastChild;
  const lastMessageContent = lastMessage ? lastMessage.querySelector('.message-content') : null;

  if (lastMessageContent && lastMessageContent.innerHTML === message) {
    return;
  }

  let messageDiv = document.createElement('div');
  messageDiv.classList.add('message', sender);
  if (sender === 'user') {
    messageDiv.classList.add('user-message');
  } else {
    messageDiv.classList.add('bot-message');
  }
  chatArea.appendChild(messageDiv);

  let messageContent = document.createElement('div');
  messageContent.classList.add('message-content');
  messageDiv.appendChild(messageContent);

  typeWriter(message, 0, messageContent, sender);
}

// ... (seu código existente)


function getBotResponse(userMessage) {
  let lowerCaseMessage = userMessage.toLowerCase();

  if (checkKeywords(lowerCaseMessage, chatbotLibrary.greetings)) {
    return 'Oi! Como posso ajudar hoje? 😊';
  } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.payment)) {
    return 'Aceitamos várias formas de pagamento, incluindo cartões de crédito e débito. Garantimos segurança e praticidade para suas transações. Mais alguma dúvida sobre pagamento?';
  } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.delivery)) {
    return 'O prazo de entrega depende da solicitação e requerimento do cliente. Geralmente, projetos mais simples podem levar até 2 meses. Queremos garantir que você receba seu pedido o mais rápido possível com a melhor qualidade. Me entende?';
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
    return 'Claro, vou te apresentar as modalidades, ai você me fala em qual tem interesse:' +
      '(- Página de Destino;' +
      '- Página Inicial;' +
      '- Página de Produto;' +
      '- Página de Blog;' +
      '- Portfolio;' +
      '- Página de Login;)' +
      'Qual modalidade de página te interessa? Me informe apenas qual te interessa que consigo te explicar com mais detalhe. :)';
  } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.loginPage)) {
    return 'A "Login/Sign-up Page" é uma página da web dedicada a gerenciar o acesso de usuários a uma plataforma online. Ela desempenha um papel crucial em fornecer uma experiência segura e personalizada para os usuários. Seu registro seguro está a apenas um clique de distância. Essa modalidade de página te interessa? 🔐';
  } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.portfolio)) {
    return 'Um portfólio é uma coleção organizada e deliberada de trabalhos, projetos ou realizações de uma pessoa ou organização. Ele é usado para destacar e exibir exemplos representativos de habilidades, experiências e competências. Nosso portfólio reflete nosso compromisso com a qualidade e inovação. Essa modalidade de página te interessa? 📂';
  } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.blogPage)) {
    return 'Uma página de blog é uma seção específica de um site dedicada à exibição e organização de artigos, posts ou conteúdo editorial regularmente atualizado. Estamos constantemente compartilhando conteúdo exclusivo para manter nossos clientes informados e inspirados. Essa modalidade de página te interessa? 📝';
  } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.productPage)) {
    return 'Nossa página de produto oferece uma experiência única. Detalhamos cada produto para garantir que você tenha todas as informações necessárias antes de tomar uma decisão informada. Explore nossa variedade e faça uma compra com confiança. Essa modalidade de página te interessa? 🛍️';
  } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.homePage)) {
    return 'A página inicial, muitas vezes chamada de "home page" em inglês, é a porta de entrada para nossa oferta exclusiva. Projetamos nossa página inicial para proporcionar uma visão envolvente e informativa. Explore e descubra o que torna nossa marca única. Essa modalidade de página te interessa?🏠';
  } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.landingPage)) {
    return 'Nossa página de destino é mais do que uma oferta exclusiva; é uma oportunidade imperdível. Projetada para cativar a vontade de compra do cliente, ela destaca benefícios exclusivos e vantagens que você não encontrará em nenhum outro lugar. Essa modalidade de página te interessa? 🚀';
  } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.hiring)) {
    return 'Sim, estamos contratando talentos como você! Temos oportunidades emocionantes tanto no Design quanto no Servidor. O que desperta mais seu interesse? 😊';
  } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.design)) {
    return 'Então você vai adorar nossa equipe de Front End! Eles são responsáveis por apresentar informações de maneira visualmente atraente, garantindo uma experiência única aos usuários. se tiver interesse me avisa que vamos conversar melhor 🎨';
  } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.server)) {
    return 'Se você tem interesse no Servidor, nosso time de Back End é essencial. Eles lidam com a lógica de negócios, processamento de dados e garantem um funcionamento suave. Seja parte do coração técnico da nossa equipe! Se tiver interesse nesta modalidade de trabalho, me fala que podemos conversar melhor! 💻';
  } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.exclusiveOffer)) {
    return 'Você está com sorte! Temos uma oferta exclusiva esperando por você. Mas corra, pois é por tempo limitado. Não perca a oportunidade de aproveitar benefícios exclusivos. 🌟';
  } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.scarcity)) {
    return 'Atenção! Nossos produtos estão em alta demanda, e as unidades são limitadas. Garanta o seu agora antes que acabe. Essa oportunidade não vai durar para sempre! ⏳';
  } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.advantage)) {
    return 'Nossa vantagem competitiva está em oferecer não apenas produtos de alta qualidade, mas também benefícios exclusivos para nossos clientes. Descubra como podemos tornar sua experiência excepcional. 🌐';
  } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.satisfaction)) {
    return 'A satisfação dos nossos clientes é nossa prioridade. Leia as opiniões dos clientes para entender como estamos superando as expectativas. Seja parte de nossa comunidade satisfeita. 😊';
  } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.iniciante)) {
    return 'Antes de conversar melhor sobre a vaga, me diga você possui alguma especialização em programação? (sim) - (não)';
  } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.positivo)) {
  return 'Que legal! E já deve ter decidido a sua area de atuação, mas quero lhe fazer um convite! Aperte no botão "Quero fazer parte do time", ma area de membros. Caso passe da etapa de contratação, você vai ser um novo membro da WebCraft Groups';
  } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.negativo)) {
    return 'Pode ficar tranquilo, se você realmente tem interesse e procura se destacar no mundo da programação e criação de web site, a WebCraft cuida do Restante. Basta aperta no botão "Quero fazer parte do time", na area de Membros. E caso passe na parte de contratação, você vai ser um novo membro da WebCraft Groups mais informações você encontra por lá!';
  } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.page)) {
    return 'Muito bom saber que tem interesse nestá modalidade, o próximo passo é encaminhar um formulario para a equipe ir até você, ou nos procurar pelas redes sociais que estão no final da página, o Whatsapp, facebook... Lá o contato é direto com os desenvolvedores :)';
  } else if (checkKeywords(lowerCaseMessage, chatbotLibrary.nopage)) {
    return 'Essa modalidade não te agrada, pode ficar despreocupado, opção é o que mais temos, qual outra modalidade te interessa no momento, pode escrever aqui ou solicitar pelo formulário no final da página. :)';
  } else {
    return 'Desculpe, não entendi. Posso ajudar com algo mais? 😕';
  }
}

function checkKeywords(message, keywords) {
  return keywords.some(keyword => message.includes(keyword));
}

userInput.addEventListener('keyup', function (event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});

function sendMessage() {
  let message = userInput.value;
  if (message.trim() === '') return;
}

  appendMessageWithTyping('user', message);
  simulateChatbot
  function simulateChatbotResponseWithTyping(userMessage) {
    // Simplesmente obtenha a resposta do chatbot e a exiba sem o efeito de digitação
    let botMessage = getBotResponse(userMessage);
    appendMessageWithTyping('bot', botMessage);
  }
  
  // Agora, quando uma mensagem do usuário é enviada, a resposta do chatbot será simulada com o efeito de digitação
  function appendMessageWithTyping(sender, message) {
    const lastMessage = chatArea.lastChild;
    const lastMessageContent = lastMessage ? lastMessage.querySelector('.message-content') : null;
  
    if (lastMessageContent && lastMessageContent.innerHTML === message) {
      return;
    }
  
    let messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    chatArea.appendChild(messageDiv);
  
    let messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    messageDiv.appendChild(messageContent);
  
    typeWriter(message, 0, messageContent, sender);
  }
  
  // Adicionando um ouvinte de evento para a tecla Enter no campo de entrada do usuário
  userInput.addEventListener('keyup', function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });
  
  // Função para enviar a mensagem do usuário
  function sendMessage() {
    let message = userInput.value;
    if (message.trim() === '') return;
  
    // Adicionando a mensagem do usuário ao chat
    appendMessageWithTyping('user', message);
  
    // Simulando a resposta do chatbot com o efeito de digitação
    simulateChatbotResponseWithTyping(message);
  
    // Limpando o campo de entrada
    userInput.value = '';
  }
  
  // Função para verificar palavras-chave em uma mensagem
  function checkKeywords(message, keywords) {
    return keywords.some(keyword => message.includes(keyword));
  }
  
  // Inicializando o chatbot quando o DOM estiver pronto
  document.addEventListener('DOMContentLoaded', () => {
    // Aqui você pode adicionar código de inicialização se necessário
  });
  
  