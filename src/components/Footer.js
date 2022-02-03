import { Container, Box, Typography, useTheme } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';

function Footer() {
    const theme = useTheme()
    
    return (
        <Box sx={{bgcolor: theme.palette.primary.main, color: 'white'}}>
            <Container>
                <Typography textAlign='center' py='2em'>Built with <FavoriteIcon /> by Ollie</Typography>
            </Container>
        </Box>
    )
}

export default Footer