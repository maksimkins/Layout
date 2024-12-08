import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Details } from "../views/Details";
import { BottomTabNavigator } from "./BottomTabNavigator";

const MainStack = createStackNavigator();

export const MainStackNavigator = () => {
    return (
        <MainStack.Navigator screenOptions={{headerShown: false}}>
            <MainStack.Screen name="BottomTab" component={BottomTabNavigator}/>
            <MainStack.Screen name="Details" component={Details}/>
        </MainStack.Navigator>
    )
}