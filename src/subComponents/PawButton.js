import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import FaPaw from './fontawesome/FaPaw'

const Paw = styled.button`
position: fixed;
top: 1rem;
left: 50%;
transform: translate(-50%, 0);

background-color: #D95F80;
padding: 0.2rem;
border-radius: 50%;
border: 2px solid #00000000;
width: 4.5rem;
height: 4.5em;

display: flex;
justify-content: center;
align-items:center;
z-index:3;

cursor: pointer;

&:hover{
    background-color: rgba(126, 148, 217, 4);
}

&>*:first-child{
    text-decoration: none;
    color: inherit;
}

`

const PawButton = () => {
    return (
        <>
        <NavLink to = '/'>
        <Paw>
          <FaPaw />
        </Paw>
        </NavLink>
        </>
    )
}

export default PawButton