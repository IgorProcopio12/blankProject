import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import styles from '../styles/Styles';

export default function Button({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.homeButtonText}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}





