import { updateQuantity, removeFromCart, clearCart } from "../../../store/cartSlice";
import { useAppDispatch, useAppCart } from "../../../store/app";
import { Alert } from "react-native";
const CartScreenController = () => {

    const dispatch = useAppDispatch()
    const cartData = useAppCart()
    const updateCartItemQuantity = (itemId : string, quantity : number) => {
        dispatch(updateQuantity({ itemId, quantity }));
      };
    
     const removeCartItem = (itemId :string) => {
        dispatch(removeFromCart(itemId));
      };
    
     const removeAllItemsInCart = () => {
        dispatch(clearCart());
      };

    const totalAmount = cartData.reduce((total, item) => total + item.unitPrice * item.quantity, 0)

    const checkoutCta = () => {
        Alert.alert('Checkout', 'Thank you for purchasing', [
            {text: 'OK', onPress: () => removeAllItemsInCart()},
          ]);
    }

    return {
        updateCartItemQuantity,
        removeCartItem,
        removeAllItemsInCart,
        totalAmount,
        checkoutCta
    }
}

export default CartScreenController