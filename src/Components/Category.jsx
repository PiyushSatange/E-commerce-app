import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'

const Container = styled.div`
    display: flex;
    overflow: hidden;
    justify-content: space-between;
`


export const Category = () => {
  return (
    <Container>
        {categories.map((item) => (
            <CategoryItem item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Category;