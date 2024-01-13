// acompanhamento.js

// Função para receber dados do formulário
function receiveFormData() {
    // Recupera os dados do formulário do localStorage para cada página
    var jsonDataIndex = localStorage.getItem('formDataIndex');
    var jsonDataNoExperience = localStorage.getItem('formDataNoExperience');
    var jsonDataWithExperience = localStorage.getItem('formDataWithExperience');

    // Converte a string JSON de volta para um objeto para cada página
    var formDataIndex = jsonDataIndex ? JSON.parse(jsonDataIndex) : null;
    var formDataNoExperience = jsonDataNoExperience ? JSON.parse(jsonDataNoExperience) : null;
    var formDataWithExperience = jsonDataWithExperience ? JSON.parse(jsonDataWithExperience) : null;

    // Adicione os dados à tabela de formulários e às seções correspondentes
    var formsTableBody = document.getElementById('formsTableBody');
    var noProgrammingData = document.getElementById("noProgrammingData");
    var withProgrammingData = document.getElementById("withProgrammingKnowledge");

    addDataToTable(formsTableBody, formDataIndex);
    addDataToSection(noProgrammingData, formDataNoExperience);
    addDataToSection(withProgrammingData, formDataWithExperience);
}

// Função para adicionar uma linha à tabela
function addDataToTable(tableBody, formData) {
    if (formData && formData.name && formData.email && formData.message) {
        var newRow = tableBody.insertRow(tableBody.rows.length);
        newRow.innerHTML = '<td>' + formData.name + '</td><td>' + formData.email + '</td><td>' + formData.message + '</td><td><button onclick="deleteRow(this)">Excluir</button></td>';
    }
}

// Função para adicionar dados a uma seção
function addDataToSection(section, formData) {
    if (formData && formData.pontosBons && formData.diferenciais) {
        section.innerText = 'Pontos bons: ' + formData.pontosBons + '\nDiferenciais: ' + formData.diferenciais;
    }
}

// Função para excluir uma linha da tabela
function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// Função para lidar com alterações no armazenamento local
window.onstorage = function(e) {
    if (e.key === 'formDataIndex' || e.key === 'formDataNoExperience' || e.key === 'formDataWithExperience') {
        var data = JSON.parse(e.newValue);

        // Atualize a tabela "Forms de Trabalho" e as seções correspondentes
        var formsTableBody = document.getElementById("formsTableBody");
        var noProgrammingData = document.getElementById("noProgrammingData");
        var withProgrammingData = document.getElementById("withProgrammingKnowledge");

        addDataToTable(formsTableBody, data);
        addDataToSection(noProgrammingData, data);
        addDataToSection(withProgrammingData, data);
    }
};

// Chama a função receiveFormData quando a página carrega
window.onload = function() {
    receiveFormData();
};
