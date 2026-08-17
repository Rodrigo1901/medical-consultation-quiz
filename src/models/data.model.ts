export interface DadosUsuario {
    nome: string;
    email: string;
    dataNascimento: string;
    aceitoTermos?: boolean;
}

export interface Perfil {
    tipo: "paciente" | "familiar";
}

export interface Atividade {
    nomeAtividade: string;
}

export interface RespostaTermometro {
    comoEstaSeSentindo: number;
    nivelDeDor: number;
    qualidadeDeVida: number;
    nivelDeTensao: number;
    nivelConfortoCrenca: number;
    nivelFelicidade: number;
    comoFoiSuaAtividade: string;
}