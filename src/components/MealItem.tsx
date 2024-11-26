import React from "react";
import { Meal } from "../utils/types";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Colors } from "../utils/colors";
import { mapTags } from "../utils/helpers";
import CountryFlag from "react-native-country-flag";
import { nationalityToCountryCode } from "../utils/constants";
import { useNavigation } from "@react-navigation/native";
import InfoIcon from '../assets/icons/info.svg'


interface Props extends Meal {
    borderColor: string
}

export const MealItem: React.FC<Props> = (props) => {
    const navigation = useNavigation();
    //@ts-ignore
    const onNavigate = (idMeal) => navigation.navigate('Details', {idMeal});
    
    return (
        <View style={styles.container}>
            <Image style={[styles.image, {borderColor: props.borderColor}] } source={{ uri: props.strMealThumb}}/>
            <View style={styles.textContainer}>
                <View style={styles.containerMainInfo}>
                    <View style={styles.itemHeader}>
                        <View style={styles.containerFlag}>
                            <Text numberOfLines={1} style={styles.textMeal}>{props.strMeal} </Text>
                            <CountryFlag isoCode={nationalityToCountryCode[props.strArea]} size={24} />
                        </View>
                        <Pressable hitSlop={{top: 8, bottom: 8, left: 20, right: 8}} onPress={() => onNavigate(props.idMeal)}>
                            <InfoIcon width={32} height={32} fill={Colors.yellow}/>
                        </Pressable>
                    </View>
                    <Text style={styles.textCategory} >{props.strCategory}</Text>
                </View>
                <Text style={styles.textTags} >{mapTags(props.strTags)}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: Colors.grayDark,
        gap: 16
    },

    image: {
        height: 120,
        width: 120,
        borderRadius: 10,
        borderWidth: 4
    },

    containerMainInfo: {
        gap: 10,
    },

    containerFlag : {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        flex: 1,
    },

    textContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },

    textMeal: {
        color: Colors.white,
        fontSize: 20,
        fontWeight: '600',
    },

    textCategory: {
        color: Colors.white,
    },

    textTags: {
        color: Colors.blue,
    },

    itemHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
        flex: 1,
        alignItems: 'center',
    }

})