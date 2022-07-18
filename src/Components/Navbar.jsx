import React from 'react'
import styled from 'styled-components'
import {FaSearch} from "react-icons/fa";
import {FaShoppingCart} from "react-icons/fa"

const Container = styled.div`
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 50px
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    padding-left: 13px;
    cursor: pointer;
    font-weight: bold;
`;

const SearchContainer = styled.div`
    border: 2px solid #d5d5d5;
    margin: 12px;
    padding: 5px 12px 5px 30px;
`;

const Input = styled.input`
    border: none;
    height: 20px;


`;

const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.h1`
    font-weight: bolder;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 20px;
`;

const MenuItem = styled.div`
    cursor: pointer;
    margin-left: 25px;
    font-weight: bold;
`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <FaSearch />                
                </SearchContainer>
            </Left>
            <Center>
                <Logo>LAMA.</Logo>
            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>LOG IN</MenuItem>
                <MenuItem><p><FaShoppingCart/></p></MenuItem>
                
            </Right>
        </Wrapper>
    </Container>

  )
}

export default Navbar