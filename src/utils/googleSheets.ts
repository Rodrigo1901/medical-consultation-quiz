import axios from "axios";
import {
  Atividade,
  DadosUsuario,
  Perfil,
  RespostaTermometro,
} from "../models/data.model";
import { loadJSON } from "./storage";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx86N5jJCYjVJfu_gsvg3S77FqMAMUajX2M7Z-tExus5q_BhbGEgr7mS-DKnEr-q6e9/exec";

const dadosUsuarioKey = "form:dadosUsuario";
const perfilKey = "form:perfilUsuario";
const atividadeKey = "form:activity";
const respostasTermometroKey = "form:respostasTermometro";

let dadosUsuario: DadosUsuario;
let perfil: Perfil;
let atividade: Atividade;
let respostasTermometro: RespostaTermometro;

const loadDadosUsuario = async () => {
  try {
    const stored = await loadJSON<DadosUsuario>(dadosUsuarioKey);
    if (stored) {
      dadosUsuario = stored;
    }
  } catch (e) {}
};

const loadPerfil = async () => {
  try {
    const stored = await loadJSON<Perfil>(perfilKey);
    if (stored) {
      perfil = stored;
    }
  } catch (e) {}
};

const loadAtividade = async () => {
  try {
    const stored = await loadJSON<Atividade>(atividadeKey);
    if (stored) {
      atividade = stored;
    }
  } catch (e) {}
};

const loadRespostasTermometro = async () => {
  try {
    const stored = await loadJSON<RespostaTermometro>(respostasTermometroKey);
    if (stored) {
      respostasTermometro = stored;
    }
  } catch (e) {
    console.error("Não foi possível carregar as respostas:", e);
  }
};

export async function salvarDadosNoSheet() {
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
