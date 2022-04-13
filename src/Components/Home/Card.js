import React from 'react'
import styled from 'styled-components'
import Aos from "aos";
import "aos/dist/aos.css";
import Team1 from "./Images/team1.jpg"
import Team2 from "./Images/team2.jpg"
import Team3 from "./Images/team3.jpg"
import Team4 from "./Images/team4.jpg" 


const Card = () => {


    React.useEffect(()=>{
        Aos.init()
    },[]);
  return (
    <MainContain>
        <Wrapper>
            <Card1 data-aos="fade-up"
    data-aos-offset="250"
    data-aos-easing="ease-in-sine"
            ><Img src={Team1}/>
            </Card1>

            <Card1 data-aos="fade-up"
    data-aos-offset="350"
    data-aos-easing="ease-in-sine">
                <Img src={Team2}/>
            </Card1>

            <Card1 data-aos="fade-up"
    data-aos-offset="450"
    data-aos-easing="ease-in-sine" 
            ><Img src={Team3}/>
            </Card1>

            <Card1 data-aos="fade-up"
    data-aos-offset="450"
    data-aos-easing="ease-in-sine" 
            ><Img src={Team4}/>
            </Card1>

        </Wrapper>

    </MainContain>
  )
}

export default Card

const MainContain = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

const Wrapper = styled.div`
    display: flex;
    width: 90%;
    flex-wrap: wrap;
    justify-content: space-around;
`

const Card1 = styled.div`
    height: 400px;
    width: 450px;
    border-radius: 7px;
    padding: 40px 40px 40px 40px;
`

const Img = styled.img`
width: 100%;
height: 100%;
border-radius: 7px;
`