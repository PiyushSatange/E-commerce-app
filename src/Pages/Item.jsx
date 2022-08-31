import React from 'react'
import Navbar from './../Components/Navbar';
import { Announcement } from './../Components/Announcement';
import styled from 'styled-components';
import { Add, Remove } from '@mui/icons-material';
import Footer from './../Components/Footer';
import NewsLetter from './../Components/NewsLetter';

const Container = styled.div`
    width: 100%;
`
const Wrapper = styled.div`
    width: 90%;
    height: 80vh;
    margin: 30px auto;
    display: flex;
`
const Button = styled.div``
const ImageContainer = styled.div`
    flex: 1;
    `
const Image = styled.img`
    height: 100%;
    `
const DescContainer = styled.div`
    flex: 1;
    `
const Title = styled.h1`
    font-weight: 100;
    margin: 0 0 30px 0;
    `
const Desc = styled.p`
    margin-bottom: 40px;
    `
const Price = styled.h1`
    font-weight: 100;
    margin: 0 0 30px 0;
    `
const Specification = styled.div`
    display: flex;
    width: 60%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
`
const ColorContainer = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
`
const SizeContainer = styled.div`
    display: flex;
    width: 35%;
    margin-left: 20px;


`
const Text = styled.div`
    width: 40%;
    font-size: 20px;
`
const Colors = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
`
const Color = styled.div`
    width: 25px;
    height: 25px;
    background-color: ${props => props.color};
    border-radius: 50%;
`
const Select = styled.select`
    flex: 1;
`
const Option = styled.option``
const ButtonContainer = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
    align-items: center;
`
const NoOfItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;
`
const SignedButton = styled.button`
    height: 100%;
    width: 50px;
    font-size: 30px;
    border: none;
    background-color: transparent;
    cursor: pointer;
`
const CartButtonContainer = styled.button`
    height: 40px;
    border: 3px solid teal;
    background-color: transparent;
    font-weight: 1000;
    cursor: pointer;

    &:hover{
        background-color: #F9F9F9;
    }
`
const No = styled.h2`
    margin: 0 10px;
    font-weight: 600;
    border: 2px solid teal;
    padding:  0px 10px;;
    border-radius: 4px;
`
const Item = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImageContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg"></Image>
                </ImageContainer>
                <DescContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt doloribus illo autem magni eum magnam in, quia, repudiandae iusto id distinctio. Sed, id est? Porro ut officia saepe molestiae, aliquid vitae ratione blanditiis harum sit reprehenderit repellendus hic error autem dolores beatae inventore quo perferendis iste delectus asperiores? Eaque, eligendi.</Desc>
                    <Price>$20</Price>
                    <Specification>
                        <ColorContainer>
                            <Text>Color</Text>
                            <Colors>
                            <Color color={"#aebfc7"}></Color>
                            <Color color={"black"}></Color>
                            <Color color={"teal"}></Color>
                            </Colors>
                        </ColorContainer>
                        <SizeContainer>
                            <Text>Size</Text>
                            <Select>
                                <Option>M</Option>
                                <Option>L</Option>
                                <Option>XL</Option>
                                <Option>XXL</Option>
                                <Option>XXXL</Option>
                            </Select>
                        </SizeContainer>
                    </Specification>
                    <ButtonContainer>
                        <NoOfItems>
                            <SignedButton><Remove/></SignedButton>
                            <No>1</No>
                            <SignedButton><Add/></SignedButton>
                        </NoOfItems>
                        <CartButtonContainer>
                            <Button>ADD TO CART</Button>
                        </CartButtonContainer>
                    </ButtonContainer>
                </DescContainer>
            </Wrapper>
            <NewsLetter/>
            <Footer/>
        </Container>
    )
}

export default Item