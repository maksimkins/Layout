import React, { useState } from "react";
import { Root } from "./navigation/Root";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "./styles";
import { store } from './redux/store'
import { Provider } from 'react-redux'

export const App = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <Provider store={store}>
        <Root/>
      </Provider>
    </SafeAreaProvider>
  )
}


