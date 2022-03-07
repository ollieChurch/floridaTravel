import Toolbar from "@mui/material/Toolbar"
import AppBar from "@mui/material/AppBar"
import { Divider, MenuItem, Stack, Typography } from "@mui/material"
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import AttractionsOutlinedIcon from '@mui/icons-material/AttractionsOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import { useState } from "react";
import { Link } from 'react-router-dom'

function HeaderBar() {
  const [navItems] = useState([
    {
      icon: <FlightTakeoffIcon sx={{marginRight: '.25em'}} />,
      text: 'fly'
    },
    {
      icon: <HotelOutlinedIcon sx={{marginRight: '.25em'}} />,
      text: 'stay'
    },
    {
      icon: <AttractionsOutlinedIcon sx={{marginRight: '.25em'}} />,
      text: 'play'
    },
    {
      icon: <DateRangeOutlinedIcon sx={{marginRight: '.25em'}} />,
      text: 'plan'
    },
  ])

  return (
    <AppBar>
      <Toolbar>
          <Typography
            component={Link}
            to='/'
            variant='h4'
            sx={{
              marginRight: '.5em',
              fontFamily: "'Mouse Memoirs', sans-serif",
              textDecoration: 'unset',
              color: 'inherit'
            }}
          >
            Orlando Travel Club
          </Typography>        
        <Stack 
          spacing={2} 
          direction={'row'} 
          divider={<Divider orientation="vertical" flexItem color={'white'} />}
        >
          {navItems.map((item, index) => {
            return (
              <MenuItem key={`navItem-${index}`} component={Link} to={`/${item.text}`}>
                {item.icon} {item.text}
              </MenuItem>
            )
          })}
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default HeaderBar