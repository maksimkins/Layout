import React from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import SearchIcon from '../assets/icons/search.svg';
import { Colors } from "../utils/colors";

interface Props {
    value: string;
    onChangeValue: (value: string) => void;
    onSearch: () => void;
}   

export const SearchBar: React.FC<Props> = ({value, onChangeValue, onSearch}) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Search..." value={value} onChangeText={onChangeValue}/>
            
            <Pressable onPress={onSearch}>
                <SearchIcon width={24} height={24} fill={Colors.black}/>
            </Pressable>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },

    input: {
        flex: 1,
        borderRadius: 12,
        padding: 8,
        height: 48,
        borderWidth: 1,
        borderColor: Colors.gray,
        fontSize: 16,
    }
})