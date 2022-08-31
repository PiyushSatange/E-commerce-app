import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-image: url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"), linear-gradient(#AABBCC, #B7CCA9);
    background-size: cover;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 50%;
    height: 50%;
    background-color: White;
    padding: 20px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
`

const Title = styled.h1`
    margin: 0 0 20px 0;
    font-weight: 500;
`

const Form = styled.div`
    height: 60%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Input = styled.input`
    width: 40%;
    height: 30px;
`

const Policy = styled.p`
 margin: 0 0 10px 0;
`
const B = styled.b`

`

const Button = styled.div`
    background-color: teal;
    color: white;
    width: 200px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
`


const Rejester = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>

                    <Input placeholder="name" />

                    <Input placeholder="last name" />

                    <Input placeholder="user name" />

                    <Input placeholder="email" />

                    <Input placeholder="password" />

                    <Input placeholder="confirm password" />

                </Form>
                <Policy>By creating an account I consent to the processing of my personal data in accordance with the <B>PRIVACY POLICY</B></Policy>
                <Button>CREATE</Button>
            </Wrapper>
        </Container>
    )
}

export default Rejester