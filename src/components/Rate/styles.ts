import { StyleSheet } from "react-native";

const center = { alignItems: "center", justifyContent: "flex-start" } as const;
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
  card: {
    width: "85%",
    height: 110,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 16,
    paddingVertical: 10,
    alignItems: "center",
  },
  cardText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1800AD",
    marginBottom: 4,
  },
  cardImage: {
    width: "100%",
    height: 40,
    resizeMode: "contain",
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
  iconImage: {
    width: 60,
    height: 35,
    resizeMode: "contain",
  },
  iconPress: {
    alignItems: "center",
    paddingVertical: 4,
  },
  iconPressSelected: {
    alignItems: "center",
    paddingVertical: 4,
    backgroundColor: "rgba(255,105,180,0.12)",
    borderRadius: 20,
  },
  iconLabel: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: "700",
    color: "#1800AD",
  },
});
