import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from '@fortawesome/free-solid-svg-icons'

const FaPaw = () => {


  return ( 
    <div style={{ textAlign: "center"}}>
        <div style={{ fontSize:"50px"}}>
            <div style={{color:"white"}}>
                 <FontAwesomeIcon icon={faPaw} />
            </div>
        </div>
    </div>  
    );
}
export default FaPaw

