import React from "react";
import { Text, View, Image, ImageBackground, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import background from "../../assets/background.png";
import Logo from "../../assets/logo.png";
import checkmark from "../../assets/check-mark.png";
import styles from "./styles";

export default function Ending() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.image}>
        <View style={styles.boxTop}>
          <Image source={checkmark} style={styles.icon} resizeMode="contain" />
          <Text style={styles.title}>Obrigado!</Text>
          <Text style={styles.subtitle}>Sua resposta foi enviada com sucesso!</Text>
          <Text style={styles.text}>Você está ajudando a melhorar o cuidado de todos!</Text>
        </View>

        <View style={styles.boxMid}>
          <Image style={styles.logo} source={Logo} resizeMode="contain" />
          <Text style={styles.quote}>
            "O que eu faço é uma gota no meio de um oceano. Mas, sem ela, o oceano será menor."
          </Text>
          <Text style={styles.quoteAuthor}>Madre Teresa de Calcutá</Text>
        </View>

        <View style={styles.boxBottom}>
          <Pressable
            style={styles.gradientButton}
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{ name: "Intro" }],
              })
            }
          >
            <LinearGradient
              colors={["#5B5FFF", "#FF69B4"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientInner}
            >
              <Text style={styles.buttonText}>Voltar ao início</Text>
            </LinearGradient>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}
