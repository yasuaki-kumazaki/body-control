import React from "react";
import { Text, View } from "react-native";
import { COLORS } from "../constants/colors";

export default function PlanScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.bg,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: COLORS.textPrimary,
          fontFamily: "SpaceGrotesk_500Medium",
          fontSize: 16,
        }}
      >
        Plan
      </Text>
    </View>
  );
}
