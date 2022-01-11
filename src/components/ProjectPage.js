import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons  from '../subComponents/SocialIcons'
import PawButton  from '../subComponents/PawButton'

import {Blogs} from '../data/BlogData';
import ProjectComponent from './ProjectComponent'
import BigTitle from "../subComponents/BigTitlte"
import { motion } from 'framer-motion'

const H1 = styled.h1`
display: inline-block;
font-family: 'Shadows Into Light', cursive;
color:#454551;
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



const MainContainer = styled(motion.div)`
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
`
const Container = styled.div`
background-color: props.theme.body;
width: 100%;
height:auto;
position: relative;
padding-bottom: 5rem;
`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;
`

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);
`

// Framer-motion config
const container = {

    hidden: {opacity:0},
    show: {
      opacity:1,
  
      transition:{
        staggerChildren: 0.5,
        duration: 0.5,
      }
    }
  
  }

const BlogPage = () => {

    const [numbers, setNumbers] = useState(0);

    useEffect(() => {
        let num = (window.innerHeight - 70)/30;
        setNumbers(parseInt(num));
    }, [])


    return (
        <MainContainer
        variants={container}
        initial='hidden'
        animate='show'
        exit={{
            opacity:0, transition:{duration: 0.5}
        }}
        >
            <Container>
                <LogoComponent />
                <PawButton />
                <SocialIcons />
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
            
<Center>
<Grid>

{
    Blogs.map(blog => {
        return <ProjectComponent key={blog.id} blog={blog} />
    })
}
</Grid>

</Center>
<BigTitle text="My Projects" top="3rem" left="5rem" />
            </Container>
        </MainContainer>
    )
}

export default BlogPage
