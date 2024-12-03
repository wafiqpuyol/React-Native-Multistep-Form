import { View, Text, StyleSheet } from 'react-native'
import { router } from 'expo-router'
import React from 'react'
import { CustomButton } from '../components/CustomButton'

export default function ConfirmForm() {

    const toNextPage = () => {
        router.dismissAll()
        router.push("/")
    }
    return (
        <View style={styles.container}>
            <Text>confirm</Text>
            <CustomButton title='Confirm' style={{ marginTop: "auto" }} onPress={toNextPage} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})