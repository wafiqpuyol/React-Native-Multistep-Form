import { Stack } from "expo-router"
import React from 'react'

export default function _layout() {
    return (
        <Stack>
            <Stack.Screen name="personal" options={{ title: "Personal" }} />
            <Stack.Screen name="payment" options={{ title: "Payment" }} />
            <Stack.Screen name="confirm" options={{ title: "Confirm" }} />
        </Stack>
    )
}