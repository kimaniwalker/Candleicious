"use client"
import React, { useState, createContext, useRef } from "react";
import { storeValue } from "../hooks/useLocalStorage";
import { CartList, ProductItem } from "../types";


interface CartProviderProps {
    children: React.ReactNode
}

export const CartContext = createContext({
    cart: [{
        name: '',
        size: '',
        price: 8.99,
        qty: 1
    }],
    setCart: (value: CartList) => { },
    addToCart: (product: ProductItem) => { },
    changeQty: (name: string, qty: number, size: string) => { },
    clearCartItems: () => { },
    removeCartItem: (name: string, size: string) => { }
});

export const CartWrapper = ({ children }: CartProviderProps) => {

    const [cart, setCart] = useState<CartList>(() => getInitialValue())
    const [counter, setCounter] = useState(0)


    const initialRender = useRef(true);

    React.useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
        } else {
            storeValue('cart', cart)
        }
    }, [cart]);




    function getInitialValue() {
        if (typeof window !== 'undefined') {
            const value = localStorage.getItem('cart')
            if (value) {
                return JSON.parse(value)
            }
            return []
        }
    }



    function addToCart(product: ProductItem) {

        setCart((prev: CartList) => {
            const existing = cart.find((item: ProductItem) => item.name === product.name && item.size === product.size);

            return existing
                ? [...cart.map((item: ProductItem) => item.name === product.name && product.size === item.size
                    ? { ...item, qty: item.qty + 1 }
                    : item,
                ),
                ]
                : [...prev, { ...product, qty: 1 }]

        })


    }
    function changeQty(name: string, qty: number, size: string) {
        if (qty === 0) return removeCartItem(name, size)

        setCart((prev: any) => [
            ...prev.map((item: ProductItem) => item.name === name && item.size === size ? { ...item, qty } : item,)
        ])


        return
    }

    function clearCartItems() {
        setCart([])
        return cart;
    }

    function removeCartItem(name: string, size: string) {

        const result = cart.filter((cartItem: { name: string, size: string }) => cartItem.name !== name)

        setCart(result)
        return result

    }


    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, changeQty, clearCartItems, removeCartItem }}>
            {children}
        </CartContext.Provider>
    );
};

export function useCartContext() {
    return React.useContext(CartContext)
}