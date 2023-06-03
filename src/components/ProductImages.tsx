"use client"
import React from 'react'
import styled from 'styled-components';
import Image from "next/image";

type ImagesProps = {
    images: string[]
}
export default function Productimg({ images }: ImagesProps) {

    const [main, setMain] = React.useState("")
    const largeImg = main || images[0]

    return (
        <>
            <Wrapper>


                <Col>
                    {images &&
                        <MainContainer>
                            <CustomImage src={largeImg} alt="product image"
                                fill />
                        </MainContainer>

                    }
                </Col>



                <Col>
                    {images.map((image, index) => (
                        <ImgContainer key={index} >
                            <Image
                                onClick={() => setMain(image)}
                                src={image} alt="product image"
                                width={100} height={100} />
                        </ImgContainer>
                    ))}

                </Col>
            </Wrapper>




        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`

const Col = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    max-width: 600px;
    flex-wrap: wrap;
`


const ImgContainer = styled.div`
    margin: 2rem 1rem;
    width: auto;
    position: relative;
    display: flex;
    flex-direction: row;   
    box-shadow: 4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.39);
    border-radius: 8px;
    overflow: hidden;

    :hover {
        cursor: pointer;
        box-shadow: 4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.39);
        transition: all .8s ease;
    }
`
const MainContainer = styled.div`
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    width: 450px;
    height: 450px;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.39);


   @media(max-width: 768px) {
    height: 300px;
    width: 300px;
    object-fit: cover;
  }
`
const CustomImage = styled(Image)`
    object-fit: cover;
`