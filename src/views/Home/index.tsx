import React, { useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "../../components/SearchBar";
import { styles } from "./styles";
import { MealList } from "../../components/MealList";


export const Home = () => {
    const [searchValue, setSearchValue] = useState('');
    const [meals, setMeals] = useState([]); 

    const handleChangeValue = (text: string) => { 
        setSearchValue(text);
    }

    const handleSearch = async () => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`);
            const data = await response.json();
            setMeals(data?.meals ?? [])
            
        } 
        catch (error) {
            console.warn(error);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <SearchBar value={searchValue} onChangeValue={handleChangeValue} onSearch={handleSearch}/>
            <MealList meals={meals}/>


        </SafeAreaView>
    )
}

