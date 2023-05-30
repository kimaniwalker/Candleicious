'use client';
import React from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/colors'
import { inter, pangolin } from '../../utils/fonts'
import Image from 'next/image';
import { useCartContext } from '../../utils/context/cart';






export default function Footer() {



    return (
        <>


            <Wrapper>
                <Content>
                    <div onClick={() => null}>
                        <Image src="/logo.png" width={75} height={75} alt="logo" />
                    </div>
                    <div>
                        <DisclaimerText>Copyright KC CANDLE CO 2023</DisclaimerText>
                    </div>
                </Content>
            </Wrapper>

        </>
    )
}

const Wrapper = styled.section`
    min-height: 150px;   
    background-color: ${colors.apricot}; 
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background: rgb(255,170,171);
background: radial-gradient(circle, rgba(255,170,171,1) 6%, rgba(199,210,255,1) 99%);
    `
const Content = styled.div`
flex-wrap: wrap;
    max-width: 1280px;

    width: 100%;
    display: flex;
    justify-content: space-between;
`

const DisclaimerText = styled.p`
    color: dark;
    font-family: ${pangolin.style.fontFamily};
    font-size: 18px;
    text-align: center;
    
`
