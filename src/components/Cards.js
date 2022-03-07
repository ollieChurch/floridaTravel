import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Container, Typography, useMediaQuery } from "@mui/material"
import { useLocation } from "react-router-dom"
// import { Link } from 'react-router-dom'

function Cards({cardData}) {
    const {pathname} = useLocation()
    const bp700 = useMediaQuery('(min-width:700px)')
    const style = {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-evenly',
        gap: '2em',
        pb: '2em'
    }

    return (
        <Container sx={style}>                
            {cardData.map((card, index) => {
                return (
                    <Card key={`card-${pathname}-${index}`} raised sx={{maxWidth: bp700 ? '300px' : '100%'}}>
                        <CardActionArea>
                            {card.title && <CardHeader title={card.title} />}
                            {card.imgId && 
                                <CardMedia
                                    component='img'
                                    height='175'
                                    image={`https://source.unsplash.com/${card.imgId}/640x345`}
                                    alt={card.imgAlt}
                                />
                            }
                            {card.text && 
                                <CardContent>
                                    <Typography>{card.text}</Typography>
                                </CardContent>
                            }
                        </CardActionArea>
                    </Card>
                )
            })}
        </Container>
    )
}

export default Cards