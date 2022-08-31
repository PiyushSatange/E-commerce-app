import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`   
  display: flex;
  width: 100vw;
  height: 70vh;

`

const Section = styled.div`
  flex : 1;
  margin: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(80%);
  cursor: pointer;
  transition: all 0.5s ease;
  z-index: 1;
  &:hover{
    filter: brightness(100%);
  }

`
const InfoContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  color: white;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const Title = styled.h1`
  z-index: 2;
`

const Button = styled.button`
border:none;
padding: 10px;
background-color: white;
color:gray;
cursor: pointer;
font-weight: 600;
transition: all 0.3s ease;
z-index: 2;
&:hover{
  transform: scale(1.2);
}
`

export const CategoryItem = ({item}) => {
  return (
    <Container>
      <Section>
      <Image src={item.img}/>
      <InfoContainer>
        <Title>
          {item.title}
        </Title>

        <Button>
          <Link to={"/ProductItems"} style={{color:"black", textDecoration:"none"}}>
            Shop Now
          </Link>
          </Button>
      </InfoContainer>
      </Section>
    </Container>

  )
}

export default CategoryItem;