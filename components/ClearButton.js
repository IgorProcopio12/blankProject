import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import styles from '../styles/Styles';

export default function ClearButton({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.clearButton}>
                <Text style={styles.buttonText}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}