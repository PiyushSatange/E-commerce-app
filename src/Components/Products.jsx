import React from 'react'
import styled from 'styled-components'
import Product from './Product'
import { popularProducts } from '../data'
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = () => {
  return (
    <Wrapper>
        {popularProducts.map((item) => (
          <Link to={"/Item"}>
            <Product item={item} key={item.id}/>
            </Link>
        ))}
    </Wrapper>
  )
}

export default Products;