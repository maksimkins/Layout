import React from "react";
import { Root } from "./navigation/Root";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "./styles";

export const App = () => {
  return (
    <SafeAreaProvider style={styles.container}>
        <Root/>
    </SafeAreaProvider>
  )
}