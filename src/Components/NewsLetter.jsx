import {Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 40vh;
    background-color: #ffb6c126;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    text-align: center;
    width: 40%
`

const Title = styled.h1`
font-size: 60px;
margin: 0;
`
const Info = styled.p`
font-size: 25px;
`
const InputContainer = styled.div`
background-color: white;
display: flex;
border: 1px solid lightgray;
margin: 5px;
height: 40px;
`
const TextInput = styled.input`
flex: 8;
border: none;
`
const Button = styled.button`
flex: 1;
background-color: teal;
border: none;
color: white;
`

const NewsLetter = () => {
  return (
    <Container>
        <Wrapper>
            <Title>NewsLetter</Title>
            <Info>Get daily update of your fevorite product</Info>
            <InputContainer>
                <TextInput placeholder='Your Email'/>
                <Button>
                    <Send/>
                </Button>
            </InputContainer>
        </Wrapper>
    </Container>
  )
}

export default NewsLetter