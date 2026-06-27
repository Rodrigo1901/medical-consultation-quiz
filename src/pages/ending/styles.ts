import { StyleSheet } from "react-native";

const center = { alignItems: "center", justifyContent: "center" } as const;
const boxBase = {
  width: "100%",
  alignItems: "center",
  justifyContent: "flex-start",
} as const;

export default StyleSheet.create({
  container: {
    flex: 1,
    ...center,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  logo: {
    width: 220,
    height: 150,
    marginBottom: 30,
    marginTop: 50,
  },
  boxTop: {
    ...boxBase,
    height: 240,
    paddingTop: 40,
  },
  boxMid: {
    ...boxBase,
    height: 340,
    paddingHorizontal: 28,
    justifyContent: "center",
  },
  boxBottom: {
    ...boxBase,
    height: 180,
  },
  icon: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 34,
    color: "#6149FB",
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#6149FB",
    marginTop: 12,
    textAlign: "center",
    lineHeight: 22,
  },
  text: {
    fontSize: 14,
    color: "#6149FB",
    marginTop: 12,
    textAlign: "center",
    lineHeight: 22,
  },
  quote: {
    fontSize: 14,
    color: "#6149FB",
    textAlign: "center",
    lineHeight: 20,
    fontStyle: "italic",
  },
  quoteAuthor: {
    fontSize: 12,
    color: "#6149FB",
    textAlign: "center",
    marginTop: 10,
  },
  gradientButton: {
    marginTop: 30,
    borderRadius: 30,
    overflow: "hidden",
    width: "70%",
    height: 55,
    ...center,
  },
  gradientInner: {
    ...center,
    width: "100%",
    height: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
