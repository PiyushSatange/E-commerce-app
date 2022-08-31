import React from 'react'
import Navbar from './../Components/Navbar';
import Footer from './../Components/Footer';
import NewsLetter from './../Components/NewsLetter';
import Announcement from './../Components/Announcement';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;   
`

const MainContainer = styled.div`
  width: 95%;
  margin: auto;
`

const Title = styled.h1`
  text-align: center;
  font-weight: 100;
`
const ButtonsBar = styled.div`
  display: flex;
  justify-content: space-between;
`
const MiddleButtonBar = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
`

const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: ${props => props.position === "Right" ? "flex-end" : "flex-start"};
`

const A = styled.a`
  color: black;
  font-weight: bold;
`
const Button = styled.button`
  font-weight: bold;
  background-color: ${props => props.buttonType === "checkout" ? "black" : "transparent"};
  color: ${props => props.buttonType === "checkout" ? "white" : "black"};
  width: 50%;
  height: 40px;
`


const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
`
const ItemBox = styled.div`
  flex: 3;
`
const Item = styled.div`
  border-bottom: 1px solid lightgray;
  display: flex;
  height: 20vh;

`
const ImgContainer = styled.div`
  flex: 1;
`
const Image = styled.img`
  height: 100%;
`
const DescContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
const PriceContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Summary = styled.div`
  flex: 1;
  border: 1px solid lightgray;
  border-radius: 10px;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 15px;
`
const STitle = styled.h3`
  margin: 0;

`
const CalculationRow = styled.div`
  display: flex;
  justify-content: space-between;
`
const Text = styled.div``
const Total = styled.h3`
  margin: 0;
`
const SButton = styled.button`
  background-color: black;
  color: white;
  height: 35px;
`
const ProductName = styled.p`
  margin:0;
`
const ProductID = styled.p`
margin: 0;
`
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${props => props.color};
  border-radius: 50%;

`
const ProductSize = styled.p`
margin: 0;
`
const Bold = styled.b`
`

const SignButton = styled.button`
  height: 30px;
  width: 30px;
  background-color: transparent;
  border: none;
  font-weight: bold;
  font-size: 25px;
  cursor: pointer;
`
const Count = styled.p`
  margin: 0 4px;
`
const CountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Price = styled.h3`
  margin: 3px 0 0 0;
  font-size: 30px;
  font-weight: 100;
`
const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <MainContainer>
        <Title>YOUR BAG</Title>
        <ButtonsBar>
         
          <ButtonContainer position={"Left"}>
            <Button buttonType={"shopping"}>
            <Link to={"/"} style={{color: "black", textDecoration:"none"}}>CONTINUE SHOPPING</Link></Button>
          </ButtonContainer>
          
          <MiddleButtonBar>
            <A href="#">Shopping Bag(2)</A>
            <A href="#">Your Wishlist(0)</A>
          </MiddleButtonBar>
          <ButtonContainer position={"Right"}>
            <Button buttonType={"checkout"}>CHECKOUT NOW</Button>
          </ButtonContainer>
        </ButtonsBar>
        <Wrapper>
          <ItemBox>
            <Item>
              <ImgContainer>
                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
              </ImgContainer>
              <DescContainer>
                <ProductName><Bold>Product: </Bold>HAKURA T-SHIRT</ProductName>
                <ProductID><Bold> ID:</Bold> 9836475129</ProductID>
                <ProductColor color={"#969893"}></ProductColor>
                <ProductSize><Bold>Size:</Bold> 12</ProductSize>
              </DescContainer>
              <PriceContainer>
                <CountContainer>
                  <SignButton>+</SignButton>
                  <Count>1</Count>
                  <SignButton>-</SignButton>
                </CountContainer>
                <Price>
                  30$
                </Price>
              </PriceContainer>
            </Item>
            <Item>
              <ImgContainer>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
              </ImgContainer>
              <DescContainer>
                <ProductName><Bold>Product: </Bold>JESSIE THUNDER SHOES</ProductName>
                <ProductID><Bold> ID:</Bold>8293746377</ProductID>
                <ProductColor color={"#2a2b30"}></ProductColor>
                <ProductSize><Bold>Size:</Bold>XL</ProductSize>
              </DescContainer>
              <PriceContainer>
                <CountContainer>
                  <SignButton>+</SignButton>
                  <Count>2</Count>
                  <SignButton>-</SignButton>
                </CountContainer>
                <Price>
                  20$
                </Price>
              </PriceContainer>
            </Item>
          </ItemBox>
          <Summary>
            <STitle>ORDER SUMMARY</STitle>
            <CalculationRow>
              <Text>Subtotal</Text>
              <Text>$50</Text>
            </CalculationRow>
            <CalculationRow>
              <Text>Estimated Shipping</Text>
              <Text>$3.0</Text>
            </CalculationRow>
            <CalculationRow>
              <Text>Shopping Discount</Text>
              <Text>$7</Text>
            </CalculationRow>
            <CalculationRow>
              <Total>Total</Total>
              <Total>$63</Total>
            </CalculationRow>
            <SButton>CHECKOUT NOW</SButton>
          </Summary>
        </Wrapper>
      </MainContainer>
      <NewsLetter />
      <Footer />
    </Container>
  )
}

export default Cart