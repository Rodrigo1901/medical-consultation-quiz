import React, { useEffect, useState, useCallback } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  ImageBackground,
  Pressable,
  ScrollView,
  Modal,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Logo from "../../assets/logo.png";
import background from "../../assets/start-background.png";
import { LinearGradient } from "expo-linear-gradient";
import { DadosUsuario } from "../../models/data.model";
import { saveJSON, loadJSON, STORAGE_KEYS } from "../../utils/storage";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import type { NavigationProp } from "../../navigation/types";

const STORAGE_KEY = STORAGE_KEYS.DADOS_USUARIO;

export default function Start() {
  const navigation = useNavigation<NavigationProp<"Start">>();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dataNascimento, setDateText] = useState("");
  const [aceitoTermos, setAceitoTermos] = useState(false);
  const [showBottomSheet, setShowBottomSheet] = useState(false);

  useEffect(() => {
    loadDados();
  }, []);

  const handleDateChange = useCallback((event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
      const formattedDate = selectedDate.toLocaleDateString("pt-BR");
      setDateText(formattedDate);
    }
  }, []);

  const salvar = useCallback(async () => {
    const dados: DadosUsuario = {
      nome: nome.trim(),
      email: email.trim(),
      dataNascimento,
      aceitoTermos,
    };
    try {
      await saveJSON<DadosUsuario>(STORAGE_KEY, dados);
    } catch (e) {
      console.error("Não foi possível salvar os dados:", e);
    }
    navigation.navigate("WhoAreYou");
  }, [nome, email, dataNascimento, aceitoTermos]);

  const loadDados = useCallback(async () => {
    try {
      const stored = await loadJSON<DadosUsuario>(STORAGE_KEY);
      if (stored) {
        setNome(stored.nome || "");
        setEmail(stored.email || "");
        setDateText(stored.dataNascimento || "");
        setAceitoTermos(stored.aceitoTermos || false);
      }
    } catch (e) {
      console.error("Não foi possível carregar os dados:", e);
    }
  }, []);

  const isFormValid = dataNascimento.trim().length > 0 && aceitoTermos;

  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.image}>
        <View style={styles.boxTop}>
          <Image style={styles.logo} source={Logo} />
        </View>

        <View style={styles.boxMid}>
          <Text style={styles.text}>Nome(não obrigatório)</Text>
          <TextInput
            style={styles.textInput}
            value={nome}
            onChangeText={setNome}
            placeholder="Digite seu nome"
            accessibilityLabel="nome"
          />
          <Text style={styles.text}>E-mail(não obrigatório)</Text>
          <TextInput
            style={styles.textInput}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="exemplo@dominio.com"
            accessibilityLabel="email"
          />
          <Text style={styles.text}>Data de nascimento (obrigatório)</Text>
          <Pressable
            style={styles.datePressable}
            onPress={() => setShowDatePicker(true)}
            accessibilityRole="button"
          >
            <TextInput
              style={styles.dateInput}
              value={dataNascimento}
              editable={false}
              placeholder="Selecione a data"
              accessibilityLabel="data de nascimento"
            />
          </Pressable>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="spinner"
              onChange={handleDateChange}
              maximumDate={new Date()}
            />
          )}
          <View style={styles.checkboxContainer}>
            <Pressable
              style={[styles.checkbox, aceitoTermos && styles.checkboxChecked]}
              onPress={() => setAceitoTermos(!aceitoTermos)}
              accessibilityRole="checkbox"
              accessibilityState={{ checked: aceitoTermos }}
            >
              {aceitoTermos && <Text style={styles.checkboxMark}>✓</Text>}
            </Pressable>
            <Text style={styles.consentText}>
              Li e concordo com os{" "}
              <Text style={styles.link} onPress={() => setShowBottomSheet(true)}>
                Termos de Serviço e a Política de Privacidade
              </Text>
            </Text>
          </View>
        </View>
        <View style={styles.boxBottom}>
          <Pressable
            style={[
              styles.gradientButton,
              !isFormValid && styles.disabledButton,
            ]}
            onPress={salvar}
            disabled={!isFormValid}
            accessibilityState={{ disabled: !isFormValid }}
          >
            <LinearGradient
              colors={["#5B5FFF", "#FF69B4"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientInner}
            >
              <Text style={styles.buttonText}>Entrar</Text>
            </LinearGradient>
          </Pressable>
        </View>
        <Modal
          visible={showBottomSheet}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setShowBottomSheet(false)}
        >
          <View style={styles.bottomSheetContainer}>
            <View style={styles.bottomSheetHeader}>
              <Pressable
                onPress={() => setShowBottomSheet(false)}
                accessibilityRole="button"
              >
                <Text style={styles.closeButton}>Fechar</Text>
              </Pressable>
            </View>
            <ScrollView style={styles.bottomSheetContent}>
              <Text style={styles.bottomSheetTitle}>MAIA — Termo de Consentimento e Política de Privacidade</Text>
              <Text style={styles.bottomSheetSubtitle}>Leia atentamente antes de iniciar sua participação.</Text>
              
              <Text style={styles.bottomSheetText}>
