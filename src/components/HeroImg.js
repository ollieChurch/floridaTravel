import { useState, useEffect } from "react"
import { Box, Container, Fade, Typography } from "@mui/material"
import ImgOverlay from "./ImgOverlay"

function HeroImg() {
    const [images] = useState([
        {
            id: 'iLsw_pvpF1s',
            alt: 'diagon alley at Universal Islands Of Adventure'
        },
        {
            id: 'SE5mmOZWqHE',
            alt: 'an alien in the cockpit of a Star Wars spaceship'
        },
        {
            id: 'LNjWPNL1ZkQ',
            alt: 'Jurassic Park entrance gates'
        },
        {
            id: 'lwnAz-uauDc',
            alt: 'two people watch fireworks at Disney Boardwalk'
        }
    ])

    const [currentImg, setCurrentImg] = useState(0)
    const [fadedIn, setFadedIn] = useState(true)
    const [imgLoaded, setImgLoaded] = useState(false)

    useEffect(() => {
        if (imgLoaded) {
            const fadeOutInterval = setTimeout(() => {
                setFadedIn(false)
            }, 8000)

            return () => clearTimeout(fadeOutInterval)
        } else {
            setCurrentImg(prevImg => prevImg < images.length - 1 ? prevImg + 1 : 0)

            const fadeInInterval = setTimeout(() => {
                setFadedIn(true)
                setImgLoaded(true)
            }, 1000)

            return () => clearTimeout(fadeInInterval)
        }
    }, [imgLoaded, images.length])

    return (
        <Box
            height='80vh'
            objectFit='cover'
            overflow='hidden'
            position='relative'
            bgcolor='rgba(129, 165, 201)'
        >
            <Fade in={fadedIn} appear timeout={750} addEndListener={() => setImgLoaded(prevState => !prevState)} >
                <img 
                    className={`heroImg`}
                    src={`https://source.unsplash.com/${images[currentImg].id}/5183x3456`} 
                    alt={images[currentImg].alt}
                />
            </Fade>

            <ImgOverlay>
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
            </ImgOverlay>
      </Box>
    )
}

export default HeroImg