import React, { useCallback, useState } from "react";
import { Text, View, Image, ImageBackground, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import background from "../../assets/background.png";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import { Perfil } from "../../models/data.model";
import { saveJSON } from "../../utils/storage";

const STORAGE_KEY = "form:perfilUsuario";

export default function WhoAreYou() {
  const navigation = useNavigation<any>();

  const handleSelectPerfil = useCallback(
    async (selectedPerfil: Perfil["tipo"]) => {
      try {
        await saveJSON<Perfil>(STORAGE_KEY, { tipo: selectedPerfil });
        navigation.navigate("Activity");
      } catch (e) {
        console.error("Não foi possível salvar os dados:", e);
      }
    },
    [navigation],
  );

  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.image}>
        <View style={styles.boxTop}>
          <Text style={styles.title}>Quem é você?</Text>
        </View>

        <View style={styles.boxMid}>
          <Text style={styles.text}>Selecione seu perfil</Text>
        </View>
        <View style={styles.boxBottom}>
          <Pressable
            style={styles.gradientButton}
            onPress={() => handleSelectPerfil("paciente")}
          >
            <LinearGradient
              colors={["rgba(0, 4, 255, 0.32)", "#5AE7FF"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientInner}
            >
              <Image
                source={require("../../assets/icons/patient-icon.png")}
                style={styles.iconPatientImage}
              />
              <Text style={styles.buttonPatientText}>SOU CRIANÇA/PACIENTE</Text>
            </LinearGradient>
          </Pressable>
          <Pressable
            style={[styles.gradientButton, { marginTop: 20 }]}
            onPress={() => handleSelectPerfil("familiar")}
          >
            <LinearGradient
              colors={["#F9A9DA", "#fff069a4"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientInner}
            >
              <Image
                source={require("../../assets/icons/parents-icon.png")}
                style={styles.iconParentImage}
              />
              <Text style={styles.buttonParentText}>SOU FAMILIAR/PAIS</Text>
            </LinearGradient>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}
