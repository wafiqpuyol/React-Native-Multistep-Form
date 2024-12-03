import { View, Text, StyleSheet } from 'react-native'
import { Link } from "expo-router"
import { CustomButton } from "./components/CustomButton"


export default function index() {

  return (
    <View style={styles.container}>
      <Link href="/checkout" style={styles.text} asChild>
        <CustomButton title='Checkout' />
      </Link>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: { textAlign: 'center', fontSize: 40 }
})