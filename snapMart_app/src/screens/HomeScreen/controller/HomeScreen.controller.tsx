import {useEffect, useState} from 'react'
import ProductData from '../../../constant/items.json'
import { useNavigation } from '@react-navigation/native'
const HomeScreenController = () => {

    const navigation = useNavigation()
    const ParseCategory = ProductData.map(({category}) => category)
    const ProductCategory= [...new Set(ParseCategory)];
    const [searchProduct, setSearchProduct] = useState('')

    const gotoCartScreen = () => navigation.navigate('CartScreen')

  return  {
    ProductData,
    ProductCategory,
    searchProduct,
    setSearchProduct,
    gotoCartScreen
  }
}

export default HomeScreenController
