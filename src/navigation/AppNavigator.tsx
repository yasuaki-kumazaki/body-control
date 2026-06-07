import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";
import { COLORS } from "../constants/colors";
import HistoryScreen from "../screens/HistoryScreen";
import LogScreen from "../screens/LogScreen";
import PlanScreen from "../screens/PlanScreen";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: COLORS.surface,
            borderTopColor: COLORS.border,
            borderTopWidth: 1,
          },
          tabBarActiveTintColor: COLORS.textPrimary,
          tabBarInactiveTintColor: COLORS.textMuted,
          tabBarLabelStyle: {
            fontFamily: "SpaceMono_400Regular",
            fontSize: 10,
            letterSpacing: 0.5,
            textTransform: "uppercase",
          },
        }}
      >
        <Tab.Screen
          name="Plan"
          component={PlanScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Text style={{ fontSize: 18, color }}>📋</Text>
            ),
          }}
        />
        <Tab.Screen
          name="Log"
          component={LogScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Text style={{ fontSize: 18, color }}>✏️</Text>
            ),
          }}
        />
        <Tab.Screen
          name="History"
          component={HistoryScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Text style={{ fontSize: 18, color }}>📈</Text>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
