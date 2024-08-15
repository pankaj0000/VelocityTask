import { View, Text, Pressable, StyleSheet, ViewStyle } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { Dimension } from '../constants/Dimension'
import { Colors } from '../constants/Colors'

type TIconButton = PropsWithChildren<{
    containerStyle?: ViewStyle
    onPress?: () => void
}>

export default function IconButton(props: TIconButton) {
    const { children, containerStyle, onPress } = props
    return (
        <Pressable style={[styles.container, containerStyle]} onPress={() => onPress && onPress()}>
            {children}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: Dimension.Size_10,
        backgroundColor: Colors.grey,
        alignItems: "center",
        justifyContent: "center"
    }
})