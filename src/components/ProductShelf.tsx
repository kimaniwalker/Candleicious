"use client"

import { useRouter } from 'next/navigation';
import React from 'react'
import styled from 'styled-components';
import { ProductDetails } from '../../data/ProductDetails';
import { Products } from '../../data/Products';
import { colors } from '../../utils/colors';
import { berkshire, inter, pangolin } from '../../utils/fonts';
import FeaturedShelf from './FeaturedShelf';
import Hero from './Hero';
import ProductThumbnail from './ProductThumbnail';

export default function ProductShelf() {

    const AllProducts = Products.name
    const getProductDetails = (product: string) => {
        return ProductDetails.filter(item => item.name === product)
    }
    const router = useRouter()
    const ProductAd = () => (
        <ProductRow onClick={() => router.push('/auth/login')}>
            <AdContent>
                <Description>
                    Join the Candleicious Affiliate Program! Earn up to 10% commission per sale with your unique code. Get a featured candle monthly when your code is used 5 times. Turn your love for candles into a profitable venture. Sign up now!
                </Description>
            </AdContent>
        </ProductRow>
    )
    const ProductAd2 = () => (
        <ProductRow onClick={() => router.push('/auth/login')}>
            <AdContent>
                <Description>
                    Experience the ultimate candle indulgence with Candleicious VIP Membership! For just $20.99 a month, become a VIP member and receive a handpicked 12oz featured candle delivered straight to your doorstep, allowing you to immerse yourself in captivating scents and elevate your ambiance. Enjoy unparalleled convenience with the ability to pause or cancel your subscription at any time, putting you in control. As a VIP member, you gain access to exclusive deals, discounts, and promotions, ensuring you never miss out on new releases and receiving special perks reserved only for our VIP community. Elevate your candle game and transform your space into a haven of tranquility and beauty by signing up for our VIP program today!
                </Description>
            </AdContent>
        </ProductRow>
    )

    return (
        <>

            <Hero />
            <Wrapper>
                <ProductRow>

                    <Title>
                        Featured Products
                    </Title>
                </ProductRow>
                <ProductRow>
                    {AllProducts.map(product => {
                        const details = getProductDetails(product)
                        return <ProductThumbnail key={details[0].name} name={details[0].name} images={details[0].images} />
                    })}
                </ProductRow>
                <ProductAd />
                <FeaturedShelf />
                <ProductAd2 />
                <ProductRow>
                    {AllProducts.map(product => {
                        const details = getProductDetails(product)
                        return <ProductThumbnail key={details[0].name} name={details[0].name} images={details[0].images} />
                    })}
                </ProductRow>

            </Wrapper>
        </>
    )
}


const Wrapper = styled.section`
    margin: 2rem 0;
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;

`
const ProductRow = styled.div`
    min-height: 45px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    //overflow-x: scroll;
    flex-wrap: wrap;
`
const AdContent = styled.div`
    margin: 2rem 2rem;
    background-color: ${colors.pinkie};
    min-height: 60px;
    border-radius: 16px;
    padding: 16px;
    box-shadow: 4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38);
    :hover{
        cursor: pointer;
    }
`
const Title = styled.h2`
    font-family: ${berkshire.style.fontFamily};
    font-size: 32px;
`
const Description = styled.p`
    font-family: ${pangolin.style.fontFamily};
    font-size: 18px;
    line-height: 1.5;
`

