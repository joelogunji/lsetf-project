import React from 'react'
import styled from "styled-components"

function Contact() {
  return (
    <Div>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1>CONTACT LSETF</h1>
      <br/>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11323.94753834271!2d3.367541792393202!3d6.602833837489731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b924c2c655555%3A0xe829abde3ebb9728!2sLagos%20State%20Employment%20Trust%20Fund!5e0!3m2!1sen!2sus!4v1649703402920!5m2!1sen!2sus" width="600" height="450"></iframe>
      <br/>
      <h3>16, Billings way, Oregun, 101233, Ikeja, Lagos, Nigeria</h3>
      
    </Div>
  )
}

export default Contact


const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`