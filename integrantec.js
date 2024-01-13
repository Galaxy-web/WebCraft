// acompanhamento.js

// Função para receber dados do formulário
function receiveFormData() {
    // Recupera os dados do formulário do localStorage
    var jsonData = localStorage.getItem('formDataWithExperience');

    // Converte a string JSON de volta para um objeto
    var formData = JSON.parse(jsonData);

    // Agora você pode usar formData.skills e formData.diferenciais
    // para acessar os dados do formulário
    if (formData && formData.skills && formData.diferenciais) {
        // Adiciona os dados à seção de integrantes
        var integrantesContent = document.getElementById('withProgrammingKnowledge');
        integrantesContent.innerHTML += '<p>Skills: ' + formData.skills + '</p>';
        integrantesContent.innerHTML += '<p>Diferenciais: ' + formData.diferenciais + '</p>';
        integrantesContent.innerHTML += '<button onclick="deleteData()">Excluir</button>'; // Botão "Excluir"

        console.log('Dados recebidos e adicionados com sucesso.');
    } else {
        console.error('Dados inválidos ou incompletos recebidos.');
    }
}

// Função para excluir os dados
function deleteData() {
    // Remove os dados do localStorage
    localStorage.removeItem('formDataWithExperience');

    // Limpa a seção de integrantes
    document.getElementById('withProgrammingKnowledge').innerHTML = '';

    console.log('Dados excluídos com sucesso.');
}

// Chama a função receiveFormData quando a página carrega
window.onload = receiveFormData;
