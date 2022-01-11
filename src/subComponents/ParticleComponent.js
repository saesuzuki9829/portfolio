import React from 'react'
import Particles, {particlesInit, particlesLoaded} from 'react-tsparticles'
import styled from 'styled-components'

const Box = styled.div`
position: absolute;
top:0;
right:0;
left:0;
bottom:0;
z-index:0;
`

const ParticleComponent = () => {
    return (
        <Box>
<Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
      
      fpsLimit: 60,
  particles: {
    number: {
      value: 10,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: ["#D95F80", "#3F4B8C", "#7E94D9", "#EEC9C5"]
    },
    shape: {
      type: ["circle"],
      stroke: {
        width: 0,
        color: "#fff"
      },
      polygon: {
        nb_sides: 5
      }
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 35,
      random: true,
      anim: {
        enable: false,
        speed: 10,
        size_min: 25,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "grab"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  }}}
  />
            </Box>
    )
}

export default ParticleComponent