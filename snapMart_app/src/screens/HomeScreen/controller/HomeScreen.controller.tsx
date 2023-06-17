import {useEffect, useState} from 'react'
import ProductData from '../../../constant/items.json'
import { useNavigation } from '@react-navigation/native'
import { useAppDispatch } from "../../../store/app";
import { addToCart } from '../../../store/cartSlice';

const HomeScreenController = () => {
 
    const navigation = useNavigation()
    const ParseCategory = ProductData.map(({category}) => category)
    const ProductCategory= [...new Set(ParseCategory)];
    const [filteredItems, setFilteredItems] = useState(ProductData);
    const [searchProductName, setSearchProductName] = useState('')
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [isAscSortByPrice, setSortByPrice] = useState(true);

    const dispatch = useAppDispatch()
    
    const gotoCartScreen = () => navigation.navigate('CartScreen')
    const addItemToCart = (item: any) =>  {
      const newItem = {...item, quantity : 1}
       dispatch(addToCart(newItem));
  }

  const toggleCategory = (categoryId : string) => {
    const isSelected = selectedCategories.includes(categoryId);
    if (isSelected) {
      const updatedCategories = selectedCategories.filter((id) => id !== categoryId);
      setSelectedCategories(updatedCategories);
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  useEffect(() => {
    filterAndSortItems();
  }, [searchProductName, selectedCategories, isAscSortByPrice]);

  const filterAndSortItems = () => {
    let filteredItemsCopy = [...ProductData];

    if (searchProductName) {
      filteredItemsCopy = filteredItemsCopy.filter((item) =>
        item.productName.toLowerCase().includes(searchProductName.toLowerCase())
      );
    }

    if (selectedCategories.length > 0) {
      filteredItemsCopy = filteredItemsCopy.filter((item) =>
        selectedCategories.includes(item.category)
      );
    }

    if (isAscSortByPrice) {
      filteredItemsCopy.sort((a, b) => a.unitPrice - b.unitPrice);
    } else if(!isAscSortByPrice) {
      filteredItemsCopy.sort((a, b) => b.unitPrice - a.unitPrice);
    }

    setFilteredItems(filteredItemsCopy);
  };
  
  return  {
    filteredItems,
    ProductCategory,
    searchProductName,
    setSearchProductName,
    gotoCartScreen,
    addItemToCart,
    isAscSortByPrice,
    setSortByPrice,
    toggleCategory,
    selectedCategories
  }
}

export default HomeScreenController
