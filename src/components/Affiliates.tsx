"use client"
import React from 'react'
import { styled } from 'styled-components'
import { berkshire, inter } from '../../utils/fonts'

export default function Affiliates() {


    return (
        <Wrapper>

            <Heading>Join the Candleicious Affiliate Program</Heading>



            <Title>Become a Candleicious Affiliate: Earn Money and Delight in Exclusive Rewards!</Title>

            <Description>Are you passionate about candles and eager to share the joy they bring? Join our Candleicious Affiliate Program
                and
                embark on a rewarding journey where you can earn money while spreading the enchantment of our artisanal candles!
            </Description>

            <Description>As a Candleicious Affiliate, you`ll have the opportunity to earn up to 10% commission on each sale made using
                your
                unique affiliate code. Imagine, a $100 sale could earn you $10! It`s a fantastic way to turn your love for
                candles
                into a lucrative venture.
            </Description>

            <Description>But that`s not all – our Affiliate Program comes with exciting perks. When your affiliate code is used five
                times,
                you`ll receive a featured candle, handpicked by our experts, delivered right to your doorstep each month.
                Experience the delight of discovering new scents and indulging in the ambiance of our exquisite creations.
            </Description>

            <Description>Joining our Affiliate Program is simple. Just sign up, receive your personalized affiliate code, and share it
                with
                your friends, family, and followers. As they embrace the enchantment of Candleicious, you`ll earn commissions
                and
                unlock incredible rewards along the way.
            </Description>

            <Description>Don`t miss out on this exceptional opportunity to be part of the Candleicious family, where your passion for
                candles
                can ignite a rewarding and fulfilling journey. Join our Affiliate Program today and let your love for candles
                shine
                while earning money and indulging in delightful surprises!
            </Description>

            <Description>To become a Candleicious Affiliate and start earning, visit our website or reach out to our team at [affiliate
                contact information]. We can`t wait to welcome you to our affiliate community!
            </Description>

            <Description>Illuminate your world,</Description>
            <Description>The Candleicious Team</Description>

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
