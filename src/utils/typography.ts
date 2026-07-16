import { Dimensions, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const BASE_WIDTH = 375;
const scale = SCREEN_WIDTH / BASE_WIDTH;

export function fontScale(size: number) {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export const typography = {
  title: fontScale(30),
  subtitle: fontScale(24),
  body: fontScale(18),
  small: fontScale(14),
  extraSmall: fontScale(12),
  button: fontScale(20),
};
