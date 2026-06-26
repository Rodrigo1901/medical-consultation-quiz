import React, { useCallback, useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  Pressable,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import background from "../../assets/background.png";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { Atividade, RespostaTermometro } from "../../models/data.model";
import { saveJSON, loadJSON } from "../../utils/storage";
import { salvarDadosNoSheet } from "../../utils/googleSheets";

const STORAGE_KEY = "form:respostasTermometro";
const STORAGE_KEY_ATIVIDADE = "form:activity";

export default function ThermometerThirdPage() {
  const navigation = useNavigation<any>();
  const [activity, setActivity] = useState<string>();
  const [howWasYourActivicty, setHowWasYourActivicty] = useState<string>();

  useEffect(() => {
    loadDados();
  }, []);

  const sendAnswers = useCallback(async () => {
    try {
      const existing = await loadJSON<RespostaTermometro>(STORAGE_KEY);
      const dados: Partial<RespostaTermometro> = {
        ...existing,
        comoFoiSuaAtividade: howWasYourActivicty || "",
      };
      await saveJSON<Partial<RespostaTermometro>>(STORAGE_KEY, dados);
    } catch (e) {
      console.error("Não foi possível salvar as respostas:", e);
    }
    await salvarDadosNoSheet();
    navigation.navigate("Intro");
  }, [howWasYourActivicty]);

  const loadDados = useCallback(async () => {
    try {
      const stored = await loadJSON<Atividade>(STORAGE_KEY_ATIVIDADE);
      if (stored) {
        setActivity(stored.nomeAtividade || "");
      }
    } catch (e) {
      console.error("Não foi possível carregar as respostas:", e);
    }
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.image}>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <Image source={require("../../assets/icons/back.png")} />
          </Pressable>
        </View>

        <View style={styles.boxMid}>
          <Text style={styles.progressLabel}>Resposta 2/3</Text>
          <View style={styles.progressOuter}>
            <View style={styles.progressInner} />
          </View>
          <Text style={styles.title}>Compartilhe sua experiência</Text>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              Como foi a atividade de {activity}?
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Escreva aqui..."
              placeholderTextColor="#f9aedc96"
              onChangeText={setHowWasYourActivicty}
              multiline
              numberOfLines={10}
              maxLength={1000}
              textAlignVertical="top"
            />
          </View>
        </View>

        <View style={styles.boxBottom}>
          <Pressable style={styles.gradientButton} onPress={sendAnswers}>
            <LinearGradient
              colors={["#5B5FFF", "#FF69B4"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientInner}
            >
              <Text style={styles.buttonText}>Enviar respostas</Text>
            </LinearGradient>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}
