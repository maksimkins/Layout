import React, { useRef } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import SearchIcon from '../assets/icons/search.svg';
import Clear from '../assets/icons/clear.svg';
import { Colors } from "../utils/colors";

interface Props {
    value: string;
    onChangeValue: (value: string) => void;
    onSearch: () => void;
}   

export const SearchBar: React.FC<Props> = ({value, onChangeValue, onSearch}) => {

    const inputRef = useRef<TextInput>(null);
    
    const onClear = () => {
        onChangeValue('')
        inputRef.current?.blur();
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput ref={inputRef} style={styles.input} placeholderTextColor={Colors.grayDark} placeholder="Search..." value={value} onChangeText={onChangeValue}/>
                {!!value.length ? <Pressable onPress={onClear}>
                    <Clear width={24} height={24} fill={Colors.yellow}/>
                </Pressable> : null}
            </View>
            
            
         
            <Pressable style={styles.pressable} onPress={onSearch}>
                <SearchIcon width={24} height={24} fill={Colors.white}/>
            </Pressable>
 
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: Colors.grayDark,
    },

    input: {
        flex: 1,
        height: 48,
        fontSize: 16,
        color: Colors.white,
    },

    pressable: {
        width: 48,
        height: 48,
        backgroundColor: Colors.purple,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },

    inputContainer: {
        gap: 10,
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 8,
        borderRadius: 12,
        height: 48,
        borderWidth: 2,
        borderColor: Colors.yellow,
    }

})