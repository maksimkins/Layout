import React from "react";
import { Home } from "../views/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Favorites } from "../views/Favorites";
import HeartIcon from "../assets/icons/heart.svg";
import HomeIcon from "../assets/icons/home.svg";
import HeartFilledIcon from "../assets/icons/heart-filled.svg";
import HomeFilledIcon from "../assets/icons/home-filled.svg";
import { Colors } from "../utils/colors";

interface TabIconProps {
    color: string;
    size: number;
    focused: boolean;
}

const BottomTab = createBottomTabNavigator();

const HomeTabIcon = ({color, size, focused}: TabIconProps) => focused ? <HomeFilledIcon fill={color} width={size} height={size}/> : <HomeIcon fill={color} width={size} height={size}/>
const FavoriteTabIcon = ({color, size, focused}: TabIconProps) => focused ? <HeartFilledIcon fill={color} width={size} height={size}/> : <HeartIcon fill={color} width={size} height={size}/>


export const BottomTabNavigator = () => {
    return (
        <BottomTab.Navigator screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarActiveTintColor: Colors.purple,
            tabBarInactiveTintColor: Colors.grayDark,
            tabBarLabelPosition: 'beside-icon',
            tabBarIconStyle: {
                width: 24, 
                height: 24,
            },
            tabBarLabelStyle: {
                fontSize: 16,
                fontWeight: 'bold',
                padding: 4,
            },
            tabBarStyle: {
                backgroundColor: Colors.primeBlack,
            }
        }}>
            <BottomTab.Screen options={{ tabBarIcon: HomeTabIcon }} name="Home" component={Home}/>
            <BottomTab.Screen options={{ tabBarIcon: FavoriteTabIcon }} name="Favorites" component={Favorites}/>
        </BottomTab.Navigator>
    )
}