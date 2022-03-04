import { Button, Box } from "@mui/material"

function RoundImgBtn({imgSrc='https://source.unsplash.com/X1OK9of41Ho/', imgAlt='', children}) {
    const imgStyle = {
        borderRadius: '50%', 
        width: '150px', 
        aspectRatio: '1/1', 
        overflow: 'hidden', 
        objectPosition: 'center', 
        objectFit: 'cover',
        border: '1px solid black',
        boxShadow: '3px 3px 5px rgba(0, 0, 0, .5)'
    }

    return (
        <Button sx={{display: 'flex', flexDirection: 'column', color: 'white'}}>
            <Box sx={imgStyle}>
                <img src={imgSrc} alt={imgAlt} width='150%' />
            </Box>
            {children}
        </Button>
    )
}

export default RoundImgBtn