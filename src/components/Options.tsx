"use client"
import React from 'react'
import { styled } from 'styled-components'
import { pangolin } from '../../utils/fonts'
type OptionsProps = {
    sizes: string[]
    setSize: (value: string) => void
}
export default function Options({ sizes, setSize }: OptionsProps) {

    return (
        <Wrapper>

            <Select defaultValue="12oz" onChange={(e) => setSize(e.target.value)}>

                {sizes.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                ))}



            </Select>



        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`


const Select = styled.select`
  width: 100%;

  height: 35px;
  background: white;
  color: black;
  padding-left: 5px;
  font-size: 16px;
  border: 2px solid black;
  margin-left: 10px;
  margin-bottom: 1rem;
  border-radius: 16px;
  
  option {

      color: black;
      font-family: ${pangolin.style.fontFamily};
      
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const Item = styled.p`
    font-family: ${pangolin.style.fontFamily};
  
`