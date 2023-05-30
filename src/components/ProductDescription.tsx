"use client"
import Link from 'next/link'
import React from 'react'
import { styled } from 'styled-components'
import { colors } from '../../utils/colors'
import { inter } from '../../utils/fonts'

type Props = {
    name: string
    disclaimer?: string
    description: string
    size: string
    price: number
}

export default function ProductDescription({ name, disclaimer, description, size, price }: Props) {


    return (
        <>
            <Title>{name}</Title>
            <Description>{size.toUpperCase()} - ${price}</Description>
            <Description>{description}</Description>
            {disclaimer && <Disclaimer>{disclaimer}</Disclaimer>}

        </>
    )
}

const Title = styled.h2`
    font-family: ${inter.style.fontFamily};
    font-size: 48px;
`
const Description = styled.p`
   font-family: ${inter.style.fontFamily};
    font-size: 18px; 
    line-height: 1.4;
`
const Disclaimer = styled.p`
    font-family: ${inter.style.fontFamily};
    font-size: 16px;
    color: red;
`

