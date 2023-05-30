import React from 'react'
import { styled } from 'styled-components'
import { berkshire } from '../../utils/fonts'
import ProductShelf from './ProductShelf'

export default function EmptyCart() {


    return (
        <Wrapper>
            <Message>Your cart is currently empty. Add some items to your cart to get started.</Message>

        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

const Message = styled.h4`
    text-align:center;
    font-family: ${berkshire.style.fontFamily};
    font-size: 24px;
`
