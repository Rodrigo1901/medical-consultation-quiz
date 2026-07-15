# Arquitetura do projeto 🏗️

## Visão geral 🌟

O app é construído com Expo e React Native usando TypeScript. A estrutura central é um stack de navegação de telas, armazenamento local com AsyncStorage e integração com Google Sheets via Apps Script.

## Navegação 🧭

A navegação principal fica em `App.tsx`:

- `Intro`
- `Start`
- `WhoAreYou`
- `Activity`
- `ThermometerFirstPage`
- `ThermometerSecondPage`
- `ThermometerThirdPage`
- `Ending`

As telas usam `navigation.navigate()` para avançar e `navigation.goBack()` para retornar quando necessário.

## Persistência de dados 💾

`src/utils/storage.ts` exporta:

- `saveJSON<T>(key, value)`
- `loadJSON<T>(key)`
- `loadAllKeys(prefix)`
- `removeJSON(key)`
- `removeAllWithPrefix(prefix)`

As chaves usadas são definidas em `STORAGE_KEYS`:

- `DADOS_USUARIO`
- `PERFIL_USUARIO`
- `ATIVIDADE`
- `RESPOSTAS_TERMOMETRO`

Esses dados permitem:

- salvar progresso parcial do questionário
- recuperar respostas anteriores se o usuário voltar
- manter consistência entre telas

## Integração com Google Sheets 📊

A função `salvarDadosNoSheet()` em `src/utils/googleSheets.ts` carrega os dados salvos localmente e envia para o endpoint do Apps Script usando `axios.post()`.

O payload contém dados do usuário, perfil, atividade, respostas do termômetro e um timestamp ISO.

Após o envio bem-sucedido, o app limpa o storage local para iniciar um novo registro.

## Componentes e modelos 🧩

- `src/models/data.model.ts` contém os tipos de dados usados para o payload e a persistência.
- `src/components/Rate/index.tsx` é um componente reutilizável para avaliações em escala.

## Assets 🎨

O projeto usa imagens para fundo, ícones, faces do termômetro e botões. Os recursos estão em `assets/` e são importados diretamente nas telas.
