import { updateQuantity, removeFromCart, clearCart } from "../../../store/cartSlice";
import { useAppDispatch } from "../../../store/app";
const CartScreenController = () => {

    const dispatch = useAppDispatch()

    const updateCartItemQuantity = (itemId : string, quantity : number) => {
        dispatch(updateQuantity({ itemId, quantity }));
      };
    
     const removeCartItem = (itemId :string) => {
        dispatch(removeFromCart(itemId));
      };
    
     const removeAllItemsInCart = () => {
        dispatch(clearCart());
      };

    return {
        updateCartItemQuantity,
        removeCartItem,
        removeAllItemsInCart
    }
}

export default CartScreenController