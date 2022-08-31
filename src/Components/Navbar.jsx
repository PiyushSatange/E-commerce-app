import React from 'react'
import styled from 'styled-components'
import { Badge } from '@mui/material';
import { SearchOutlined , ShoppingCartOutlined } from '@mui/icons-material'
import { Link } from "react-router-dom";


const Container = styled.div`
    height: 50px;
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
    font-size: 18px;
    font-weight: bold;
`;

const SearchContainer = styled.div`
    display: flex;    
    align-items: center;
    border: 1px solid gray;
    margin: 12px;
    border-radius: 5px;
    height: 30px;
    width: 60%;
`;

const Input = styled.input`
    flex: 4;
    border: none;
    height: 95%;
    width: 100%;
`;

const Button = styled.button`
    flex: 1;
    background-color: black;
    color: white;
    height: 100%;
    cursor: pointer;
`

const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.h1`
    font-weight: bolder;
    font-size: 40px;
    color: black;

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
    color: gray;

    &:hover{
        color: black;
    }
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Button><SearchOutlined/></Button>
                    </SearchContainer>
                </Left>
                <Center>
                <Link to={"/"} style={{textDecoration: "none"}}>
                    <Logo>LAMA.</Logo>
                </Link>
                </Center>
                <Right>
                <Link to={"/Rejester"} style={{textDecoration: "none"}}>     
                    <MenuItem>REGISTER</MenuItem>
                    </Link>
                    <Link to={"/Login"} style={{textDecoration: "none"}}>
                    <MenuItem>LOG IN</MenuItem>
                    </Link>
                    <Link to={"/Cart"}>
                    <MenuItem>
                        <Badge badgeContent={2} color="primary">
                            <ShoppingCartOutlined style={{ color: "black" }} />
                        </Badge>
                    </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>

    )
}

export default Navbar;