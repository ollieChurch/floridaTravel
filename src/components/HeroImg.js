import { useState, useEffect } from "react"
import { Box, Container, Fade, Typography } from "@mui/material"

function HeroImg() {
    const [images] = useState([
        {
            id: 'iLsw_pvpF1s',
            alt: 'diagon alley at Universal Islands Of Adventure'
        },
        {
            id: 'SE5mmOZWqHE',
            alt: 'an alien in the cockpit of a Star Wards spaceship'
        },
        {
            id: 'RRXWkVqq9xU',
            alt: 'A paddle boat waits at the dock'
        },
        {
            id: 'lwnAz-uauDc',
            alt: 'two people watch fireworks at Disney Boardwalk'
        }
    ])

    const [currentImg, setCurrentImg] = useState(0)
    const [fadedIn, setFadedIn] = useState(true)
    const [imgLoaded, setImgLoaded] = useState(true)

    useEffect(() => {
        const fadeOutInterval = setTimeout(() => {
            setFadedIn(false)
        }, 8000)
        return () => clearTimeout(fadeOutInterval)
    }, [currentImg])

    useEffect(() => {
        if (!imgLoaded) {
            const fadeInInterval = setTimeout(() => {
                setFadedIn(true)
                setImgLoaded(true)
            }, 1000)
            return () => clearTimeout(fadeInInterval)
        }
    }, [imgLoaded])

    function changeHeroImg() {
        if (!fadedIn) { 
            const newImg = currentImg < images.length - 1 ? currentImg + 1 : 0
            setCurrentImg(newImg)
            setImgLoaded(false) 
        }
    }

    return (
        <Box
            height='80vh'
            objectFit='cover'
            overflow='hidden'
            position='relative'
            bgcolor='rgba(129, 165, 201)'
        >
            <Fade in={fadedIn} appear timeout={750} addEndListener={changeHeroImg} >
                <img 
                    className={`heroImg`}
                    src={`https://source.unsplash.com/${images[currentImg].id}/5183x3456`} 
                    alt={images[currentImg].alt}
                />
            </Fade>

            <Box
                position='absolute'
                width='100%'
                height='100%'
                bgcolor='rgba(0, 0, 0, .5)'
                top='0'
                left='0'
            >
                <Container sx={{height: '100%', display: 'flex', alignItems: 'center'}} >
                    <Typography
                        variant='h2'
                        component='h1'
                        color='white'
                        fontWeight='bold'
                    >
                        Start your <br />
                        Florida <br />
                        adventure <br />
                        today!
                    </Typography>
                </Container>
            </Box>
      </Box>
    )
}

export default HeroImg