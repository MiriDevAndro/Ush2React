import React from 'react'
import { Container } from 'react-bootstrap'
import Line from './Line'

function Menu() {
  return (
    
    <Container className='d-flex m-5 ' id='menu'>
        
        <div className='m-4'>

        
        <h1>Our Menu</h1>
        <h4>Bread Basket</h4>
        <p>
        Assortment of fresh baked fruit breads and muffins 5.50
        </p></div>
        <img className='w-50 ' src='https://www.w3schools.com/w3images/tablesetting.jpg'></img>
    </Container>
  )
}

export default Menu
