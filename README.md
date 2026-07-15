# Maia 🚀

Aplicativo híbrido em Expo/React Native para coleta de dados de um questionário de acompanhamento de atividades integrativas e bem-estar.

## Visão geral 🌟

O app guia o usuário por um fluxo de introdução, coleta de dados pessoais, seleção de perfil e atividade, e um termômetro de sentimento com envio dos resultados para uma planilha do Google Sheets via Apps Script.

### Objetivo 🎯

Permitir que pacientes e familiares registrem rapidamente como se sentiram durante uma atividade de reiki, aromaterapia, meditação ou yoga e compartilhem a experiência para análise posterior.

## Tecnologias 🧰

- Expo `~54.0.35`
- React Native `0.81.5`
- React `19.1.0`
- TypeScript `~5.9.2`
- React Navigation
- AsyncStorage para persistência local
- Axios para comunicação HTTP
- Google Sheets via Apps Script
- Expo Linear Gradient
- DateTimePicker e Slider do React Native Community

## Como rodar ▶️

1. Instale as dependências:

```bash
npm install
```

2. Inicie o Expo:

```bash
npm start
```

3. Execute em Android, iOS ou web:

```bash
npm run android
npm run ios
npm run web
```

> Use um dispositivo físico ou emulador compatível para testar as telas nativas.

## Estrutura do projeto 🗂️

- `App.tsx` - rota principal e configuração de navegação
- `package.json` - dependências e scripts
- `src/pages/` - telas do aplicativo
- `src/utils/storage.ts` - funções de persistência local em AsyncStorage
- `src/utils/googleSheets.ts` - envio de dados para Google Sheets
- `src/models/data.model.ts` - tipos de dados usados pelo app
- `assets/` - imagens, ícones e recursos visuais

## Fluxo do aplicativo 🧭

1. `Intro` - tela de boas-vindas
2. `Start` - coleta de nome, e-mail e data de nascimento
3. `WhoAreYou` - seleção de perfil (`paciente` ou `familiar`)
4. `Activity` - escolha da atividade realizada
5. `ThermometerFirstPage` - avaliação de sentimento e nível de dor
6. `ThermometerSecondPage` - avaliação de qualidade de vida, tensão, conforto em crenças e felicidade
7. `ThermometerThirdPage` - relato livre sobre a experiência
8. `Ending` - confirmação de envio e retorno ao início

## Persistência de dados 💾

O app usa `src/utils/storage.ts` para salvar e carregar dados em AsyncStorage com as seguintes chaves:

- `form:dadosUsuario`
- `form:perfilUsuario`
- `form:activity`
- `form:respostasTermometro`

Esses dados são usados para manter o progresso do usuário e pré-carregar informações se ele retornar ao fluxo.

## Integração com Google Sheets 📊

A função `salvarDadosNoSheet()` em `src/utils/googleSheets.ts` reúne valores salvos localmente e envia um payload para um endpoint do Apps Script:

- `https://script.google.com/macros/s/AKfycbx86N5jJCYjVJfu_gsvg3S77FqMAMUajX2M7Z-tExus5q_BhbGEgr7mS-DKnEr-q6e9/exec`
- Script de leitura: https://script.google.com/d/1fzfYPVKY-iwwWqjDwFTN4Fa9gccijtYoGmnhOEO7dTBZZLAG8gIqLi3d/edit?usp=drive_link
- Planilha de leitura: https://docs.google.com/spreadsheets/d/1CuHiykb07ukNxypOKV5v_pJh0mcOWiVnBggNkE15S_8/edit?usp=drive_link

O payload inclui:

- nome
- email
- data de nascimento
- tipo de perfil
- atividade
- respostas do termômetro
- timestamp

## Observações ⚠️

- A data de nascimento é obrigatória no formulário inicial.
- O envio dos dados ocorre na última etapa do termômetro. Após o envio, o storage local é limpo.
- A navegação usa `createNativeStackNavigator` com cabeçalho oculto.

## Documentação adicional 📚

- `docs/architecture.md` - arquitetura e fluxo de dados
- `docs/feature-flow.md` - descrição das telas e caminho do usuário
- `docs/data-models.md` - tipos de dados e chaves de storage

## Contribuindo 🤝

Se for estender o app, use o mesmo padrão de telas em `src/pages` e centralize estados de persistência em `src/utils/storage.ts`.
