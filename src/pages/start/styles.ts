import { StyleSheet } from "react-native";
import { fontScale } from "../../utils/typography";

const center = { alignItems: "center", justifyContent: "center" } as const;
const boxBase = {
  width: "100%",
  alignItems: "center",
  justifyContent: "flex-start",
} as const;
const inputBase = {
  borderWidth: 2,
  borderColor: "#FF69B4",
  borderRadius: 20,
  width: "80%",
  paddingHorizontal: 10,
  marginVertical: 5,
} as const;
const textBase = { alignSelf: "flex-start", marginLeft: 50 } as const;

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
    width: 250,
    height: 230,
  },
  boxTop: {
    ...boxBase,
    flex: 1,
    justifyContent: "center",
    paddingTop: 120,
  },
  boxMid: {
    ...boxBase,
    flex: 1.5,
    justifyContent: "center",
    paddingTop: 80,
  },
  boxBottom: {
    ...boxBase,
    flex: 1,
    justifyContent: "center",
    paddingBottom: 100,
  },
  text: {
    ...textBase,
    fontSize: fontScale(14),
    color: "#00000080",
    marginTop: 10,
  },
  textInput: {
    ...inputBase,
    height: 40,
    borderRadius: 20,
  },
  datePressable: {
    width: "80%",
    alignItems: "center",
  },
  dateInput: {
    ...inputBase,
    borderRadius: 28,
    width: "100%",
    height: 42,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  gradientButton: {
    borderRadius: 30,
    overflow: "hidden",
    width: "50%",
    height: 55,
    ...center,
  },
  gradientInner: {
    ...center,
    height: "100%",
    width: "100%",
  },
  disabledButton: {
    opacity: 0.6,
  },
  buttonText: {
    color: "white",
    fontSize: fontScale(20),
    fontWeight: "bold",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "75%",
    marginTop: 20,
    marginBottom: 20,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#FF69B4",
    borderRadius: 4,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxChecked: {
    backgroundColor: "#FF69B4",
  },
  checkboxMark: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  consentText: {
    fontSize: fontScale(12),
    color: "#000000",
    flex: 1,
    flexWrap: "wrap",
  },
  link: {
    color: "#5B5FFF",
    textDecorationLine: "underline",
    fontWeight: "500",
  },
  bottomSheetContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bottomSheetHeader: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
    alignItems: "flex-end",
  },
  closeButton: {
    color: "#5B5FFF",
    fontSize: fontScale(14),
    fontWeight: "600",
  },
  bottomSheetContent: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  bottomSheetTitle: {
    fontSize: fontScale(16),
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 10,
  },
  bottomSheetSubtitle: {
    fontSize: fontScale(12),
    color: "#666666",
    marginBottom: 15,
    fontWeight: "500",
  },
  sectionTitle: {
    fontSize: fontScale(13),
    fontWeight: "bold",
    color: "#000000",
    marginTop: 15,
    marginBottom: 8,
  },
  bottomSheetText: {
    fontSize: fontScale(11),
    color: "#333333",
    lineHeight: 18,
  },
  bold: {
    fontWeight: "bold",
  },
});
