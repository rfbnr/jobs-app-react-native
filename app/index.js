import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Redirect, Stack } from "expo-router";

import { COLORS } from "../constants";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 6000);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.white },
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
      {isLoading ? (
        <>
          <ActivityIndicator size={60} color={COLORS.primary} />
          <Text style={{ textAlign: "center", paddingTop: 6 }}>loading</Text>
        </>
      ) : (
        <Redirect href="/home" />
      )}
    </View>
  );
};

export default Index;
