import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { styled } from 'styled-components'
import { Featured } from '../../data/Featured'
import { ProductDetails } from '../../data/ProductDetails'
import FeaturedThumbnail from './FeaturedThumbnail'
import { SeductionLineProducts } from '../../data/Products'

export default function FeaturedShelf() {

    const AllProducts = SeductionLineProducts.name
    const router = useRouter()
    const getProductDetails = (product: string) => {
        return ProductDetails.filter(item => item.name === product)
    }
    const FeaturedItem = getProductDetails(AllProducts[0])
    const handleFeaturedItem = () => {
        router.push('/products?name=Fruity Loops')
    }

    return (
        <Wrapper>
            <ProductRow>
                <LargeCol>
                    <ImageWrapper onClick={handleFeaturedItem}>
                        <Image fill src="/products/2.png" alt="Featured product" />
                    </ImageWrapper>
                </LargeCol>
                <LargeCol>
                    <ProductCol>
                        {AllProducts.slice(0, 4).map(product => {
                            const details = getProductDetails(product)
                            return <FeaturedThumbnail key={details[0].name} name={details[0].name} images={details[0].images} />
                        })}
                    </ProductCol>
                </LargeCol>
            </ProductRow>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
`
const ProductRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 1080px) {
        flex-direction: column;
    }
`
const LargeCol = styled.div`
    width: 100%;
    max-width: 600px;
    margin: 2rem 0;
    display: flex;
    justify-content: center;    
`
const ImageWrapper = styled.div`
    width: 100%;
    height: 700px;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: 4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38);

    @media(max-width: 768px) {
    height: 300px;
    width: 300px;
    }
    :hover {
        cursor: pointer;
    }
`
const ProductCol = styled.div`
    min-height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    //overflow-x: scroll;
    flex-wrap: wrap;
`


