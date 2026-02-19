import axios from 'axios';

const SPREADSHEET_ID = 'seu-id-da-planilha';
const API_KEY = 'sua-chave-api-google';

export async function salvarDadosNoSheet(dados: any[]) {
  try {
    const values = [
      ['Nome', 'Email', 'Data'], // Headers
      ...dados.map(d => [d.nome, d.email, new Date().toLocaleDateString()])
    ];

    const response = await axios.put(
      `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Sheet1?valueInputOption=RAW&key=${API_KEY}`,
      {
        values: values
      }
    );

    console.log('Dados salvos com sucesso!', response.data);
  } catch (error) {
    console.error('Erro ao salvar dados:', error);
  }
}