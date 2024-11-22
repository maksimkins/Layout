import React from "react";
import { Meal } from "../utils/types";
import { Image } from "react-native-svg";
import { StyleSheet, Text, View } from "react-native";

interface Props extends Meal {

}

export const MealItem: React.FC<Props> = (props) => {
    
    return (
        <View>
            <Image/>
            <Text>{props.strMeal}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})