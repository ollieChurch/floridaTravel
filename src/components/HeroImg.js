import { useState, useEffect } from "react"
import { Box, Container, Fade, Typography } from "@mui/material"

function HeroImg() {
    const [images] = useState([
        'iLsw_pvpF1s',
        'SE5mmOZWqHE',
        'RRXWkVqq9xU',
        'lwnAz-uauDc'
    ])
    const [currentImg, setCurrentImg] = useState(0)
    const [fadedIn, setFadedIn] = useState(true)

    useEffect(() => {
        const heroInterval = setTimeout(() => {
            setFadedIn(false)
        }, 8000)
        return () => clearTimeout(heroInterval)
    }, [currentImg, images])

    function changeHeroImg() {
        if (!fadedIn) { 
            const newImg = currentImg < images.length - 1 ? currentImg + 1 : 0
            setCurrentImg(newImg) 
        }
    }

    return (
        <Box
            height='75vh'
            objectFit='cover'
            overflow='hidden'
            position='relative'
            bgcolor='rgba(129, 165, 201)'
        >
            <Fade in={fadedIn} appear timeout={500} easing='cubic-bezier(0.4, 0, 0.2, 1)' addEndListener={changeHeroImg} >
                <img 
                    className={`heroImg`}
                    src={`https://source.unsplash.com/${images[currentImg]}/5183x3456`} 
                    alt=''
                    onLoad={() => setFadedIn(true)}
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
                <Container
                    sx={{height: '100%', display: 'flex', alignItems: 'center'}}
                >
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