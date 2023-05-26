import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import todoReducer from "./TodoSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

type AppDispatch = typeof store.dispatch;


export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


