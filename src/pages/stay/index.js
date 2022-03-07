import {useState} from 'react'
import { Box, Button, Container, Typography } from "@mui/material"
import Cards from "../../components/Cards"
import ColorSection from "../../components/ColorSection"
import ImgOverlay from "../../components/ImgOverlay"

function Stay() {
    const [stayCardData] = useState([
        {
            imgId: 'S_JutLgZMbA',
            imgAlt: 'The exterior of an Orlando hotel',
            text: 'Hotel'
        },
        {
            imgId: 'pBWMrDpU6VA',
            imgAlt: 'The exterior of a motel',
            text: 'Motel'
        },
        {
            imgId: '4T4AcGJvARQ',
            imgAlt: 'A street of private villas',
            text: 'Villa'
        },
    ])

    return (
        <>
            <Box pb='2em'>
                <div className='pageImgHeader stayBgd'>
                    <ImgOverlay color='rgba(255, 255, 255, .45)' />
                </div>
            </Box>

            <Container>
                    <Typography component='h2' variant='h3' py='.5em'>
                        Where Should I Stay?
                    </Typography>
                    <Typography pb='2em'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus arcu vitae nibh mattis, id porta ligula dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean commodo eros turpis, in ornare purus pharetra eget. Nam eget nunc est. Donec dictum nulla mi, non ultricies leo euismod sed. Donec commodo mi porttitor, mollis nulla ut, blandit libero. Nam tristique lacus neque, at fermentum mauris maximus id. Etiam dapibus ex eget justo interdum faucibus. Quisque non diam a ligula euismod gravida sit amet nec massa.
                    </Typography>
            </Container>

            <ColorSection>
                <Box>
                    <Typography component='h2' variant='h3' py='.5em'>
                        Stay On Site With Disney
                    </Typography>
                    <Typography pb='2em'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus arcu vitae nibh mattis, id porta ligula dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean commodo eros turpis, in ornare purus pharetra eget. Nam eget nunc est. Donec dictum nulla mi, non ultricies leo euismod sed. Donec commodo mi porttitor, mollis nulla ut, blandit libero. Nam tristique lacus neque, at fermentum mauris maximus id. Etiam dapibus ex eget justo interdum faucibus. Quisque non diam a ligula euismod gravida sit amet nec massa.
                    </Typography>
                    <Button variant='contained' sx={{alignSelf: 'flex-start'}}>Visit DisneyWorld.co.uk</Button>
                </Box>
            </ColorSection>

            <Container>
                <Typography component='h2' variant='h3' py='.5em'>
                    Stay On Site With Universal
                </Typography>
                <Typography pb='2em'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus arcu vitae nibh mattis, id porta ligula dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean commodo eros turpis, in ornare purus pharetra eget. Nam eget nunc est. Donec dictum nulla mi, non ultricies leo euismod sed. Donec commodo mi porttitor, mollis nulla ut, blandit libero. Nam tristique lacus neque, at fermentum mauris maximus id. Etiam dapibus ex eget justo interdum faucibus. Quisque non diam a ligula euismod gravida sit amet nec massa.
                </Typography>
                <Button variant='contained' sx={{alignSelf: 'flex-start'}}>Visit UnviversalOrlando.com</Button>
            </Container>

            <ColorSection bgcolor='warning'>
                <Box>
                    <Typography component='h2' variant='h3' py='.5em'>
                        Stay Off Site
                    </Typography>
                    <Typography pb='2em'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus arcu vitae nibh mattis, id porta ligula dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean commodo eros turpis, in ornare purus pharetra eget. Nam eget nunc est. Donec dictum nulla mi, non ultricies leo euismod sed. Donec commodo mi porttitor, mollis nulla ut, blandit libero. Nam tristique lacus neque, at fermentum mauris maximus id. Etiam dapibus ex eget justo interdum faucibus. Quisque non diam a ligula euismod gravida sit amet nec massa.
                    </Typography>
                    <Cards cardData={stayCardData} />
                </Box>
            </ColorSection>
        </>
    )
}

export default Stay