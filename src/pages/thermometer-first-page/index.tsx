import React, { useCallback, useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  Pressable,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NavigationProp } from "../../navigation/types";
import background from "../../assets/background.png";
import styles from "./styles";
import Slider from "@react-native-community/slider";
import { RespostaTermometro } from "../../models/data.model";
import { LinearGradient } from "expo-linear-gradient";
import { saveJSON, loadJSON, STORAGE_KEYS } from "../../utils/storage";

const STORAGE_KEY = STORAGE_KEYS.RESPOSTAS_TERMOMETRO;

export default function ThermometerFirstPage() {
  const navigation = useNavigation<NavigationProp<"ThermometerFirstPage">>();
  const [selected, setSelected] = useState<number | null>(null);
  const [painLevel, setPainLevel] = useState(0);

  const faces = [
    require("../../assets/icons/faces/felling-0.png"),
    require("../../assets/icons/faces/felling-2.png"),
    require("../../assets/icons/faces/felling-4.png"),
    require("../../assets/icons/faces/felling-6.png"),
    require("../../assets/icons/faces/felling-10.png"),
  ];

  const sliderFaces = [
    require("../../assets/icons/slider/slider-1.png"),
    require("../../assets/icons/slider/slider-2.png"),
    require("../../assets/icons/slider/slider-3.png"),
    require("../../assets/icons/slider/slider-4.png"),
    require("../../assets/icons/slider/slider-5.png"),
  ];

  useEffect(() => {
    loadDados();
  }, []);

  const salvar = useCallback(async () => {
    try {
      const existing = await loadJSON<RespostaTermometro>(STORAGE_KEY);
      const dados: Partial<RespostaTermometro> = {
        ...existing,
        comoEstaSeSentindo: selected || 0,
        nivelDeDor: painLevel,
      };
      await saveJSON<Partial<RespostaTermometro>>(STORAGE_KEY, dados);
    } catch (e) {
      console.error("Não foi possível salvar as respostas:", e);
    }
    navigation.navigate("ThermometerSecondPage");
  }, [selected, painLevel]);

  const loadDados = useCallback(async () => {
    try {
      const stored = await loadJSON<RespostaTermometro>(STORAGE_KEY);
      if (stored) {
        setSelected(stored.comoEstaSeSentindo || 0);
        setPainLevel(stored.nivelDeDor || 0);
      }
    } catch (e) {
      console.error("Não foi possível carregar as respostas:", e);
    }
  }, []);

  const isFormValid = selected !== null && painLevel >= 0;

  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.image}>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <Image source={require("../../assets/icons/back.png")} />
          </Pressable>
        </View>

        <View style={styles.boxTop}>
          <Text style={styles.title}>Termômetro do dia</Text>
        </View>

        <View style={styles.boxMid}>
          <Text style={styles.progressLabel}>Resposta 1/3</Text>
          <View style={styles.progressOuter}>
            <View style={styles.progressInner} />
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Como está se sentindo?</Text>
            <View style={styles.facesRow}>
              {faces.map((f, i) => (
                <Pressable
                  key={i}
                  onPress={() => setSelected(i)}
                  style={
                    selected === i ? styles.facePressSelected : styles.facePress
                  }
                >
                  <Image source={f} style={styles.faceImage} />
                </Pressable>
              ))}
            </View>
          </View>

          <View style={[styles.card, { marginTop: 40 }]}>
            <Text style={styles.cardTitle}>Nível de dor</Text>

            <View style={styles.sliderFacesRow}>
              {sliderFaces.map((f, i) => (
                <Image key={i} source={f} style={styles.sliderFaceImage} />
              ))}
            </View>

            <View style={styles.sliderRow}>
              <Slider
                style={{ width: 250, height: 40 }}
                step={1}
                onValueChange={(value) => {
                  setPainLevel(value);
                }}
                tapToSeek
                value={painLevel || 0}
                minimumValue={0}
                maximumValue={10}
                minimumTrackTintColor="#ff000085"
                maximumTrackTintColor="#12b0d8"
              />
              <Text style={styles.sliderValueText}>{painLevel}</Text>
            </View>
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
              <Text style={styles.buttonText}>Continuar</Text>
            </LinearGradient>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}
