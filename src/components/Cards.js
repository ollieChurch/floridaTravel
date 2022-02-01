import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Container, Typography } from "@mui/material"

function Cards() {
    return (
        <Container
          sx={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '2em', pb: '2em'}} 
          width='100%'
        >
          <Card raised >
            <CardActionArea>
                <CardHeader title='Experience The Thrills' />
                <CardMedia
                component='img'
                height='175'
                image='https://source.unsplash.com/SE5mmOZWqHE/640x345'
                alt=''
                />
                <CardContent>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lectus nisi, imperdiet eu nibh non, venenatis commodo urna. Quisque sed risus in orci feugiat sollicitudin ac a velit. 
                    </Typography>
                </CardContent>
            </CardActionArea>
          </Card>
          
          <Card raised >
            <CardActionArea>
                <CardHeader title='See The Sights & Shows' />
                <CardMedia
                component='img'
                height='175'
                image='https://source.unsplash.com/X1OK9of41Ho/640x345'
                alt=''
                />
                <CardContent>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lectus nisi, imperdiet eu nibh non, venenatis commodo urna. Quisque sed risus in orci feugiat sollicitudin ac a velit. 
                    </Typography>
                </CardContent>
            </CardActionArea>
          </Card>

          <Card raised >
            <CardActionArea>
                <CardHeader title='Aaaaand Relax...' />
                <CardMedia
                component='img'
                height='175'
                image='https://source.unsplash.com/RRXWkVqq9xU/640x345'
                alt=''
                />
                <CardContent>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lectus nisi, imperdiet eu nibh non, venenatis commodo urna. Quisque sed risus in orci feugiat sollicitudin ac a velit. 
                    </Typography>
                </CardContent>
            </CardActionArea>
          </Card>
        </Container>
    )
}

export default Cards