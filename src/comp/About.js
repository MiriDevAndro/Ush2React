import React from 'react'
import { Container } from 'react-bootstrap'
import Line from './Line'

function About() {
  return (
    
    <Container className='d-flex m-5 ' id='about'>
        <img className='w-50 ' src='https://www.w3schools.com/w3images/tablesetting2.jpg'></img>
        <div className='m-4'>

        
        <h1>About Catering</h1>
        <h4>Tradition since 1889</h4>
        <p>
        The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.
        </p>
        <p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p></div>
    </Container>
  )
}

export default About
