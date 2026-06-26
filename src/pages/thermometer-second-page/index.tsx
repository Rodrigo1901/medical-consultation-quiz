import React, { useCallback, useEffect, useState } from "react";
import { Text, View, Image, ImageBackground, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import background from "../../assets/background.png";
import styles from "./styles";
import { Rate } from "../../components/Rate";
import { LinearGradient } from "expo-linear-gradient";
import { RespostaTermometro } from "../../models/data.model";
import { saveJSON, loadJSON } from "../../utils/storage";

const STORAGE_KEY = "form:respostasTermometro";

export default function ThermometerSecondPage() {
  const navigation = useNavigation<any>();
  const [ratingLifeQuality, setRatingLifeQuality] = useState<number>();
  const [ratingTension, setRatingTension] = useState<number>();
  const [ratingBeliefConfort, setRatingBeliefConfort] = useState<number>();
  const [ratingHappiness, setRatingHappiness] = useState<number>();

  useEffect(() => {
    loadDados();
  }, []);

  const salvar = useCallback(async () => {
    try {
      const existing = await loadJSON<RespostaTermometro>(STORAGE_KEY);
      const dados: Partial<RespostaTermometro> = {
        ...existing,
        qualidadeDeVida: ratingLifeQuality || 0,
        nivelDeTensao: ratingTension || 0,
        nivelConfortoCrenca: ratingBeliefConfort || 0,
        nivelFelicidade: ratingHappiness || 0,
      };
      await saveJSON<Partial<RespostaTermometro>>(STORAGE_KEY, dados);
    } catch (e) {
      console.error("Não foi possível salvar as respostas:", e);
    }
    navigation.navigate("ThermometerThirdPage");
  }, [ratingLifeQuality, ratingTension, ratingBeliefConfort, ratingHappiness]);

  const loadDados = useCallback(async () => {
    try {
      const stored = await loadJSON<RespostaTermometro>(STORAGE_KEY);
      if (stored) {
        setRatingLifeQuality(stored.qualidadeDeVida || 0);
        setRatingTension(stored.nivelDeTensao || 0);
        setRatingBeliefConfort(stored.nivelConfortoCrenca || 0);
        setRatingHappiness(stored.nivelFelicidade || 0);
      }
    } catch (e) {
      console.error("Não foi possível carregar as respostas:", e);
    }
  }, []);

  const isFormValid =
    ratingLifeQuality !== undefined &&
    ratingLifeQuality > 0 &&
    ratingTension !== undefined &&
    ratingTension > 0 &&
    ratingBeliefConfort !== undefined &&
    ratingBeliefConfort > 0 &&
    ratingHappiness !== undefined &&
    ratingHappiness > 0;

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

          <Rate
            style={{ marginBottom: 5 }}
            title="Como esta se sentindo?"
            firstLabel="Péssima"
            lastLabel="Ótima"
            onChange={setRatingLifeQuality}
          ></Rate>
          <Rate
            style={{ marginBottom: 5 }}
            title="Sentiu-se tenso hoje?"
            firstLabel="Pouco"
            lastLabel="Muito"
            onChange={setRatingTension}
          ></Rate>
          <Rate
            style={{ marginBottom: 5 }}
            title="Encontrou conforto em suas crenças?"
            firstLabel="Pouco"
            lastLabel="Muito"
            onChange={setRatingBeliefConfort}
          ></Rate>
          <Rate
            style={{ marginBottom: 5 }}
            title="O quão feliz você se sente?"
            firstLabel="Pouco"
            lastLabel="Muito"
            onChange={setRatingHappiness}
          ></Rate>
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
              <Text style={styles.buttonText}>Continuar</Text>
            </LinearGradient>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}
