# Modelos de dados 🧠

Os tipos de dados usados no projeto estão definidos em `src/models/data.model.ts`.

## Dados do usuário 👥

```ts
export interface DadosUsuario {
  nome: string;
  email: string;
  dataNascimento: string;
}
```

## Perfil 🧑‍🤝‍🧑

```ts
export interface Perfil {
  tipo: "paciente" | "familiar";
}
```

## Atividade 🏷️

```ts
export interface Atividade {
  nomeAtividade: string;
}
```

## Resposta do termômetro 🌡️

```ts
export interface RespostaTermometro {
  comoEstaSeSentindo: number;
  nivelDeDor: number;
  qualidadeDeVida: number;
  nivelDeTensao: number;
  nivelConfortoCrenca: number;
  nivelFelicidade: number;
  comoFoiSuaAtividade: string;
}
```

## Chaves de armazenamento 🔑

As chaves usadas em `src/utils/storage.ts` são:

- `form:dadosUsuario`
- `form:perfilUsuario`
- `form:activity`
- `form:respostasTermometro`

Cada tipo é salvo como JSON para que o app recupere o estado entre telas e sessões.
