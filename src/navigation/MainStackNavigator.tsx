import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Home } from "../views/Home";
import { Details } from "../views/Details";

const MainStack = createStackNavigator();

export const MainStackNavigator = () => {
    return (
        <MainStack.Navigator screenOptions={{headerShown: false}}>
            <MainStack.Screen name="Home" component={Home}/>
            <MainStack.Screen name="Details" component={Details}/>
        </MainStack.Navigator>
    )
}