"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { useQuery } from 'react-query'
import { styled } from 'styled-components'
import { colors } from '../../utils/colors'
import { useAffiliateContext } from '../../utils/context/affiliate'
import { useCartContext } from '../../utils/context/cart'
import { fetchUserData } from '../../utils/fetchers/fetch'
import { berkshire, inter, pangolin } from '../../utils/fonts'
import useHandlePayment from '../../utils/hooks/useHandlePayment'




export default function Checkout() {

    const { isLoading, isError, data, error } = useQuery('user', fetchUserData)
    const { cart } = useCartContext()
    const { affiliateCode } = useAffiliateContext()
    const { calculateShipping, calculateTotal, checkout, formatBody } = useHandlePayment()
    const userCart = cart ? cart : []
    const total = calculateTotal(userCart)
    const shippingTotal = calculateShipping(userCart)
    console.log({ total })
    console.log({ shippingTotal })
    const subtotal = Number(total.toFixed(2)) + Number(shippingTotal.toFixed(2))
    const router = useRouter()

    const handlePay = async () => {
        const body = formatBody(cart, data, affiliateCode, total, shippingTotal)
        console.log({ body })
        const url = await checkout(body)
        router.push(url)
    }



    return (
        <Wrapper>
            <TotalRow>
                <Heading>Total</Heading>
                <Heading>${subtotal.toFixed(2)}</Heading>
            </TotalRow>
            <div>
                <Divider />
            </div>
            <div>
                <DisclaimerHeading>Disclaimer</DisclaimerHeading>
                <Disclaimer>
                    All orders are subject to availability. We strive to fulfill every order promptly and efficiently. Each candle is meticulously handmade with care and attention to detail. It typically takes up to 2 weeks to fulfill your order from the date of purchase. However, please note that during peak seasons or due to unforeseen circumstances, there might be a slight delay in order processing. We will do our best to notify you of any delays.
                </Disclaimer>
                <Disclaimer>
                    If you have any special request, please contact us at <b>admin@kustomcharmz.com </b>. We will be happy to accomodate your request if possible. For more infomation regarding our terms and conditions , you can view them here.
                </Disclaimer>
            </div>

            <ButtonWrapper>
                <div>
                    <Divider />
                </div>
                <Price>Item total: ${total.toFixed(2)}</Price>
                <Price>Shipping cost: ${shippingTotal.toFixed(2)}</Price>
                <Button onClick={handlePay} bgcolor={colors.success}>Checkout</Button>
            </ButtonWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: ${colors.pinkie};
    background: rgb(255,170,171);
background: radial-gradient(circle, rgba(255,170,171,1) 6%, rgba(199,210,255,1) 99%);
    max-width: 600px;
    border-radius: 16px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    box-shadow: 4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38);

    @media(max-width: 768px) {
      
  }
`
const Heading = styled.h2`

    font-family: ${berkshire.style.fontFamily};
    font-size: 32px;
`
const Price = styled.h3`

    font-family: ${pangolin.style.fontFamily};
    font-size: 18px;
`
const Button = styled.button <{ bgcolor: string }>`
width: 100%;
  background-color: ${props => props.bgcolor};
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: block;
  text-align: center;
  text-transform: uppercase;
  font-family: ${inter.style.fontFamily};
  font-weight: 900;
    font-size: 18px;
    box-shadow: 4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38);
    

&:hover {
    box-shadow: 4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.45);
    
}`;

const Divider = styled.hr`
    border-top: 4px solid #bbb;
  border-radius: 5px;
`
const TotalRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
`


const Disclaimer = styled.p`
    font-family: ${pangolin.style.fontFamily};
    font-size: 18px;
    line-height: 1.6;
  
`
const DisclaimerHeading = styled.h4`
    font-family: ${pangolin.style.fontFamily};
    font-size: 24px;
    font-weight: 300;
`