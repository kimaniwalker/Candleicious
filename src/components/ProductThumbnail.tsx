"use client"
import React from 'react'
import styled from 'styled-components';
import { ProductDetailsProps, ProductThumbnailProps } from '../../utils/types';
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { inter } from '../../utils/fonts';

export default function ProductThumbnail({ images, name }: ProductThumbnailProps) {

    const productImage = images ? images[0] : ''
    const router = useRouter()



    return (
        <>
            <Wrapper>
                <Card
                    onClick={() => router.push(`/name?name=${name}`)}>
                    <ImageWrapper>
                        <Image src={productImage} fill alt={name} />
                    </ImageWrapper>
                </Card>
                <Name>{name}</Name>
                <Price>$6 - 25</Price>
            </Wrapper>
        </>
    )
}

const Name = styled.h3` 
    font-family: ${inter.style.fontFamily};
    font-weight: 400;
    font-size: 1.25rem;
`
const Price = styled.h4` 
    font-family: ${inter.style.fontFamily};
    font-weight: 300;
    font-size: 1rem;
    margin: 0;
`
const Card = styled.div`
    border-radius: 8px;
    box-shadow: 4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38);
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 8px;
    :hover {
        cursor: pointer;
        box-shadow: 4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.39);
        transition: all .8s ease;

    }
    `
const ImageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    border-radius: 8px;
    width: 250px;
    height: 250px;
    position: relative;
    object-fit: cover;
    overflow: hidden;

    @media(max-width: 768px) {
    height: 300px;
    width: 300px;
  }
    `
const Wrapper = styled.div`
    display: flex;
    margin: 1rem 2rem;
    flex-direction: column;
`
