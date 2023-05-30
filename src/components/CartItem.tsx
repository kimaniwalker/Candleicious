"use client"
import React from 'react'
import { styled } from 'styled-components'
import { ProductDetails } from '../../data/ProductDetails'
import { CartList, ProductItem } from '../../utils/types'
import Image from 'next/image'
import { berkshire, inter } from '../../utils/fonts'
import { useCartContext } from '../../utils/context/cart'
import { colors } from '../../utils/colors'


export default function CartItem({ name, size, qty, price, custom_message }: ProductItem) {

    const product = ProductDetails.filter(product => product.name === name)
    const { changeQty } = useCartContext()
    const total = price * qty

    const { images } = product[0]
    return (
        <>
            <Wrapper>
                <Col>
                    <ImageWrapper>
                        <Image src={images[0]} fill alt="product image" />
                        <Count><Qty>{qty}</Qty></Count>
                    </ImageWrapper>
                </Col>
                <Col>
                    <Name>{name}</Name>
                    <Details>{size} - ${price} x {qty}</Details>
                    <div>
                        <PillButton
                            onClick={() => changeQty(name, qty + 1, size)}>+</PillButton>
                        <PillButton
                            onClick={() => changeQty(name, qty - 1, size)}>-</PillButton>

                    </div>
                </Col>
                <Col>
                    <Price>${total.toFixed(2)}</Price>
                </Col>
            </Wrapper>
            <Divider />

        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:center;
    margin: 1rem 0;
    max-width: 600px;

    @media(max-width: 768px) {
      align-items: center;
  }
    
`
const ImageWrapper = styled.div`
    position: relative;
    height: 200px;
    width: 200px;
    object-fit: cover;
    align-self: center;
    box-shadow: 4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38);

    @media(max-width: 768px) {
        height: 100px;
    width: 100px;
  }
`
const Name = styled.h3`
    font-family: ${berkshire.style.fontFamily};
    font-size: 24px;
`
const Price = styled.h3`
    font-family: ${berkshire.style.fontFamily};
    font-size: 20px;
`
const Details = styled.p`
    font-family: ${inter.style.fontFamily};
    font-size: 18px;
`
const Col = styled.div`
    margin: 1rem;
`

const Count = styled.div`
    position: absolute;
    background-color: ${colors.pinkie};
    border-radius: 50%;
    height: 45px;
    width: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -15px;
    right: -15px;
`
const Qty = styled.h4`
    font-family: ${berkshire.style.fontFamily};
    font-size: 24px;
    color: white;
    margin: 0;
`
const PillButton = styled.button`
    margin: .5rem;
    background-color: ${colors.pinkie};
    border-radius: 50%;
    height: 45px;
    width: 45px;
    font-size: 24px;
    color: white;
    font-family: ${inter.style.fontFamily};
    box-shadow: 4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.21);
`
const Divider = styled.hr`
    border-top: 4px solid #bbb;
  border-radius: 5px;
`