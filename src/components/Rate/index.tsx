import React, { forwardRef, useEffect, useState } from "react";
import { Text, View, Image, Pressable } from "react-native";
import styles from "./styles";

const faces = [
  require("../../assets/icons/rate/one.png"),
  require("../../assets/icons/rate/two.png"),
  require("../../assets/icons/rate/three.png"),
  require("../../assets/icons/rate/four.png"),
  require("../../assets/icons/rate/five.png"),
];

type props = {
  title: string;
  firstLabel?: string;
  lastLabel?: string;
  value?: number;
  onChange?: (selected: number) => void;
  style?: any;
};

export const Rate = forwardRef((props: props, ref) => {
  const [selected, setSelected] = useState<number | null>(
    props.value ? props.value - 1 : null
  );

  useEffect(() => {
    setSelected(props.value !== undefined && props.value !== null ? props.value - 1 : null);
  }, [props.value]);

  const handleSelect = (i: number) => {
    setSelected(i);
    if (props.onChange) {
      props.onChange(i + 1); // Enviando a avaliação como 1-5 em vez de 0-4
    }
  };

  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.card}>
        <Text style={styles.cardText}>{props.title}</Text>
        <View style={styles.iconRow}>
          {faces.map((f, i) => (
            <Pressable
              key={i}
              onPress={() => handleSelect(i)}
              style={styles.iconPress}
            >
              <View style={selected === i ? styles.iconPressSelected : undefined}>
                <Image source={f} style={styles.iconImage} />
              </View>
              {i === 0 && <Text style={styles.iconLabel}>{props.firstLabel}</Text>}
              {i === 4 && <Text style={styles.iconLabel}>{props.lastLabel}</Text>}
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
});
