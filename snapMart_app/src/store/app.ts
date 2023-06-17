import { useSelector, useDispatch,type TypedUseSelectorHook  } from "react-redux";
import { type AppDispatch, type RootState } from '.';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppCart = () => useAppSelector((state) => state.cart);