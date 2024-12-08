import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Image, Text, Pressable, Linking } from "react-native";
import { IngredientKey, IngredientsMeal, Meal, MeasureKey, Range, Recipe } from "../../utils/types";
import { LoaderWrap } from "../../components/LoaderWrap";
import { styles } from "./styles";
import { RecipeList } from "./components/RecipeList";
import { mapTags } from "../../utils/helpers";
import CountryFlag from "react-native-country-flag";
import { nationalityToCountryCode } from "../../utils/constants";


export const Details = () => {
    const route = useRoute();
    const [details, setDetails] = useState<Meal | null>(null); 
    const [isLoading, setIsLoading] = useState(true)

    const recipes = Array.from({length: 20}).map((_, index) => {
        const ingredientKey = `strIngredient${index + 1}` as IngredientKey;
        const measureKey = `strMeasure${index + 1}` as MeasureKey;

        return ({
            ingredient: details?.[ingredientKey]?.trimStart().trimEnd() ?? null,
            measure: details?.[measureKey]?.trimStart().trimEnd() ?? null,
        })
    }).filter((recipe) => !!recipe.ingredient || !!recipe.measure) as Recipe[];

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
    
    const handleLink = () => {
        Linking.openURL(details?.strYoutube ?? '');
    }
    console.log(details?.strArea)
    return (
        <LoaderWrap isLoading={isLoading}>
            <ScrollView contentContainerStyle={styles.listContent} style={styles.list}>
                <Image style={styles.image} source={{ uri: details?.strMealThumb}}/>
                <View style={styles.headerInfo}>
                    <View style={styles.title}>
                        <Text style={styles.textMeal}>{details?.strMeal}</Text>
                        <CountryFlag isoCode={nationalityToCountryCode[details?.strArea ?? '']} size={32} />
                    </View>
                    <Text style={styles.textCategory}>{details?.strCategory}</Text>
                    <Text style={styles.textTags} >{mapTags(details?.strTags ?? '')}</Text>
                </View>
                <RecipeList recipes={recipes}/>
                <View style={styles.instructions}>
                    <Text style={styles.textInstructions}>{details?.strInstructions}</Text>
                </View>
                <View style={styles.linkButton}>
                    <Text style={styles.textInstructions}>Watch instructions: <Text onPress={handleLink} style={styles.link}>{details?.strYoutube}</Text> </Text>
                </View>
            </ScrollView>
        </LoaderWrap>
    )
}
