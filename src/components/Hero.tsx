import Image from 'next/image'
import React from 'react'
import { styled } from 'styled-components'

export default function Hero() {


    return (
        <Section>
            <Image alt='hero' fill src="/products/hero.png" />
        </Section>
    )
}

const Section = styled.section`
    position: relative;
    width: 1280px;
    height: 720px;
    object-fit: cover;
    overflow: hidden;
    border-radius: 16px;
    margin-top: 24px;
    box-shadow: 4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.39);

    @media(max-width: 1280px) {
        display: none;
    }
`