O <Text style={styles.bold}>MAIA</Text> é um aplicativo desenvolvido no contexto de um projeto de <Text style={styles.bold}>Iniciação Científica</Text>, desenvolvido pela estudante <Text style={styles.bold}>Larissa Petreca Bertulessi</Text>, sob orientação do <Text style={styles.bold}>Prof. Dr. Ricardo Monezi</Text>, com a finalidade de avaliar a experiência dos usuários com as <Text style={styles.bold}>Práticas Integrativas e Complementares em Saúde (PICS)</Text> realizadas no <Text style={styles.bold}>A.C. Camargo Cancer Center</Text>, especialmente em relação à percepção de redução da dor após a realização dessas práticas.{"\n\n"}
              </Text>

              <Text style={styles.sectionTitle}>1. Quais informações serão coletadas?</Text>
              <Text style={styles.bottomSheetText}>
Para utilização do aplicativo, poderão ser solicitados:{"\n\n"}
• nome{"\n"}
• endereço de e-mail{"\n"}
• data de nascimento{"\n"}
• prática integrativa realizada{"\n"}
• avaliação da intensidade/percepção da dor antes e/ou após a prática, conforme o questionário apresentado{"\n"}
• nota atribuída à experiência com a prática{"\n"}
• comentários ou observações fornecidos voluntariamente pelo usuário.{"\n\n"}
As informações relacionadas à dor, à realização de práticas de saúde e à experiência do usuário podem constituir <Text style={styles.bold}>dados pessoais relacionados à saúde</Text>, considerados dados pessoais sensíveis pela Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais (LGPD).{"\n\n"}
              </Text>

              <Text style={styles.sectionTitle}>2. Qual é a finalidade da coleta?</Text>
              <Text style={styles.bottomSheetText}>
Os dados serão utilizados para avaliar a experiência dos usuários com as PICS e sua percepção quanto à redução da dor após essas práticas.{"\n\n"}
No contexto do projeto de Iniciação Científica, os dados poderão também ser utilizados para <Text style={styles.bold}>análises acadêmicas e científicas</Text>, incluindo elaboração de relatórios, trabalhos acadêmicos, apresentações em eventos científicos e publicações científicas, sempre observando as condições aprovadas pelo Comitê de Ética em Pesquisa e as finalidades informadas aos participantes.{"\n\n"}
Os dados não deverão ser utilizados para finalidades incompatíveis com aquelas apresentadas neste documento.{"\n\n"}
              </Text>

              <Text style={styles.sectionTitle}>3. Como os dados serão protegidos?</Text>
              <Text style={styles.bottomSheetText}>
As informações fornecidas pelo usuário serão tratadas de maneira confidencial e deverão ser protegidas por medidas técnicas e organizacionais adequadas para evitar acesso, uso, alteração, divulgação ou destruição não autorizados.{"\n\n"}
Sempre que possível, os dados utilizados para análises científicas serão <Text style={styles.bold}>anonimizados ou apresentados de forma agregada</Text>, de modo que os resultados divulgados não permitam a identificação individual dos participantes.{"\n\n"}
O nome e o e-mail serão utilizados apenas quando necessários para as finalidades previstas no projeto e não serão divulgados em trabalhos, apresentações ou publicações científicas de forma que permita a identificação do participante.{"\n\n"}
              </Text>

              <Text style={styles.sectionTitle}>4. Os comentários são obrigatórios?</Text>
              <Text style={styles.bottomSheetText}>
Não.{"\n\n"}
O participante poderá fornecer comentários voluntariamente. Recomenda-se que o usuário <Text style={styles.bold}>não inclua nos comentários informações que identifiquem outras pessoas</Text>, como nomes, números de prontuário, telefones ou outras informações pessoais de terceiros.{"\n\n"}
              </Text>

              <Text style={styles.sectionTitle}>5. A participação é obrigatória?</Text>
              <Text style={styles.bottomSheetText}>
