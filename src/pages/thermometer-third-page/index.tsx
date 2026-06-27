import React, { useCallback, useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  Pressable,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import background from "../../assets/background.png";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { Atividade, RespostaTermometro } from "../../models/data.model";
import { saveJSON, loadJSON, removeAllWithPrefix, STORAGE_KEYS } from "../../utils/storage";
import { salvarDadosNoSheet } from "../../utils/googleSheets";

const STORAGE_KEY = STORAGE_KEYS.RESPOSTAS_TERMOMETRO;
const STORAGE_KEY_ATIVIDADE = STORAGE_KEYS.ATIVIDADE;
const STORAGE_KEY_WHO_ARE_YOU = STORAGE_KEYS.PERFIL_USUARIO;

export default function ThermometerThirdPage() {
  const navigation = useNavigation<any>();
  const [activity, setActivity] = useState<string>("");
  const [howWasYourActivicty, setHowWasYourActivicty] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadDados();
  }, []);

  const handleTextChange = useCallback(async (text: string) => {
    setHowWasYourActivicty(text);
    try {
      const existing = await loadJSON<RespostaTermometro>(STORAGE_KEY);
      await saveJSON<Partial<RespostaTermometro>>(STORAGE_KEY, {
        ...existing,
        comoFoiSuaAtividade: text,
      });
    } catch (e) {
      console.error("Não foi possível salvar o texto:", e);
    }
  }, []);

  const sendAnswers = useCallback(async () => {
    setIsLoading(true);
    try {
      const existing = await loadJSON<RespostaTermometro>(STORAGE_KEY);
      const dados: Partial<RespostaTermometro> = {
        ...existing,
        comoFoiSuaAtividade: howWasYourActivicty || "",
      };
      await saveJSON<Partial<RespostaTermometro>>(STORAGE_KEY, dados);

      await salvarDadosNoSheet();

      await removeAllWithPrefix();

      navigation.navigate("Ending");
    } catch (e) {
      console.error("Não foi possível salvar as respostas:", e);
    } finally {
      setIsLoading(false);
    }
  }, [howWasYourActivicty]);

  const loadDados = useCallback(async () => {
    try {
      const stored = await loadJSON<Atividade>(STORAGE_KEY_ATIVIDADE);
      if (stored) {
        setActivity(stored.nomeAtividade || "");
      }

      const termometroStored = await loadJSON<RespostaTermometro>(STORAGE_KEY);
      if (termometroStored) {
        setHowWasYourActivicty(termometroStored.comoFoiSuaAtividade || "");
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
          <Text style={styles.progressLabel}>Resposta 3/3</Text>
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
              value={howWasYourActivicty}
              onChangeText={handleTextChange}
              multiline
              numberOfLines={10}
              maxLength={1000}
              textAlignVertical="top"
            />
          </View>
        </View>

        <View style={styles.boxBottom}>
          <Pressable
            style={styles.gradientButton}
            onPress={sendAnswers}
            disabled={isLoading}
            accessibilityState={{ disabled: isLoading }}
          >
            <LinearGradient
              colors={["#5B5FFF", "#FF69B4"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientInner}
            >
              {isLoading ? (
                <ActivityIndicator size="small" color="#ffffff" />
              ) : (
                <Text style={styles.buttonText}>Enviar respostas</Text>
              )}
            </LinearGradient>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}
