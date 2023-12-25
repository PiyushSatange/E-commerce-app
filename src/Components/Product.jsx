import { AddShoppingCartOutlined, FavoriteBorderOutlined, SearchOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Icons = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 1.2s ease;

`

const Wrapper = styled.div`
    width: 330px;
    height: 300px;
    display: flex;
    background-color: rgb(250, 250, 250);
    position: relative;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
    transition: all 1.2s ease;

    &:hover{
        background-color: rgb(200, 200, 200);
    }

    &:hover ${Icons}{
        display: flex;
        opacity: 1;
    }
`
const Image = styled.img`
    width: 70%;
`

const Icon = styled.div`
    cursor: pointer;
    margin: 5px;
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.2);
    }
`
export const Product = ({ item }) => {
    return (
        <Wrapper>
            <Image src={item.purl} alt={item.pid}/>

            <Icons>
                <Icon>
                    <AddShoppingCartOutlined />
                </Icon>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Icons >
        </Wrapper >
    )
}

export default Product;