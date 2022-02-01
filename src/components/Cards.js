import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Container, Typography } from "@mui/material"

function Cards({cardData}) {
    return (
        <Container
          sx={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '2em', pb: '2em'}} 
          width='100%'
        >                
            {cardData.map(card => {
                return (
                    <Card key={`card-${card.title}`} raised >
                        <CardActionArea>
                            <CardHeader title={card.title} />
                            <CardMedia
                            component='img'
                            height='175'
                            image={`https://source.unsplash.com/${card.imgId}/640x345`}
                            alt={card.imgAlt}
                            />
                            <CardContent>
                                <Typography>{card.text}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                )
            })}
        </Container>
    )
}

export default Cards