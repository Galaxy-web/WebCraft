// script.js

// Aguarda o carregamento do DOM
document.addEventListener("DOMContentLoaded", function() {
    // Adiciona um ouvinte de eventos ao botão "Enviar"
    var submitButton = document.getElementById("submitButton");

    if (submitButton) {
        submitButton.addEventListener("click", function(event) {
            // Previne o comportamento padrão do formulário
            event.preventDefault();

            // Chama a função submitForm()
            submitForm();
        });
    }
});

// Função para enviar dados do formulário para a página de acompanhamento
function submitForm() {
    // Coleta os dados do formulário
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Cria um objeto com os dados
    var formData = {
        name: name,
        email: email,
        message: message
    };

    // Converte o objeto para uma string JSON
    var jsonData = JSON.stringify(formData);

    // Armazena os dados do formulário no localStorage
    localStorage.setItem('formDataIndex', jsonData); // Alterado para 'formDataIndex'

    // Limpa os campos do formulário
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    // Mostra uma notificação de sucesso
    showNotification('Mensagem enviada com sucesso!');
}

// Função para mostrar uma notificação
function showNotification(message) {
    alert(message); // Pode ser substituído por uma notificação mais elegante
}
