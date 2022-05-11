import React from 'react'

import styled from 'styled-components'
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'


const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
background-color: gray
`

const Arrow = styled.div`
width: 50px;
height: 50px
background-color: black;
border-radius:  50%;

`

const Slider = () => {
  return (
   <Container>      
       <Arrow>
           <AiOutlineArrowLeft/>
       </Arrow>
        <Arrow>
          <AiOutlineArrowRight/>
       </Arrow>
   </Container>
  )
}

export default Slider