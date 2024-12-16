import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { MealList } from "../../components/MealList";
import { useFocusEffect } from "@react-navigation/native";

export const Favorites = () => {
    const [meals, setMeals] = useState([]); 
    const dispatch = useDispatch();
    const ids = useSelector((state: RootState) => state.favorites.ids);

    useFocusEffect(
        React.useCallback(() => {
            Promise.all(ids.map((id) => fetchFavorites(id))).then((values) => {
                //@ts-ignore
                setMeals(values);
              });
              console.log("ids")
        }, [ids])
      );

    const fetchFavorites = async (id: string) => {
        try 
        {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            const data  = await response.json();
            return data?.meals[0];
        } 
        catch (error) 
        {
            return null;
        }
    } 
    
    return (
        <View style={styles.container}>
            <MealList meals={meals}/>
        </View>
    )
} 