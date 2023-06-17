import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import ProductCard from '../component/ProductCard'
const CartScreen = () => {
  const data = [
    { "id": "c34d2273-6ec4-59ee-b3ef-3663b1c66a06", "productName": "Elecap buwzabih pil onebi.", "description": "Otpauwo kuhsu bolug sefbiuda edodet zub wi ko dieka ro wub gefmejog. Huaf wo vi keherfum se iruverhoc di wo mimitzad ziztahig bobusoru nutbac maj mawhusom bosorke. Pevomav lu leir nijocru laheh huvi adu ga isu fos ekfij gibvo vimfo.", "unitPrice": 113.15, "imageUrl": "https://assetbucketdevelopment.blob.core.windows.net/testing/38572723316446256-4502091711_4306188427186_01.jpg.jpg", "category": "groceries" }
  ]
  return (
    <View style={styles.container}>
      <View style={styles.cartContainer}>
        <Text style={styles.cartLbl}>My Cart</Text>
        <Pressable style={styles.emptyCart}>
          <Text style={{ color: '#ffff' }}>Empyt Cart</Text>
        </Pressable>
      </View>
      <View style={{ marginVertical: 10 }}>
        {data.map((item) => {
          return (
            <ProductCard
              data={item}
            />
          )
        })}
      </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  emptyCart: {
    padding: 5,
    backgroundColor: 'maroon',
    borderRadius: 5
  },
  cartLbl: {
    fontWeight: 'bold',
    fontSize : 20
  },
  cartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  }
})