import { createSlice,PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
    id : string
    productName : string
    description : string
    unitPrice : number
    category : string
    imageUrl : string
    quantity : number
  }

  const cartSlice = createSlice({
    name: 'cart',
    initialState: [] as CartItem[],
    reducers: {
      addToCart: (state, action: PayloadAction<CartItem>) => {
        const item = action.payload;
        const existingItem = state.find((cartItem) => cartItem.id === item.id);
        if (existingItem) {
          existingItem.quantity += item.quantity;
        } else {
          state.push(item);
        }
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
      },
      removeFromCart: (state, action: PayloadAction<string>) => {
        const itemId = action.payload;
        return state.filter((cartItem) => cartItem.id !== itemId);
      },
      clearCart: () => [],
    },
  });
  
  export const { addToCart, updateQuantity, removeFromCart, clearCart } = cartSlice.actions;
  
  export default cartSlice.reducer;