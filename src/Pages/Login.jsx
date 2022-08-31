import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-image: url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"), linear-gradient(#AABBCC, #B7CCA9);
    background-size: cover;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 25%;
    height: 40%;
    background-color: White;
    padding: 20px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
`

const Title = styled.h1`
    margin: 0 0 0 0;
    font-weight: 500;
`

const Form = styled.div`
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const Input = styled.input`
    width: 70%;
    height: 30px;
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
    cursor: pointer;
`

const Link = styled.a`
    margin-top: 5px;
    color: black;
    font-size: 11px;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
                <Title>Log In</Title>
                <Form>
                    <Input placeholder="user name" />
                    <Input placeholder="password" />
                </Form>
                <Button>Log In</Button>
                <Link href="#">DO NOT REMEMBER THE PASSWORD?</Link>
                <Link href="#">CREATE A NEW ACCOUNT</Link>
            </Wrapper>
    </Container>
  )
}

export default Login