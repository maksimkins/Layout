import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Image } from "react-native";
import { Meal } from "../../utils/types";
import { LoaderWrap } from "../../components/LoaderWrap";
import { styles } from "./styles";


export const Details = () => {
    const route = useRoute();
    const [details, setDetails] = useState<Meal | null>(null); 
    const [isLoading, setIsLoading] = useState(true)

    const fetchDetails = async (idMeal: string) => {
        try {
            setIsLoading(true);
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
            const data = await response.json();
            setDetails(data?.meals[0] ?? null)
        } 
        catch (error) {
            console.warn(error);
        }
        finally {
            setTimeout(() => setIsLoading(false), 2000);
        }
    }
    
    useEffect(() => {
        // @ts-ignore
        fetchDetails(route.params?.idMeal)
        // @ts-ignore
    }, [route.params?.idMeal])
  
    return (
        <LoaderWrap isLoading={isLoading}>
            <ScrollView contentContainerStyle={styles.listContent} style={styles.list}>
                <Image style={styles.image} source={{ uri: details?.strMealThumb}}/>
                
            </ScrollView>
        </LoaderWrap>
    )
}
