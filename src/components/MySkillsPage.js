import React from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PawButton from '../subComponents/PawButton';
import BigTitle from '../subComponents/BigTitlte'

const H1 = styled.h1`
display: inline-block;
font-family: 'Shadows Into Light', cursive;
color:#454551;
`

const PROJECT = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 60%;
right: calc(0.5rem + 1vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index:1;
@media screen and (max-width: 480px) {
    right: calc(0.5rem + 1vw);
    }
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


const Box = styled.div`
background-color: ${props => props.theme.body};
width: 90vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 1rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;
font-family: 'Nunito', sans-serif;
display: flex;
flex-direction: column;
justify-content: space-between;
border-radius: 25px;
&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);
${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}
&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;
${Main}:hover &{
   
        color:${props => props.theme.body};
    
}
strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>

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
              
<Box>

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PawButton />
            <Main>
<Title>
     Full Stack Skills
</Title>

<Description>
<strong>Front End</strong>
<p>
HTML, CSS, React.js
</p>
</Description>
<Description>
<strong>Database</strong>
<p>
MongoDB
</p>
</Description>
<Description>
<strong>Back End</strong>
<p>
Node.js, Express, Python
</p>
</Description>
<Description>
<strong>DevOps</strong>
<p>
AWS
</p>
</Description>

            </Main>
            <Main>
<Title>
    Language Skills
</Title>
<Description>
<strong>Japanese</strong>
<p>
    Native
</p>
</Description>
<Description>
<strong>English</strong>
<p>
    C1 (CEFR)
</p>
</Description>
<Description>
<strong> </strong>
<p>
     
</p>
</Description>
<Description>
<strong> </strong>
<p>
    
</p>
</Description>


            </Main>

             <BigTitle text="My Skills" top="75%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage