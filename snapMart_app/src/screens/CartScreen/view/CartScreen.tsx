import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native'
import React from 'react'
import ProductCard from '../component/ProductCard'
import { useAppCart } from '../../../store/app'
import CartScreenController from '../controller/CartScreen.controller'
const CartScreen = () => {

  const cartData = useAppCart()
  const {
    updateCartItemQuantity,
    removeCartItem,
    removeAllItemsInCart,
    totalAmount,
    checkoutCta
  } = CartScreenController()


  const renderItem = ({ item }: any) => {
    return (
      <ProductCard
        incDecQty={updateCartItemQuantity}
        removeItem={removeCartItem}
        data={item}
      />
    )
  }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.cartContainer}>
          <Text style={styles.cartLbl}>My Cart</Text>
          <Pressable
            onPress={removeAllItemsInCart}
            style={styles.emptyCart}>
            <Text style={{ color: '#ffff' }}>Clear Cart</Text>
          </Pressable>
        </View>
        <View style={{ marginVertical: 10 }}>
          <FlatList
            data={cartData}
            renderItem={renderItem}
            inverted
          />
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.totalAmount}>Total Amount: ₱ {totalAmount.toFixed(2)}</Text>
        <Pressable
          disabled={totalAmount === 0 ? true : false}
          style={styles.checkoutBtn}
          onPress={checkoutCta}
        >
          <Text style={styles.checkoutBtnLbl}>Checkout</Text>
        </Pressable>
      </View>
    </>
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
    fontSize: 20
  },
  cartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  checkoutBtn: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkoutBtnLbl: {
    fontSize: 18,
    color: '#ffff',
    fontWeight: 'bold'
  },
  footerContainer: {

    bottom: 0,
    position: 'absolute',
    width: '100%',
    backgroundColor: '#fff',
    padding: 20

  },
  totalAmount: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})