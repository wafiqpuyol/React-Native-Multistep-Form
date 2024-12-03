import { ComponentProps, forwardRef, ReactNode } from "react"
import { Text, View, StyleProp, StyleSheet, ViewStyle, Pressable } from "react-native"

type CustomButton = {
    title: string
    rightIcon?: ReactNode
    style?: StyleProp<ViewStyle>
} & ComponentProps<typeof Pressable>

export const CustomButton = forwardRef<View, CustomButton>(({ rightIcon, style, title, ...pressableProps }, ref) => {
    return (
        <Pressable ref={ref} {...pressableProps} style={[styles.button, style]}>
            <Text style={styles.buttonText}>{title}</Text>
            <View style={styles.rightIconContainer}>{rightIcon}</View>
        </Pressable>
    )
})

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#005055',
        padding: 20,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        width: '100%',
    },
    buttonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
        letterSpacing: 1.5,
    },
    rightIconContainer: {
        position: 'absolute',
        right: 20,
    },
});