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

    // Envia os dados para a página de acompanhamento
    window.location.href = "acompanhamento.html?data=" + encodeURIComponent(jsonData);
}
