import { Box, Container, useTheme } from "@mui/material";
import SectionBorder from "./SectionBorder";

function ColorSection({bgcolor='secondary', maxHeight='fitContent', children}) {
    const theme = useTheme()

    return (
        <>
            <SectionBorder color={bgcolor} />
            <Box bgcolor={theme.palette[bgcolor].main} color='white' overflowX='hidden' maxHeight={maxHeight}>
                <Container sx={{display: 'flex', gap: '2em'}}>
                    {children}
                </Container>
            </Box>
            <SectionBorder position='btm' color={bgcolor} />
        </>
    )
    
}

export default ColorSection