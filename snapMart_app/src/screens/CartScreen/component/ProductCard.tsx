import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

interface Item {
  data: {
    id: String,
    productName: String,
    description: String,
    unitPrice: number,
    category: String,
    imageUrl: String
  }
}

const ProductCard = ({ data }: Item) => {
  return (
    <View style={styles.cardContainer}>
      <View>
        <Image
          source={{ uri: data.imageUrl }}
          style={styles.productImage}
        />
      </View>

      <View style={styles.productContainer}>
        <View>
          <Text style={styles.productLbl}>{data.productName}</Text>
          <Text style={styles.catLbl}>{data.category.toUpperCase()}</Text>
          <Text style={styles.priceLbl}>{data.unitPrice}</Text>
        </View>
      </View>

      <View style = {styles.qtyContainer}>
          <Pressable style={styles.ctaButton}>
            <Text style={styles.btnlbl}> - </Text>
          </Pressable>
          <Text style={styles.qtylbl}>1</Text>
          <Pressable  style={styles.ctaButton}>
            <Text  style={styles.btnlbl}> + </Text>
          </Pressable>
      </View>
    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({
  cardContainer: {
    padding:10,
    flexDirection:'row',
    justifyContent: 'space-between'
  },
  productImage: {
    height: 50,
    width: 50
  },
  productContainer : {
    marginLeft :0,
  },
  productLbl : {
    fontWeight:'bold',
    fontSize:14
  },
  catLbl : {
    fontSize:12
  },
  priceLbl : {
    fontWeight:'bold'
  },
  qtyContainer  :{
    flexDirection : "row",
    alignItems:'center'
  },
  ctaButton : {
    padding :5,
    backgroundColor : 'green'
  },
  btnlbl : {
    fontSize:16,
    color: '#ffff'
  },
  qtylbl : {
    marginHorizontal:5,
    fontSize:15,
    fontWeight:'bold'
  }
})