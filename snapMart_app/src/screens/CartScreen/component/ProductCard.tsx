import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import {addCommasToNumber} from '../../../utils/convertToAmount'
interface Item {
  data: {
    id: String,
    productName: String,
    description: String,
    unitPrice: number,
    category: String,
    imageUrl: String,
    quantity: number
  },
  incDecQty: Function,
  removeItem: Function
}

const ProductCard = ({ data, incDecQty, removeItem }: Item) => {
  return (
    <View style={styles.cardContainer}>

      <View>
        <Image
          source={{ uri: data.imageUrl }}
          style={styles.productImage}
        />
        <Pressable
          onPress={() => removeItem(data.id)}
          style={styles.removeContainer}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#ffff' }}>X</Text>
        </Pressable>
      </View>

      <View style={styles.productContainer}>
        <View>
          <Text style={styles.productLbl}>{data.productName}</Text>
          <Text style={styles.catLbl}>{data.category.toUpperCase()}</Text>
          <Text style={styles.priceLbl}>{addCommasToNumber(Number(data.unitPrice))}</Text>
        </View>
      </View>

      <View>
        <View style={styles.qtyContainer}>
          <Pressable
            disabled={data.quantity < 2 ? true : false}
            onPress={() => incDecQty(data.id, -1)}
            style={styles.ctaButton}>
            <Text style={styles.btnlbl}> - </Text>
          </Pressable>
          <Text style={styles.qtylbl}>{data.quantity}</Text>
          <Pressable
            onPress={() => incDecQty(data.id, 1)}
            style={styles.ctaButton}>
            <Text style={styles.btnlbl}> + </Text>
          </Pressable>
        </View>
        <Text style={styles.totalPerItem}>Total: {addCommasToNumber(Number(data.unitPrice * data.quantity))}</Text>
      </View>

    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  removeContainer: {
    backgroundColor: 'maroon',
    position: 'absolute',
    borderRadius: 20,
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
    top: -10,
    left: -10
  },
  productImage: {
    height: 50,
    width: 50
  },
  productContainer: {
    width: '50%'
  },
  productLbl: {
    fontWeight: 'bold',
    fontSize: 14
  },
  catLbl: {
    fontSize: 12
  },
  priceLbl: {
    fontWeight: 'bold'
  },
  qtyContainer: {
    flexDirection: "row",
    alignItems: 'center'
  },
  ctaButton: {
    padding: 5,
    backgroundColor: 'green'
  },
  btnlbl: {
    fontSize: 16,
    color: '#ffff'
  },
  qtylbl: {
    marginHorizontal: 5,
    fontSize: 15,
    fontWeight: 'bold'
  },
  totalPerItem: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 14
  }
})