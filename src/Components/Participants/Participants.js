import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {db} from '../../Base';
import { storage } from '../../Base';
import './Participants.css';
import {collection, getDocs, query, orderBy} from 'firebase/firestore';


function Participants() {
 
  const [lsetf, setLsetf] = useState([]);

  const usersCollectionRef = collection(db, "students");
 
  const q = query(usersCollectionRef, orderBy("name"));

  const getData = async () => {
      const data = await getDocs(q, usersCollectionRef)
      setLsetf(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
  }


  useEffect(() => {
      getData();
  }, []);


  return (
    <Contain>
      <Up></Up>
      <br/>
      <br/>
      <h1>LSETF SOFTWARE ENGINEERING TRAINING PARTICIPANTS</h1>
      <br/>
      <br/>
      {lsetf.map(({id, name, imgurl, description, git, linked, fb, whatsapp}) => (
          <Div1 key={id}>
            <Img2 src={imgurl} alt="image"/>
            <h2>Name: {name}</h2>
            <Div2>{description}</Div2>
            <div>
            <div><a href={git}>GitHub</a></div>
            <div><a href={linked}>LinkedIn</a></div>
            <div><a href={fb}>Facebook</a></div>
            <div><a href={whatsapp}>Whatsapp</a></div>
            </div>
          </Div1>
              ))}
    </Contain>
  )
}

export default Participants


const Contain = styled.div`
    width: 100%;
    color: white;
    font-size: medium;
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: center;
   
    a{
      color: white;     
    }
    h2{
      width: 30%;
      color: white;
    }
    h1{
      color: #0B3F88;
    }
`

const Up = styled.div`
height: 110px;
width: 100%;
`

const Div1 = styled.div`
        display: flex;
        width: 98%;
        background-color: #0B3F88;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: center;
        border-width: -3px;
        border-style: groove;
        border-color: whitesmoke;
        padding-top: 7px;
        padding-bottom:7px;
`

const Div2 = styled.div`
width: 40%;
display: flex;
flex-wrap: wrap;
background-color: white;
border-radius: 5px;
color: #0B3F88;
font-weight: bold;
`

const Img2 = styled.img`
height:70px;
width: 70px;
border-radius: 50%;
`