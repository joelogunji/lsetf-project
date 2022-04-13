import React from 'react'
import styled from "styled-components"
import Lsetf5 from "./Images/logo-lsetf-5.png"
import ReactPlayer from 'react-player/youtube'

function About() {
  return (
    <Contain>
      <Up></Up>
      <h1>ABOUT LSETF EMPLOYMENT PROGRAMME</h1>
      <br/><br/>
      <ReactPlayer url='https://youtu.be/iNsXS6dL3-U'/>
      <br/><br/>
      <Img  src={Lsetf5}/>
      <br/><br/>
      <br/>
      <Wrapper>
        <h1>ABOUT THE TRAINING PROGRAMME</h1>
        <p>The Lagos State Employment Trust Fund was created to galvanise the creative and innovative energies of all Lagosians.
        The Lagos State Employment Trust Fund is an initiative of the Lagos state government.
        The LSETF is designed to tap into the resourcefulness and ingenuity of our young people.
The mission of the LSETF is to create employment and wealth for all in our beloved Lagos state.
We want your little business to come alive and grow.
        The LSETF Employability Support Project (LSESP), is designed to help tackle the unemployment scourge among the youths by helping them gain requisite knowledge and skill through vocational trainings and subsequently helping them get job placements. It aims to train 10,000 young people to gain skills in 6 sectors namely:
       Manufacturing, Hospitality, Entertainment, Construction, Health and Garment Making that will help place them in line for immediate employment. The first batch of youths which were trained at 8 vocational training centers across the state have graduated.<br/><br/>

      The Lagos State Employability Training (Software Engineering) is  geared towards increasing the employability of Lagosians by training selected persons in Software Engineering.
The Employability Programme is sponsored by Lagos State Employment Trust Fund (LSETF) in partnership with the United States African Development Foundation (USADF). 
The 5th cohort training is being conducted by LoftyInc from 19/01/2022 to 13/04/2022. The 12 weeks long training program is being delivered through classroom and virtual sessions.  At the end of the training, all candidates will be evaluated and candidates who qualify shall be awarded a certification of completion.
Candidates are not to pay any tuition fees and are not charged for certification. Candidates are to be paid a stipend amount of 1000 Naira per day of attendance as a contribution towards their transportation/data.</p> 
      </Wrapper>
    </Contain>
  )
}

export default About


const Contain = styled.div`
    width: 100%;
    color: white;
    font-size: x-large;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #0B3F88;
    border-width: 10px;
    border-color: red;   
`

const Wrapper = styled.div`
width: 85%;
text-align: center;
`

const Up = styled.div`
height: 110px;
width: 100%;
`

const Img = styled.img`
width: 97%;
border-radius: 5px;
`