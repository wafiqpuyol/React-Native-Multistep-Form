import { View, Text, StyleSheet } from 'react-native'
import { router } from 'expo-router'
import React from 'react'
import {CustomButton} from '../components/CustomButton'

export default function PersonalForm() {

    const toNextPage = () => {
        router.push("/checkout/payment")
    }
    return (
        <View style={styles.container}>
            <Text>personal</Text>
            <CustomButton title='Personal' style={{ marginTop: "auto" }} onPress={toNextPage} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})