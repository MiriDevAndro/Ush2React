import React from 'react'
import { Container } from 'react-bootstrap'

function Cont() {
  return (
    
    <Container className=' ' style={{textAlign:'start'}} id='contact'>

        <h1>Contact</h1>
        <h4>Tradition since 1889</h4>
        <p>
        We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us. </p>
        <h2>Catering Service, 42nd Living St, 43043 New York, NY</h2>
        <p>
        You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:
        </p>

        <form style={{display:'flex',flexDirection:'column'}}>
          <input className='m-2' name='name' type='text' placeholder='Name'></input>
          <input className='m-2' name='how' placeholder='How many people' type='number'></input>
          <input className='m-2' type='date'></input>
          <textarea className='m-2' placeholder='Message'></textarea>
          <input className='m-2 w-50' type='submit' value='SEND MESSAGE'></input>
        </form>
        
    </Container>
  )
}

export default Cont
