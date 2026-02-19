import React, { useEffect, useState, useCallback } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  ImageBackground,
  Pressable,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Logo from "../../assets/logo.png";
import background from "../../assets/start-background.png";
import { LinearGradient } from "expo-linear-gradient";
import { DadosUsuario } from "../../models/data.model";
import { saveJSON, loadJSON } from "../../utils/storage";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const STORAGE_KEY = "form:dadosUsuario";

export default function Start() {
  const navigation = useNavigation<any>();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dataNascimento, setDateText] = useState("");

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
    };
    try {
      await saveJSON<DadosUsuario>(STORAGE_KEY, dados);
    } catch (e) {
      console.error("Não foi possível salvar os dados:", e);
    }
    navigation.navigate("WhoAreYou");
  }, [nome, email, dataNascimento]);

  const loadDados = useCallback(async () => {
    try {
      const stored = await loadJSON<DadosUsuario>(STORAGE_KEY);
      if (stored) {
        setNome(stored.nome || "");
        setEmail(stored.email || "");
        setDateText(stored.dataNascimento || "");
      }
    } catch (e) {
      console.error("Não foi possível carregar os dados:", e);
    }
  }, []);

  const isFormValid = dataNascimento.trim().length > 0;

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
      </ImageBackground>
    </View>
  );
}
