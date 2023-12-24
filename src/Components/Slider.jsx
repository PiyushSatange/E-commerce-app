import React from "react";
import styled from "styled-components";
import {ArrowBackIosNewOutlined, ArrowForwardIosOutlined} from "@mui/icons-material";
import { sliderItems } from "../data";
import { useState } from "react";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`;

const Arrow = styled.div`
    height: 40px;
    width: 40px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    ${props => props.direction === "left" ? {left:"20px"} : {right:"20px"}};
    cursor: pointer;
    z-index:2;
`
const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    transition: all 1s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
    width:100vw;
    height:100vh;
    display: flex;
    align-items: center;
    background-color: ${props=> props.bg};

`

const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Image = styled.img`
    height: 100%;
`

const InfoContainer = styled.div`
    flex: 2;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    text-align: center;
`

const Title = styled.h1`
    font-size: 100px;
    margin: 0 0 10px 0;
`

const Info = styled.p`
    letter-spacing: 5px;
    font-size: 30px;
    margin: 20px;
`
const Button = styled.button`
    background-color: transparent;
    cursor: pointer;
    width: 200px;
    height: 50px;
    font-size: 20px;
    font-weight: bolder;
    margin-top: 40px;
`
export const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
        }
        else{
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0);
        }
    };

    return(
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowBackIosNewOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item)=>(
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} alt="Not Loading"/>
                        </ImgContainer>
                        <InfoContainer>
                            <Title>
                                {item.title}
                            </Title>
                            <Info>
                                {item.info}
                            </Info>
                            <Button>
                            SHOP NOW
                            </Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction = "right" onClick={()=>handleClick("right")}>
                <ArrowForwardIosOutlined />
            </Arrow>
        </Container>
    )
};

export default Slider;