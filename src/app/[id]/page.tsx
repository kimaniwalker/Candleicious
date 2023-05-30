"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'
import { ProductDetails } from '../../../data/ProductDetails'
import Productimg from '@/components/ProductImages'
import styled from 'styled-components';
import ProductDescription from '@/components/ProductDescription'
import Options from '@/components/Options'
import { Products } from '../../../data/Products'
import Link from 'next/link'
import { colors } from '../../../utils/colors'
import { useCartContext } from '../../../utils/context/cart'


export default function ProductDetailsPage() {

    const params = useSearchParams()
    const query = params.get('name')
    const [selectedSize, setSelectedSize] = React.useState('12oz')
    const [price, setPrice] = React.useState(0)
    const { addToCart } = useCartContext()

    React.useEffect(() => {
        getPrice(selectedSize)
    }, [selectedSize])

    const getData = (product: string) => {
        return ProductDetails.filter(item => item.name === product)
    }
    const { available_sizes, prices } = Products
    const getPrice = (size: string) => {
        switch (size) {
            case '12oz':
                setPrice(Number(prices[4]))
                break;
            case '10oz':
                setPrice(Number(prices[3]))
                break;
            case '8oz':
                setPrice(Number(prices[2]))
                break;
            case '4oz':
                setPrice(Number(prices[1]))
                break;
            case 'wax':
                setPrice(Number(prices[0]))
                break;
        }
    }
    const data = getData(query!)
    const { name, images, description, disclaimer } = data[0]


    return (
        <>
            <Wrapper>
                <Row>
                    <Content>
                        <Productimg images={images} />
                    </Content>
                    <Content>
                        <ProductDescription size={selectedSize} name={name} description={description} disclaimer={disclaimer} price={price} />
                        <Options setSize={setSelectedSize} sizes={available_sizes} />
                        <Button onClick={() =>
                            addToCart({
                                name,
                                qty: 1,
                                size: selectedSize,
                                custom_message: '',
                                price: price
                            })
                        } bgcolor={colors.pinkie}>
                            Add To Cart
                        </Button>
                    </Content>
                </Row>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
margin: 0 auto;
`
const Content = styled.div`
display: flex;
flex-direction: column;
padding: 1rem;
`
const Row = styled.div`
    display: flex;
    flex-direction: row;
   @media(max-width: 768px) {
    flex-direction: column-reverse;

  }
`

const Button = styled.button <{ bgcolor: string }>`
width: 100%;
max-widtH: 300px;
  background-color: ${props => props.bgcolor};
  color: black;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: block;
  text-align: center;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  box-shadow: 4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38);
  text-transform: 'uppercase'

&:hover {
    background-color: ${colors.brownie};
}`;