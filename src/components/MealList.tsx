import React from "react";
import { Meal } from "../utils/types";
import { FlatList, ListRenderItemInfo, StyleSheet } from "react-native";
import { MealItem } from "./MealItem";
import { Colors } from "../utils/colors";

interface Props {
    meals: Meal[]
}

export const MealList: React.FC<Props> = ({meals}) => {
    const renderItem = ({item, index}: ListRenderItemInfo<Meal>) => { //{item: Meal, index: number}
        return <MealItem {...item} borderColor={(index % 2) ? Colors.purple : Colors.yellow}/>
    }

    const keyExtractor = (item: Meal) => item.idMeal;

    return (
        <FlatList
            style={styles.list}
            contentContainerStyle={styles.listContent}
            keyExtractor={keyExtractor}
            data={meals}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
        />
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        padding: 16,
        
    },

    listContent: {
        flexGrow: 1,

    },
})