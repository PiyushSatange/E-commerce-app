import React from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Navbar from '../Components/Navbar'
import Products from '../Components/Products'
import NewsLetter from '../Components/NewsLetter'
import Footer from '../Components/Footer'


const Container = styled.div`
  width: 100%;
`
const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 50px;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
  display: flex;
  align-items: center;
`
const Sort = styled.div`
display: flex;
align-items: center;
`
const Text = styled.p`
  margin-left: 20px;
  font-weight: bold;
  font-size: 20px;
`
const Select = styled.select`
  margin: 0 20px;
  height: 30px;
`
const Option = styled.option``
const ProductItems = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Dresses</Title>
        <FilterContainer>
          <Filter>
            <Text>Filter Product : </Text>
            <Select>
              <option disabled selected>Color</option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
            </Select>
            <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            </Select>
          </Filter>
          <Sort>
            <Text>Sort Product :</Text>
            <Select>
              <Option>Newest</Option>
              <Option>Price (asc)</Option>
              <Option>Price (desc)</Option>
            </Select>
          </Sort>
        </FilterContainer>
        <Products/>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}

export default ProductItems;