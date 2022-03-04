import { Box, Container, Typography } from "@mui/material"
import { useState } from "react"
import Cards from "../../components/Cards"
import ColorSection from "../../components/ColorSection"
import ImgOverlay from "../../components/ImgOverlay"
import RoundImgBtn from "../../components/RoundImgBtn"

function Fly() {
    const [flyCardData] = useState([
        {
            imgId: 'X1OK9of41Ho',
            imgAlt: 'A performer in The Festival Of The Lion King',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lectus nisi, imperdiet eu nibh non, venenatis commodo urna. Quisque sed risus in orci feugiat sollicitudin ac a velit. '
        },
        {
            imgId: 'RRXWkVqq9xU',
            imgAlt: 'A paddle boat waits at the docks',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lectus nisi, imperdiet eu nibh non, venenatis commodo urna. Quisque sed risus in orci feugiat sollicitudin ac a velit. '
        }
    ])

    return (
        <>  
            <Box pb='2em'>
                <div className='pageImgHeader flyBgd'>
                    <ImgOverlay color='rgba(255, 255, 255, .45)' />
                </div>
            </Box>
            
            <Container>
                <Typography component='h2' variant='h3' pb='.5em'>
                    Title Goes Here
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus arcu vitae nibh mattis, id porta ligula dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean commodo eros turpis, in ornare purus pharetra eget. Nam eget nunc est. Donec dictum nulla mi, non ultricies leo euismod sed. Donec commodo mi porttitor, mollis nulla ut, blandit libero. Nam tristique lacus neque, at fermentum mauris maximus id. Etiam dapibus ex eget justo interdum faucibus. Quisque non diam a ligula euismod gravida sit amet nec massa.
                </Typography>
            </Container>

            <ColorSection>
                <Box pt='2em'>
                    <Typography component='h3' variant='h4' pb='.5em'>
                        Sub Heading
                    </Typography>
                    <Typography pb='2em'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus arcu vitae nibh mattis, id porta ligula dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean commodo eros turpis, in ornare purus pharetra eget. Nam eget nunc est. Donec dictum nulla mi, non ultricies leo euismod sed. Donec commodo mi porttitor, mollis nulla ut, blandit libero. Nam tristique lacus neque, at fermentum mauris maximus id. Etiam dapibus ex eget justo interdum faucibus. Quisque non diam a ligula euismod gravida sit amet nec massa.
                    </Typography>
                    <Container sx={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-evenly'}}>
                        <RoundImgBtn>Button 1</RoundImgBtn>
                        <RoundImgBtn>Button 2</RoundImgBtn>
                        <RoundImgBtn>Button 3</RoundImgBtn>
                        <RoundImgBtn>Button 4</RoundImgBtn>
                    </Container>
                </Box>
            </ColorSection>
            
            <Container>
                <Typography py='2em'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus arcu vitae nibh mattis, id porta ligula dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean commodo eros turpis, in ornare purus pharetra eget. Nam eget nunc est. Donec dictum nulla mi, non ultricies leo euismod sed. Donec commodo mi porttitor, mollis nulla ut, blandit libero. Nam tristique lacus neque, at fermentum mauris maximus id. Etiam dapibus ex eget justo interdum faucibus. Quisque non diam a ligula euismod gravida sit amet nec massa.
                </Typography>
                <Cards cardData={flyCardData} />
            </Container>
        </>
    )
}

export default Fly