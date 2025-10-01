// Função para buscar usuário no endpoint
import LOGIN_ENDPOINT from "../api/loginEndpoint.js";

export async function buscarUsuario(name, senha) {
    try {
        const response = await fetch(LOGIN_ENDPOINT);
        const usuarios = await response.json();
        // Filtra usuário pelo nome e senha
        return usuarios.find(u => u.name === name && u.senha == senha);
    } catch (error) {
        console.log('Erro ao buscar usuário:', error);
        return null;
    }
}
