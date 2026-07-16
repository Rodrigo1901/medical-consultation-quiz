import React from "react";
import { Text, View, Image, ImageBackground, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NavigationProp } from "../../navigation/types";
import Logo from "../../assets/logo.png";
import background from "../../assets/background.png";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";

export default function Intro() {
  const navigation = useNavigation<NavigationProp<"Intro">>();
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.image}>
        <View style={styles.boxTop}>
          <Image style={styles.logo} source={Logo} />
        </View>

        <View style={styles.boxMid}>
          <Text style={styles.text}>
            Modelo de Atenção Integrativa e Assistencial
          </Text>
        </View>
        <View style={styles.boxBottom}>
          <Pressable
            style={styles.gradientButton}
            onPress={() => navigation.navigate("Start")}
          >
            <LinearGradient
              colors={["#5B5FFF", "#FF69B4"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientInner}
            >
              <Text style={styles.buttonText}>Iniciar</Text>
            </LinearGradient>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}
