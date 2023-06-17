import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface CartItem {
  id: string;
  productName: string;
  description: string;
  unitPrice: number;
  category: string;
  imageUrl: string;
  quantity: number;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: [] as CartItem[],
  reducers: {
    locaStorageCart: (state, action: PayloadAction<CartItem[]>) => {
      const item = action.payload;
     return item

    },
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      const existingItem = state.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.push(item);
      }
      AsyncStorage.setItem('cartItems', JSON.stringify(state));
    },
    updateQuantity: (state, action: PayloadAction<{ itemId: string; quantity: number }>) => {
      const { itemId, quantity } = action.payload;
      const item = state.find((cartItem) => cartItem.id === itemId);
      if (item) {
        item.quantity += quantity;
        if (item.quantity <= 0) {
          return state.filter((cartItem) => cartItem.id !== itemId);
        }
      }
      AsyncStorage.setItem('cartItems', JSON.stringify(state));
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const updatedState = state.filter((cartItem) => cartItem.id !== itemId);
      AsyncStorage.setItem('cartItems', JSON.stringify(updatedState));
      return updatedState;
    },
    clearCart: () => {
      AsyncStorage.removeItem('cartItems');
      return [];
    },
  },
});

export const {locaStorageCart, addToCart, updateQuantity, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;