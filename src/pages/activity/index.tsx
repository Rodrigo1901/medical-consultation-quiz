import React, { useCallback, useState } from "react";
import { Text, View, Image, ImageBackground, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import background from "../../assets/background.png";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import { Atividade, Perfil } from "../../models/data.model";
import { saveJSON, STORAGE_KEYS } from "../../utils/storage";

const STORAGE_KEY = STORAGE_KEYS.ATIVIDADE;

export default function Activity() {
  const navigation = useNavigation<any>();

  const handleSelectActivity = useCallback(
    async (selectedActivity: Atividade["nomeAtividade"]) => {
      try {
        await saveJSON<Atividade>(STORAGE_KEY, {
          nomeAtividade: selectedActivity,
        });
        navigation.navigate("ThermometerFirstPage");
      } catch (e) {
        console.error("Não foi possível salvar os dados:", e);
      }
    },
    [navigation],
  );

  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.image}>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <Image source={require("../../assets/icons/back.png")} />
          </Pressable>
        </View>
        <View style={styles.boxTop}>
          <Text style={styles.title}>O que vamos avaliar?</Text>
        </View>

        <View style={styles.boxMid}>
          <Text style={styles.text}>Escolha a atividade realizada</Text>
        </View>
        <View style={styles.boxBottom}>
          <Pressable
            style={styles.gradientButton}
            onPress={() => handleSelectActivity("reiki")}
          >
            <LinearGradient
              colors={["#F02BF1", "#9F77FD"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientInner}
            >
              <Image
                source={require("../../assets/icons/reiki-icon.png")}
                style={styles.iconImage}
              />
              <Text style={styles.buttonReikiText}>REIKI</Text>
            </LinearGradient>
          </Pressable>
          <Pressable
            style={[styles.gradientButton, { marginTop: 20 }]}
            onPress={() => handleSelectActivity("aromaterapia")}
          >
            <LinearGradient
              colors={["#749AFF", "#A7EAFF"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientInner}
            >
              <Image
                source={require("../../assets/icons/aromatherapy-icon.png")}
                style={styles.iconImage}
              />
              <Text style={styles.buttonAromatherapyText}>AROMATERAPIA</Text>
            </LinearGradient>
          </Pressable>
          <Pressable
            style={[styles.gradientButton, { marginTop: 20 }]}
            onPress={() => handleSelectActivity("meditação")}
          >
            <LinearGradient
              colors={["#FCF9C3", "#BDFDF9"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientInner}
            >
              <Image
                source={require("../../assets/icons/meditation-icon.png")}
                style={styles.iconImage}
              />
              <Text style={styles.buttonMeditationText}>MEDITAÇÃO</Text>
            </LinearGradient>
          </Pressable>
           <Pressable
            style={[styles.gradientButton, { marginTop: 20 }]}
            onPress={() => handleSelectActivity("yoga")}
          >
            <LinearGradient
              colors={["#FF6CC0", "#FFD661"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientInner}
            >
              <Image
                source={require("../../assets/icons/yoga.png")}
                style={styles.iconImage}
              />
              <Text style={styles.buttonYogaText}>YOGA</Text>
            </LinearGradient>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}
