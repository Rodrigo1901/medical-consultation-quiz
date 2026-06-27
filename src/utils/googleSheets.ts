import axios from "axios";
import {
  Atividade,
  DadosUsuario,
  Perfil,
  RespostaTermometro,
} from "../models/data.model";
import { loadJSON, STORAGE_KEYS } from "./storage";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx86N5jJCYjVJfu_gsvg3S77FqMAMUajX2M7Z-tExus5q_BhbGEgr7mS-DKnEr-q6e9/exec";

const loadDadosUsuario = async (): Promise<DadosUsuario | null> => {
  try {
    return await loadJSON<DadosUsuario>(STORAGE_KEYS.DADOS_USUARIO);
  } catch (e) {
    console.error("Não foi possível carregar dados do usuário:", e);
    return null;
  }
};

const loadPerfil = async (): Promise<Perfil | null> => {
  try {
    return await loadJSON<Perfil>(STORAGE_KEYS.PERFIL_USUARIO);
  } catch (e) {
    console.error("Não foi possível carregar o perfil:", e);
    return null;
  }
};

const loadAtividade = async (): Promise<Atividade | null> => {
  try {
    return await loadJSON<Atividade>(STORAGE_KEYS.ATIVIDADE);
  } catch (e) {
    console.error("Não foi possível carregar a atividade:", e);
    return null;
  }
};

const loadRespostasTermometro = async (): Promise<RespostaTermometro | null> => {
  try {
    return await loadJSON<RespostaTermometro>(STORAGE_KEYS.RESPOSTAS_TERMOMETRO);
  } catch (e) {
    console.error("Não foi possível carregar as respostas:", e);
    return null;
  }
};

export async function salvarDadosNoSheet() {
  const [dadosUsuario, perfil, atividade, respostasTermometro] =
    await Promise.all([
      loadDadosUsuario(),
      loadPerfil(),
      loadAtividade(),
      loadRespostasTermometro(),
    ]);

  const payload = {
    nome: dadosUsuario?.nome ?? "",
    email: dadosUsuario?.email ?? "",
    dataNascimento: dadosUsuario?.dataNascimento ?? "",
    tipoPerfil: perfil?.tipo ?? "",
    atividade: atividade?.nomeAtividade ?? "",
    comoEstaSeSentindo: respostasTermometro?.comoEstaSeSentindo ?? "",
    qualidadeDeVida: respostasTermometro?.qualidadeDeVida ?? "",
    nivelDeDor: respostasTermometro?.nivelDeDor ?? "",
    nivelDeTensao: respostasTermometro?.nivelDeTensao ?? "",
    nivelConfortoCrenca: respostasTermometro?.nivelConfortoCrenca ?? "",
    nivelFelicidade: respostasTermometro?.nivelFelicidade ?? "",
    comoFoiSuaAtividade: respostasTermometro?.comoFoiSuaAtividade ?? "",
    timestamp: new Date().toISOString(),
  };

  try {
    const response = await axios.post(APPS_SCRIPT_URL, payload, {
      headers: { "Content-Type": "application/json" },
    });
    console.log("Dados enviados para Apps Script:", response.data);
  } catch (error) {
    console.error("Erro ao enviar dados para Apps Script:", error);
  }
}