Não.{"\n\n"}
A participação é <Text style={styles.bold}>voluntária</Text>, e o participante poderá optar por não participar ou interromper sua participação, de acordo com as condições estabelecidas no projeto de pesquisa e no respectivo Termo de Consentimento Livre e Esclarecido.{"\n\n"}
A decisão de participar ou não participar da pesquisa não deverá prejudicar o atendimento, tratamento ou relação do participante com o A.C. Camargo Cancer Center.{"\n\n"}
              </Text>

              <Text style={styles.sectionTitle}>6. Existem riscos?</Text>
              <Text style={styles.bottomSheetText}>
A participação envolve principalmente o fornecimento de informações sobre a experiência do usuário com as PICS e sua percepção de dor.{"\n\n"}
Existe o risco relacionado à <Text style={styles.bold}>privacidade e confidencialidade das informações fornecidas</Text>, especialmente por envolver informações relacionadas à saúde. Serão adotadas medidas para minimizar esse risco.{"\n\n"}
O participante não deverá fornecer, no campo de comentários, informações pessoais desnecessárias ou informações sobre terceiros.{"\n\n"}
              </Text>

              <Text style={styles.sectionTitle}>7. Existem benefícios?</Text>
              <Text style={styles.bottomSheetText}>
A participação pode não proporcionar benefício direto ao participante.{"\n\n"}
Entretanto, as informações obtidas poderão contribuir para a avaliação da experiência dos usuários e para o aprimoramento do conhecimento científico relacionado às Práticas Integrativas e Complementares em Saúde e ao manejo da dor.{"\n\n"}
              </Text>

              <Text style={styles.sectionTitle}>8. Uso dos dados para pesquisa científica</Text>
              <Text style={styles.bottomSheetText}>
Os dados coletados pelo MAIA poderão integrar as análises previstas no projeto de Iniciação Científica, respeitando o protocolo de pesquisa aprovado pelo Comitê de Ética em Pesquisa, quando aplicável.{"\n\n"}
Os dados obtidos em uma pesquisa envolvendo seres humanos devem ser utilizados de acordo com as finalidades previstas no protocolo e no consentimento do participante.{"\n\n"}
              </Text>

              <Text style={styles.sectionTitle}>9. Seus direitos</Text>
              <Text style={styles.bottomSheetText}>
Nos termos da legislação aplicável, incluindo a LGPD, o participante possui direitos relacionados ao tratamento de seus dados pessoais, observadas as hipóteses legais e as características específicas da pesquisa científica.{"\n\n"}
Para questões relacionadas à utilização dos dados ou ao projeto de pesquisa, o participante poderá entrar em contato com os responsáveis indicados neste documento.{"\n\n"}
              </Text>

              <Text style={styles.sectionTitle}>10. Responsáveis pelo desenvolvimento do projeto</Text>
              <Text style={styles.bottomSheetText}>
<Text style={styles.bold}>Pesquisadora/estudante:</Text>{"\n"}
Larissa Petreca Bertulessi{"\n\n"}
<Text style={styles.bold}>Orientador:</Text>{"\n"}
Prof. Dr. Ricardo Monezi{"\n\n"}
<Text style={styles.bold}>Instituição de realização:</Text>{"\n"}
A.C. Camargo Cancer Center{"\n\n"}
<Text style={styles.bold}>Projeto:</Text>{"\n"}
Avaliação da experiência dos usuários com Práticas Integrativas e Complementares em Saúde (PICS) e percepção de redução da dor por meio do aplicativo MAIA.{"\n\n"}
              </Text>

              <Text style={styles.sectionTitle}>11. Declaração de consentimento</Text>
              <Text style={styles.bottomSheetText}>
Ao selecionar <Text style={styles.bold}>"Li e concordo"</Text>, declaro que:{"\n\n"}
• li e compreendi as informações apresentadas{"\n"}
• fui informado(a) sobre quais informações serão coletadas{"\n"}
• compreendi a finalidade da coleta e utilização dos meus dados{"\n"}
• estou ciente de que algumas informações fornecidas podem constituir dados pessoais sensíveis relacionados à saúde{"\n"}
• fui informado(a) de que minha participação é voluntária{"\n"}
• estou ciente de que posso interromper minha participação conforme as condições previstas no projeto de pesquisa{"\n"}
• concordo com a utilização das informações fornecidas para as finalidades descritas neste documento{"\n"}
• tive a oportunidade de esclarecer minhas dúvidas antes de iniciar minha participação.{"\n\n"}
              </Text>
            </ScrollView>
          </View>
        </Modal>
      </ImageBackground>
    </View>
  );
}
