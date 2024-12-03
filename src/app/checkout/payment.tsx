import { View, Text, StyleSheet } from 'react-native'
import { router } from 'expo-router'
import React from 'react'
import {CustomButton} from '../components/CustomButton'

export default function PaymentForm() {

    const toNextPage = () => {
        router.push("/checkout/confirm")
    }
    return (
        <View style={styles.container}>
            <Text>payment</Text>
            <CustomButton title='Payment' style={{ marginTop: "auto" }} onPress={toNextPage} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})