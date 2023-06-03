"use client"
import CartItem from '@/components/CartItem'
import Checkout from '@/components/Checkout'
import EmptyCart from '@/components/EmptyCart'
import React from 'react'
import { styled } from 'styled-components'
import { useCartContext } from '../../../utils/context/cart'
import { ProductItem } from '../../../utils/types'

export default function CartPage() {

    const { cart } = useCartContext()

    if (cart?.length <= 0) return <EmptyCart />
    return (
        <>
            <Wrapper>
                <div>
                    {cart?.map((item: any) => (
                        <CartItem key={item.name} {...item} />
                    ))}

                </div>
                <div>

                    <Checkout />
                </div>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 1rem 0;

    @media(max-width: 1080px) {
    flex-direction: column-reverse;
  }
`
