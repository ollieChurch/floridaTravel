import { Box } from "@mui/material"

function ImgOverlay({color='rgba(0, 0, 0, .45)', children}) {
    return (
        <Box
            position='absolute'
            width='100%'
            height='100%'
            bgcolor={color}
            top='0'
            left='0'
        >
            {children}
        </Box>
    )
}

export default ImgOverlay