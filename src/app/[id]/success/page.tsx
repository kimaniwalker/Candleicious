"use client"
import React from 'react'
import { styled } from 'styled-components'
import { useCartContext } from '../../../../utils/context/cart'
import { berkshire, inter } from '../../../../utils/fonts'

import { useQuery, useQueryClient } from 'react-query'

export default function SuccessPage() {

    const { clearCartItems } = useCartContext()
    const queryClient = useQueryClient()

    React.useEffect(() => {
        clearCartItems()
        queryClient.invalidateQueries('user')
    }, [])

    return (
        <>
            <Wrapper>




                <Heading>Dear Valued Customer,</Heading>


                <Message>
                    Thank you so much for supporting Candleicious! We truly appreciate your business and trust in our handmade candles to bring warmth and serenity to your space.
                </Message>
                <Message>
                    Your order means a lot to us, and we are committed to ensuring your complete satisfaction. If you have any questions or concerns, please don`t hesitate to reach out to us via email at <b>admin@kustomcharmz.com</b>. Our dedicated team is here to assist you and address any inquiries you may have.
                </Message>
                <Message>
                    Rest assured that we are working diligently to fulfill your order as soon as possible. Due to the meticulous craftsmanship that goes into each candle, it may take up to 2 weeks to complete and ship your order. We kindly ask for your patience during this time, as we strive to maintain the highest quality standards for every Candleicious product.
                </Message>
                <Message>
                    We also want to extend an invitation for you to become a VIP member of Candleicious. By joining our VIP membership program, you`ll gain access to exclusive deals, discounts, and special promotions. As a VIP member, you`ll be the first to know about our new releases and receive additional perks as a token of our appreciation for your continued support.
                </Message>
                <Message>
                    Once again, thank you for choosing Candleicious. Your loyalty and trust mean the world to us. We are committed to creating exceptional candles that enhance your ambiance and bring joy to your life. We look forward to serving you and brightening your moments.
                </Message>
                <Message>
                    Warmest Regards,
                </Message>

                <Heading as="h4">Tia & Kimani</Heading>
                <Heading as="h5">Candleicious Team</Heading>
            </Wrapper>

        </>
    )
}

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    padding: 1rem;
    flex-direction: column;

`

const Message = styled.p`
    font-family: ${inter.style.fontFamily};
    font-size: 18px;
`
const Heading = styled.h2`
    font-family: ${berkshire.style.fontFamily};
    font-size: 24px; 
`
