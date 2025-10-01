// Função para buscar usuário específico pelo ID
import LOGIN_ENDPOINT from "../api/loginEndpoint.js";

export async function buscarUsuarioPorId(id) {
    try {
        const response = await fetch(`${LOGIN_ENDPOINT}${id}`);
        if (!response.ok) return null;
        return await response.json();
    } catch (error) {
        return null;
    }
}
