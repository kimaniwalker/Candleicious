"use client"
import React from 'react'
import { styled } from 'styled-components'
import { berkshire, inter } from '../../utils/fonts'

export default function Terms() {


    return (
        <Wrapper>
            <Heading>Candleicious - Terms and Conditions</Heading>
            <Title>Order Fulfillment:</Title>
            <ol>
                <ListItem>All orders are subject to availability. We strive to fulfill every order promptly and efficiently.</ListItem>
                <ListItem>Each candle is meticulously handmade with care and attention to detail.</ListItem>
                <ListItem>It typically takes up to 2 weeks to fulfill your order from the date of purchase. However, please note that
                    during peak seasons or due to unforeseen circumstances, there might be a slight delay in order processing.
                    We
                    will do our best to notify you of any delays.</ListItem>
            </ol>

            <Title>Product Information:</Title>
            <ol>
                <ListItem>Candleicious candles are handcrafted, resulting in slight variations in color, size, and texture. These
                    variations enhance the uniqueness and beauty of each candle.</ListItem>
                <ListItem>The product images on our website are for illustrative purposes only. The actual product may vary slightly
                    from the images displayed.</ListItem>
            </ol>

            <Title>Pricing and Payments:</Title>
            <ol>
                <ListItem>All prices on our website are listed in the currency specified and are subject to change without prior
                    notice.</ListItem>
                <ListItem>Payment is due at the time of placing your order. We accept major credit cards, debit cards, and other forms
                    of electronic payment. All payments are processed securely.</ListItem>
            </ol>

            <Title>Shipping and Delivery:</Title>
            <ol>
                <ListItem>Candleicious ships to the address provided by the customer during the ordering process. It is the customer's
                    responsibility to ensure the accuracy of the shipping information.</ListItem>
                <ListItem>Shipping costs, if applicable, will be displayed during the checkout process. Any additional customs duties,
                    taxes, or fees imposed by the destination country are the responsibility of the customer.</ListItem>
                <ListItem>We aim to deliver your order within the estimated timeframe; however, please note that shipping times may
                    vary depending on the destination and other factors beyond our control.</ListItem>
                <ListItem>Candleicious is not responsible for any delays, damages, or losses incurred during transit. However, we will
                    work with you and the shipping carrier to resolve any issues to the best of our ability.</ListItem>
            </ol>

            <Title>Returns and Refunds:</Title>
            <ol>
                <ListItem>Due to the nature of our handmade products, we do not accept returns or exchanges unless the items arrive
                    damaged or defective. If you receive a damaged or defective item, please contact us within 48 hours of
                    receiving your order, providing details and accompanying photographs.</ListItem>
                <ListItem>We reserve the right to request that the damaged or defective item be returned to us before issuing a refund
                    or replacement.</ListItem>
                <ListItem>If a refund is approved, it will be processed within a reasonable timeframe and credited to the original
                    payment method used during the purchase.</ListItem>
            </ol>

            <Title>Intellectual Property:</Title>
            <ol>
                <ListItem>All intellectual property rights, including trademarks, logos, designs, and images, displayed on the
                    Candleicious website are the property of Candleicious or their respective owners. Any unauthorized use or
                    reproduction is strictly prohibited.</ListItem>
            </ol>

            <Title>Privacy Policy:</Title>
            <ol>
                <ListItem>Candleicious respects your privacy. Please refer to our separate Privacy Policy for detailed information on
                    how we collect, use, and protect your personal data.</ListItem>
            </ol>

            <Title>Governing Law and Jurisdiction:</Title>
            <ol>
                <ListItem>These terms and conditions are governed by the laws of Alabma. Any disputes arising out of or
                    relating to these terms and conditions shall be subject to the exclusive jurisdiction of the courts of Alabama.</ListItem>
            </ol>

            <Title>Contact Us:</Title>
            <Description>If you have any questions or concerns regarding these terms and conditions, please contact us at <b>admin@kustomcharmz.com</b> .</Description>
        </Wrapper>
    )
}

const Wrapper = styled.article`
    padding: 2rem;
`
const Heading = styled.h1`
    font-family: ${berkshire.style.fontFamily};
    font-size: 32px;
    margin: 4rem 0;
`
const Title = styled.h2`
    font-family: ${inter.style.fontFamily};
    font-size: 24px;
    font-weight: 400;
`
const Description = styled.p`
    font-family: ${inter.style.fontFamily};
    font-size: 18px;
`
const ListItem = styled.li`
   font-family: ${inter.style.fontFamily};
    font-size: 18px; 
`

