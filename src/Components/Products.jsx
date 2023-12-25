import React from 'react'
import styled from 'styled-components'
import Product from './Product'
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({ProductData}) => {
  return (
    <Wrapper>
        {ProductData.map((item)=>(
          <Link to={"/Item"} key={item.pid}>
            <Product item={item}/>
          </Link>
        ))}
    </Wrapper> 
  )
}

export default Products;