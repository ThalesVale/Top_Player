import {conexao} from "../config/db.js";

export async function listarUsuarios() {
    const [resultados] = await conexao.query("SELECT id, nome, email, criado_em FROM usuarios ORDER BY id DESC");
    return resultados;
}

export async function buscarUsuarios(id) {
    const [resultados] = await conexao.query("SELECT id, nome, email, criado_em FROM usuarios WHERE id = ?",
        [id]);
    return resultados[0];
}

export async function criarUsuario({nome, email, senha_hash}) {
    const [resultado] = await conexao.query("INSERT INTO usuarios (nome, email, senha_hash) VALUES (?, ?, ?)",
        [nome, email, senha_hash]);
    return resultado.insertId;


}
export async function buscarUsuarioPorEmail(email) {
    const [resultados] = await conexao.query("SELECT id, nome, email,senha_hash, criado_em FROM usuarios WHERE email = ?",
        [email]);
    return resultados[0];
}
