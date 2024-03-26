// script.js

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter os valores de nome de usuário e senha
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simulação de autenticação (substitua isso com sua lógica real de autenticação)
    if (username === 'seu_usuario' && password === 'sua_senha') {
        // Se as credenciais estiverem corretas, exibir uma mensagem de sucesso
        document.getElementById('login-message').textContent = 'Login bem-sucedido!';
    } else {
        // Se as credenciais estiverem incorretas, exibir uma mensagem de erro
        document.getElementById('login-message').textContent = 'Credenciais inválidas. Por favor, tente novamente.';
    }
});