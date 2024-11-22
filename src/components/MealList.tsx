import React from "react";
import { Meal } from "../utils/types";
import { FlatList, ListRenderItemInfo } from "react-native";
import { MealItem } from "./MealItem";

interface Props {
    meals: Meal[]
}

export const MealList: React.FC<Props> = ({meals}) => {
    const renderItem = ({item, index}: ListRenderItemInfo<Meal>) => { //{item: Meal, index: number}
        return <MealItem {...item}/>
    }

    return (
        <FlatList
            data={meals}
            renderItem={renderItem}
        />
    )
}