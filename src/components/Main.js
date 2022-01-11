import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PawButton from '../subComponents/PawButton'
import SocialIcons from '../subComponents/SocialIcons'
import { MousePointer } from './AllSvgs'
import Cat from '../subComponents/Cat'
import Intro from './Intro'

const H1 = styled.h1`
display: inline-block;
font-family: 'Shadows Into Light', cursive;
color:#454551;
`
 
const ClickHere = styled.h1`
display: inline-block;
font-family: 'Shadows Into Light', cursive;
color:#D95F80;
&:hover{
color:#7E94D9;
}
`

const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow:hidden;
position: relative;
h2,h3,h4,h5,h6{
  font-family:'Karla', sans-serif ;
  font-weight:500;
}
`

const Container = styled.div`
padding: 2rem;
`

const JobOffer = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index:1;

@media screen and (max-width: 480px) {
    right: calc(0.5rem + 1vw);
}
`

const PROJECT = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute; 
top: 60%;
right: calc(1rem + 1vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index:1;
@media screen and (max-width: 480px) {
    right: -20px;
    }
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;
display: flex;
justify-content: space-evenly;
`

const ABOUT = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index:1;
`
const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

const pulse = keyframes`
0% {
       transform: rotate(0);
   }
89% {
       transform: rotate(0) ;
   }
90% {
       transform: rotate(20deg) ;
   }  
91% {
       transform: rotate(0) ;
   }
92% {
       transform: rotate(20deg) ;
   }
93% {
       transform: rotate(0);
   }
 
`

const Pointer = styled.button`
position: absolute;
top: ${props => props.click ? '85%' :'50%'  };
left: ${props => props.click ? '92%' :'20%'  };
transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

 
@media screen and (max-width: 480px) {
   top: ${props => props.click ? '85%' :'70%'  };
   left: ${props => props.click ? '92%' :'40%'  };
}


&>:first-child{
    animation: ${pulse} infinite 5s linear;
}
&>:last-child{
    display: ${props => props.click ? 'none' :'inline-block'  };
    padding-top: 1rem;
}
`
const Center = styled.div`
 
position: absolute;
top: ${props => '55%'  };
left: ${props => '50%'  };
transform: translate(-50%,-50%);
 
@media screen and (max-width: 480px) {
   top: ${props => '65%'  };
   left: ${props => '50%'  };
}
 
`

const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
`


const Main = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <MainContainer>
         <DarkDiv   click={click}/>
            <Container>
            <PawButton />
            <LogoComponent theme={click ? 'dark' :'light'}/>
            <SocialIcons theme={click ? 'dark' :'light'} />
           <Center>
           <Cat />
           </Center>
            <Pointer click={click}>
                <MousePointer  onClick={()=> handleClick()} width={click ? 40 : 100} height={click ? 40 : 100} fill='currentColor' />
                <ClickHere onClick={()=> handleClick()}>click here</ClickHere>
            </Pointer>
            <JobOffer target='_blamk' to={{pathname:'https://form.jotform.com/saesuzuki9829/contact-form'}}>
                <motion.h4
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                
                >
                    <H1>Contact Me</H1>
                </motion.h4>
            </JobOffer>
            <PROJECT to="/project">
                <motion.h4
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    <H1>My Projects</H1>
                </motion.h4>
            </PROJECT>
            
            <BottomBar>
            <ABOUT to="/about" click={+click}>
                <motion.h4
                initial={{
                    y:200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    <H1>About Me</H1>
                </motion.h4>
            </ABOUT>
            <SKILLS to="/skills">
                <motion.h4
                initial={{
                    y:200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    <H1>My Skills</H1>
                </motion.h4>
            </SKILLS>

            </BottomBar>

            </Container>
            {click ? <Intro click={click} /> : null }
        </MainContainer>
    )
}

export default Main
