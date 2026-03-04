import * as usuarioModel from "../models/usuariosModel.js";
import crypto from "crypto";

export async function listar(req, res) {
    const usuarios = await usuarioModel.listarUsuarios();
    res.json(usuarios);
}

export async function buscarPorId(req, res) {
    const usuarios = await usuarioModel.buscarUsuarios(req.params.id);
    res.json(usuarios);

    if(!ususario){
        return res.status(404).json({ error: "Usuário não encontrado" });
    }
        res.json(usuarios);
}

export async function criar(req, res) {
    const { nome, email, senha } = req.body;


    if(!nome || !email || !senha){
        return res.status(400).json({ error: "Nome, email e senha são obrigatórios" });
    }

    const senha_hash = crypto.createHash("sha256").update(senha).digest("hex");
    const id = await usuarioModel.criarUsuario({nome, email, senha_hash});
    
    res.status(201).json({ id, nome, email });
}

export async function login(req, res) {
    const { email, senha } = req.body;  
    if(!email || !senha){
        return res.status(400).json({ error: "Email e senha são obrigatórios" });
    }

    const usuario = await usuarioModel.buscarUsuarioPorEmail(email);
    const senha_hash = crypto.createHash("sha256").update(senha).digest("hex");
    if(!usuario ){
        return res.status(400).json({ error: "Credenciais inválidas" });}

    if (senha_hash !== usuario.senha_hash){
        return res.status(400).json({ error: "Credenciais inválidas" });
    }

    const token = crypto.randomBytes(24).toString("hex");

    return res.status(200).json({ msg: "Login realizado com sucesso", token,
        usuario: {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email
        }
     });

    }
