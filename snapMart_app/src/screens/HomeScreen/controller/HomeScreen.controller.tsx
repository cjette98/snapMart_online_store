import {useEffect, useState} from 'react'
import ProductData from '../../../constant/items.json'
import { useNavigation } from '@react-navigation/native'
import { useAppDispatch } from "../../../store/app";
import { addToCart } from '../../../store/cartSlice';

const HomeScreenController = () => {

    const navigation = useNavigation()
    const ParseCategory = ProductData.map(({category}) => category)
    const ProductCategory= [...new Set(ParseCategory)];
    const [searchProduct, setSearchProduct] = useState('')

    const dispatch = useAppDispatch()
    
    const gotoCartScreen = () => navigation.navigate('CartScreen')
    const addItemToCart = (item: any) =>  {
      const newItem = {...item, quantity : 1}
       dispatch(addToCart(newItem));
  }
  return  {
    ProductData,
    ProductCategory,
    searchProduct,
    setSearchProduct,
    gotoCartScreen,
    addItemToCart
  }
}

export default HomeScreenController
