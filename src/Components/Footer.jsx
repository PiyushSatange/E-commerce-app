import React from 'react'
import styled from 'styled-components'
import {Facebook, Instagram, Twitter, Pinterest, LocationOn, Call, Mail} from '@mui/icons-material'

const Container = styled.div`
height: 35vh;
width: 100%;
display: flex;
justify-content: space-between;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-right: 20px;
`

const Title = styled.h1`
    font-size: 40px;
    margin-left: 20px;
`
const Info = styled.div`
    font-weight: bold;
    margin: 0 0 10px 20px;
`
const IconContainer = styled.div`
    display:flex;
    width: 100%;
    margin: 15px 0 0 20px;
`
const Icon = styled.div`
    width: 40px;
    height: 40px;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.color};
    color: white;
    border-radius: 50%;
    margin-right: 20px;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover{
        transform: scale(1.2);
    }
`

const Center = styled.div`
flex: 1
`

const CenterTitle = styled.h3`
font-size: 25px;
    margin-left: 40px;
`
const ListItems = styled.ul`
   list-style: none;
   display: flex;
   flex-wrap: wrap;
`
const Items = styled.li`
    width: 50%;
    margin: 5px 0;
    font-weight: bold;
    cursor: pointer;
`
const Right = styled.div`
flex: 1
`
const RightTitle = styled.h3`
font-size: 25px;
margin-left: 40px;
`
const ContactContainer = styled.div`
    margin-left: 35px;
`
const Contact = styled.div`
    display: flex;
    align-items: center;
`

const Text = styled.p`
    font-weight: bold;
    margin-left: 20px;
`

const CardContainer = styled.img`
    margin: 0 0 0 40px;
`
const Footer = () => {
  return (
    <Container>
        <Left>
            <Title>LAMA.</Title>
            <Info>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationin some form. by injected humour, or randamised words which don't look even slightly believable.</Info>
            <IconContainer>
                <Icon color="#4867AA"><Facebook style={{fontSize: "35px"}}/></Icon>
                <Icon color="#F7006F"><Instagram style={{fontSize: "35px"}}/></Icon>
                <Icon color="#1DA1F2"><Twitter style={{fontSize: "35px"}}/></Icon>
                <Icon color="#FD002C"><Pinterest style={{fontSize: "35px"}}/></Icon>
            </IconContainer>
        </Left>
        <Center>
            <CenterTitle>Useful Links</CenterTitle>
            <ListItems>
                <Items>Home</Items>
                <Items>Man Fashion</Items>
                <Items>Accessories</Items>
                <Items>Order Tracking</Items>
                <Items>Wishlist</Items>
                <Items>Cart</Items>
                <Items>Woman Fashion</Items>
                <Items>My Account</Items>
                <Items>Wishlist</Items>
                <Items>Terms</Items>
            </ListItems>
        </Center>
        <Right>
            <RightTitle>Contact</RightTitle>
            <ContactContainer>
                <Contact>
                    <LocationOn/>
                    <Text>622 Shegoan Nake, South Mumbai, 444604</Text>
                </Contact>
                <Contact>
                    <Call/>
                    <Text>+911234567890</Text>
                </Contact>
                <Contact>
                    <Mail/>
                    <Text>emailaddress@gmail.com</Text>
                </Contact>
            </ContactContainer>
            <CardContainer src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer