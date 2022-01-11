import React from 'react'
import { motion } from 'framer-motion'
import styled, { ThemeProvider } from 'styled-components'
import { NavLink } from 'react-router-dom'
import {DarkTheme} from './Themes';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PawButton from '../subComponents/PawButton';
import ParticleComponent from '../subComponents/ParticleComponent';


const H1 = styled.h1`
display: inline-block;
font-family: 'Shadows Into Light', cursive;
color: ${(props) => props.theme.text};
`

const JobOffer = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index:1;

@media screen and (max-width: 480px) {
    right: calc(0.5rem + 0.5vw);
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

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;

`

const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 40vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Nunito', sans-serif;

@media screen and (max-width: 480px) {
  width: 34vw;
    left: calc(3rem + 12vw);
      top: 6rem;
        height: 55vh;
    }

`
const Right = styled.div`

position: absolute;
top: ${props => props.click ? '85%' :'55%'  };
left: ${props => props.click ? '92%' :'80%'  };
transform: translate(-50%,-50%);
 z-index: 4;

`

const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}> 
    
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
       
<Box>


<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>

<ParticleComponent  />
   
<PawButton /> 
<Right> 

</Right>
        <Main>
        My name is Saé Suzuki, and my main interest lies in storing large amounts of real-time date in MongoDB.
        </Main>


        </Box>


        </ThemeProvider>
        
    )
}

export default AboutPage