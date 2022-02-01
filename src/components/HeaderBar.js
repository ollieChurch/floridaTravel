import Toolbar from "@mui/material/Toolbar"
import AppBar from "@mui/material/AppBar"
import {Divider, MenuItem, Stack, Typography } from "@mui/material"
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import AttractionsOutlinedIcon from '@mui/icons-material/AttractionsOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';

function HeaderBar() {
  return (
    <AppBar>
      <Toolbar>
        <Typography
          component='div'
          variant='h4'
          sx={{
            marginRight: '.5em',
            fontFamily: "'Mouse Memoirs', sans-serif"
          }}
        >
          Orlando Travel Club
        </Typography>
        <Stack 
          spacing={2} 
          direction={'row'} 
          divider={<Divider orientation="vertical" flexItem color={'white'} />}
        >
          <MenuItem>
            <FlightTakeoffIcon sx={{marginRight: '.25em'}} /> fly
          </MenuItem>
          <MenuItem>
            <HotelOutlinedIcon sx={{marginRight: '.25em'}} /> stay
          </MenuItem>
          <MenuItem>
            <AttractionsOutlinedIcon sx={{marginRight: '.25em'}} /> play
          </MenuItem>
          <MenuItem>
            <DateRangeOutlinedIcon sx={{marginRight: '.25em'}} /> plan
          </MenuItem>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default HeaderBar