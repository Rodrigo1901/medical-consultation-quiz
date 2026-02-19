export interface DadosUsuario {
    nome: string;
    email: string;
    dataNascimento: string;
}

export interface Perfil {
    tipo: "paciente" | "familiar";
}

export interface Atividade {
    nomeAtividade: string;
}