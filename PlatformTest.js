import React from "react";
import { Platform, StyleSheet, Text } from "react-native";

const XcyStyles = StyleSheet.create({
    container: {
        flex: 1,
        ...Platform.select({
            ios: {
                backgroundColor:'red'
            },
            android: {
                backgroundColor:'yellow',
                padding:15,
                margin:10,
            }
    
        })
    }
});


export default XcyStyles;