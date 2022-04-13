import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import LSETFlogo from "./Images/Lsetf-logo.png"
import USADFlogo from "./Images/USADF-logo.png"


function Navbar() {
  
    const [click, setClick] = useState(false);

    const handClick = () => setClick(!click);

    return (
    <Contain>
        <NavContainer>
        <LeftLogos>
            <LSETFLogo src={LSETFlogo} />
            <USADFLogo src={USADFlogo}/>
        </LeftLogos>

        <MobileIcon onClick={handClick}>
                {click ?<FaTimes />:<FaBars />}
        </MobileIcon>
        <Links onClick={handClick} click={click}>
                <NavLinks to='/' >Home</NavLinks>
                <NavLinks to='/participants'>Participants</NavLinks>
                <NavLinks to='/about'>About</NavLinks>
                <NavLinks to='/contact'>Contact</NavLinks>
        </Links>
        </NavContainer>
    </Contain>
  

  )
}

export default Navbar


const Contain = styled.div`
display: flex;
justify-content: center;
width: 100%;
height: 100px;
box-shadow: 0px 4px 4px 4px rgba(225, 225, 225, 0.5);
z-index: 999;
position: fixed;
background-color: white;
backdrop-filter: blur
`
export const NavContainer = styled.div`
width: 90%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`

const LeftLogos = styled.div`
margin-left: 10px;
width: 22%;
display: flex;
justify-content: space-between;
`

const LSETFLogo = styled.img`
width: 150px;
@media screen and (max-width: 425px){
    width: 100px;
}
`

const USADFLogo = styled.img`
width: 70px;
@media screen and (max-width: 425px){
    width: 55px;
}
`

const Links = styled.div`
display: flex;
width: 600px;
justify-content: space-between;
align-items: center;
font-size: 18px;
font-weight: bold;
color: #0B3F88;
@media screen and (max-width: 880px){
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 95px;
    height: 80vh;
    width: 100%;
    justify-content: space-evenly;
    left: ${({click}) => (click ? 0 : '-100%')};
    transition: all 0.8s ease;
    opacity: 0.93;
    background: #003399;
    color: white;
    z-index: 900;
    border-radius: 0 25px 25px 0;
}`

const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 850px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
}
`
const NavLinks = styled(Link)`
        text-decoration: none;
        color: inherit;
        border-bottom: 2px solid transparent;
    &:hover{
        border-bottom: 2px solid #003399; 
        transition: all 4s ease;
    }
    @media screen and (max-width: 880px){
        border-bottom: 2px solid transparent;
    &:hover{
        border-bottom: 2px solid whitesmoke; 
        transition: all 4s ease;
    }
    }
`