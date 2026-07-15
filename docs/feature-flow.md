# Fluxo de funcionalidades 🧭

## 1. Intro 🚀

Tela inicial de boas-vindas com botão para iniciar o fluxo.

## 2. Start 📝

- Coleta nome (opcional)
- Coleta e-mail (opcional)
- Coleta data de nascimento (obrigatório)
- Salva em `form:dadosUsuario`
- Navega para `WhoAreYou`

## 3. WhoAreYou 👤

- Seleção de perfil: `paciente` ou `familiar`
- Salva em `form:perfilUsuario`
- Navega para `Activity`

## 4. Activity 🏃

- Seleção da atividade realizada:
  - reiki
  - aromaterapia
  - meditação
  - yoga
- Salva em `form:activity`
- Navega para `ThermometerFirstPage`

## 5. ThermometerFirstPage 🌡️

- Pergunta "Como está se sentindo?" com faces selecionáveis
- Pergunta "Nível de dor" com slider
- Salva respostas parciais em `form:respostasTermometro`
- Avança para `ThermometerSecondPage`

## 6. ThermometerSecondPage 🌈

- Quatro avaliações em escala usando componente `Rate`
  - qualidade de vida
  - nível de tensão
  - conforto em crenças
  - felicidade
- Salva respostas parciais em `form:respostasTermometro`
- Avança para `ThermometerThirdPage`

## 7. ThermometerThirdPage 💬

- Exibe atividade selecionada
- Permite descrever como foi a atividade
- Salva o texto em `form:respostasTermometro`
- Envia tudo ao Google Sheets
- Remove dados locais após envio
- Navega para `Ending`

## 8. Ending ✅

- Mostra mensagem de agradecimento
- Botão para reiniciar o app em `Intro`

## Observações do fluxo ⚠️

- Cada etapa valida os dados antes de prosseguir.
- O usuário pode voltar usando `navigation.goBack()` em telas intermediárias.
- O armazenamento local permite continuidade caso o app seja fechado antes do envio final.
