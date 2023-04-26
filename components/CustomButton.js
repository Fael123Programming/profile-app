import React, { useState } from 'react';
import {
    Dimensions,
    Pressable,
    StyleSheet,
    Text
} from 'react-native';

const CustomButton = ({text, hexBaseColor}) => {
    const fiftyPerTransparent = hexBaseColor + 'CC'; // 80% transparency.
    const [backgroundColor, setBackgroundColor] = useState(fiftyPerTransparent);  
    return (
        <Pressable
            style={[styles.buttonContainer, {backgroundColor: backgroundColor}]}
            onPressIn={() => setBackgroundColor(hexBaseColor)}
            onPressOut={() => setBackgroundColor(fiftyPerTransparent)}
        >
            <Text style={styles.textIn}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        width: Dimensions.get('screen').width / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textIn: {
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
        color: 'white'
    }
});

export { CustomButton };
