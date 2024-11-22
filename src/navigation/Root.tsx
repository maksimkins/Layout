import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { MainStackNavigator } from "./MainStackNavigator";

export const Root = () => {
    return (
        <NavigationContainer>
            <MainStackNavigator/>
        </NavigationContainer>
    )
}