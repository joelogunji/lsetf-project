import React from 'react'
import styled from "styled-components"
import Team from "./Images/team1-blur.jpg"
import Card from "./Card"

function Home() {

    const Intro = () => {
        document.getElementById("homedisplay").innerHTML = 
        "The Lagos State Employability Programme is geared towards increasing the employability of Lagosians by training selected persons in Software Engineering. The Employability Programme is sponsored by Lagos State Employment Trust Fund (LSETF) in partnership with the United States African Development Foundation. The 5th cohort training is being conducted by LoftyInc from 19/01/2022 to 13/04/2022. The 12 weeks long training program is being delivered through classroom and virtual sessions.  At the end of the training, all candidates will be evaluated and candidates who qualify shall be awarded a certification of completion."
    }

    const Lsesp = () => {
        document.getElementById("homedisplay").innerHTML = 
        "The LSETF Employability Support Project (LSESP), is designed to help tackle the unemployment scourge among the youths by helping them gain requisite knowledge and skill through vocational trainings and subsequently helping them get job placements. It aims to train 10,000 young people to gain skills in 6 sectors namely: Manufacturing, Hospitality, Entertainment, Construction, Health and Garment Making that will help place them in line for immediate employment. The first batch of youths which were trained at 8 vocational training centers across the state have graduated."
    }
    
    const Facilitator = () => {
        document.getElementById("homedisplay").innerHTML = 
        "The Software Training was facilitated by Mr. Samuel Kelechi. He studied Computer Science Engineering at ESCAE University, Benin Porto Novo, Republic of Benin. He has worked with organisations like EduPoint, Codelab, and Orange drugs limited. Mr. Samuel Kelechi is well experienced in Software Engineering and is talented with teaching/tutoring. He is the Facilitator for the 5th cohort of LSETF employability Software Engineering."
    }

    const Testimonial = () => {
        document.getElementById("homedisplay").innerHTML = 
        "LSETF/USADF have been so awesome for providing us with this sponsorship platform in software development that gives us a life of hope and freedom. Thank you also to our facilitator Mr Sam, loftyinc. God bless you all.......... 'Saliu Iyanu'"
    }

    const LoftyInc = () => {
        document.getElementById("homedisplay").innerHTML = 
        "grace"
    }

   

  return (
    <Contain>
        <NavBG></NavBG>
        <Header>LSETF/USADF EMPLOYABILITY PROGRAMME (SOFTWARE ENGINEERING)</Header>
        <Main>
            <MainCard>
            <MainLeft>
                <Button type="button" onClick={Intro}>Introduction</Button>
                <Button type="button" onClick={Lsesp}>LSESP</Button>
                <Button type="button" onClick={Facilitator}>Facilitator</Button>
                <Button type="button" onClick={Testimonial}>Testimonials</Button>
                <Button type="button" onClick={LoftyInc}>LoftyInc</Button>
                {/* <Button type="button" onClick={Gallery}>Gallery</Button> */}
            </MainLeft>
            <MainRight id="homedisplay"> <p>WELCOME TO LSETF</p> </MainRight>
            </MainCard>
        </Main>
        <Card/>
        <div style={{height:'100px', width:'100%'}}></div>
    </Contain>
  )
}

export default Home

const NavBG = styled.div`
height: 100px;
width: 100%;
`

const Contain = styled.div`
width: 100%;
background-color: #0B3F88;
color: white;
`

const Header = styled.div`
width: 100%;
font-size: 60px;
text-align: center;
padding-top: 20px;
padding-bottom: 30px;
`

const Main = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
padding-bottom: 30px;
`

const MainCard = styled.div`
width: 95%;
display: flex;
justify-content: space-between;
`

const MainLeft = styled.div`
width: 20%;
display: flex;
flex-direction: column;
`

const Button = styled.button`
padding: 40px 40px 40px 40px;
font-size: medium;
color: #0B3F88;
border-radius: 5px;
background-color: #FFFFFF;

@media screen and (max-width: 850px){
    padding: 5px 5px 5px 5px;
}
`

const MainRight = styled.div`
width: 75%;
border: 2px thin blue;
background-color: #FF0924;
background-image: url(${Team});
backdrop-filter: blur(5px);
color: #0B3F88;
font-size: 40px;
font-weight: bold;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
flex-wrap: wrap;
box-shadow: 0px 4px 4px 4px rgba(225, 225, 225, 0.5);
border-radius: 5px;
`
