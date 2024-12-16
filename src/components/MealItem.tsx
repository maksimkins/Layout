import React from "react";
import { Meal } from "../utils/types";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Colors } from "../utils/colors";
import { mapTags } from "../utils/helpers";
import CountryFlag from "react-native-country-flag";
import { nationalityToCountryCode } from "../utils/constants";
import { useNavigation } from "@react-navigation/native";
import HeartIcon from '../assets/icons/heart.svg';
import HeartFilledIcon from '../assets/icons/heart-filled.svg';
import ArrowRightIcon from '../assets/icons/arrow-right.svg';
import { useDispatch, useSelector } from "react-redux";
import { favoriteSlice } from "../views/Favorites/slice";
import { RootState } from "../redux/store";


interface Props extends Meal {
    borderColor: string
}

export const MealItem: React.FC<Props> = (props) => {
    const navigation = useNavigation();
    //@ts-ignore
    const onNavigate = (idMeal) => navigation.navigate('Details', {idMeal});
    const ids = useSelector((state: RootState) => state.favorites.ids);
    const dispatch = useDispatch();

    const inFavotites = (id: string) => ids.includes(id); 
    const onFavorites = (id: string) => {
        inFavotites(id) ? dispatch(favoriteSlice.actions.deleteFavorites(props.idMeal)) : dispatch(favoriteSlice.actions.addFavorites(props.idMeal));
    }
    
    return (
        <View style={styles.container}>
            <Image style={[styles.image, {borderColor: props.borderColor}] } source={{ uri: props.strMealThumb}}/>
            <View style={styles.textContainer}>
                <View style={styles.containerMainInfo}>
                    <View style={styles.containerFlag}>
                        <Text numberOfLines={1} style={styles.textMeal}>{props.strMeal} </Text>
                        <CountryFlag isoCode={nationalityToCountryCode[props.strArea]} size={24} />
                    </View>
                    <Text style={styles.textCategory} >{props.strCategory}</Text>
                </View>
                <Text style={styles.textTags} >{mapTags(props.strTags)}</Text>
            </View>
            <View style={styles.rightAccessories}>
                <Pressable hitSlop={{top: 8, bottom: 8, left: 20, right: 8}} onPress={() => onFavorites(props.idMeal)}>
                    {inFavotites(props.idMeal) ? <HeartFilledIcon width={24} height={24} fill={props.borderColor}/>
                    : <HeartIcon width={24} height={24} fill={props.borderColor}/>}
                </Pressable>

                <Pressable hitSlop={{top: 8, bottom: 8, left: 20, right: 8}} onPress={() => onNavigate(props.idMeal)}>
                    <ArrowRightIcon width={24} height={24} fill={props.borderColor}/>
                </Pressable>
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
        flexWrap: 'wrap',
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
    },

    rightAccessories: {
        justifyContent: 'space-between',

    }

})