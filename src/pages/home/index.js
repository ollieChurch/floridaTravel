import { useState } from 'react'
import { Button, Container, Typography, Box, useTheme } from '@mui/material';
import Cards from '../../components/Cards';
import ColorSection from '../../components/ColorSection';
import HeroImg from '../../components/HeroImg';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom'

function Home() {
  const [homeCardsData] = useState([
    {
        title: 'Experience The Thrills',
        imgId: 'SE5mmOZWqHE',
        imgAlt: 'An alien sits in a Star Wars spaceship cockpit',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lectus nisi, imperdiet eu nibh non, venenatis commodo urna. Quisque sed risus in orci feugiat sollicitudin ac a velit. '
    },
    {
        title: 'See The Shows',
        imgId: 'X1OK9of41Ho',
        imgAlt: 'A performer in The Festival Of The Lion King',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lectus nisi, imperdiet eu nibh non, venenatis commodo urna. Quisque sed risus in orci feugiat sollicitudin ac a velit. '
    },
    {
        title: 'Aaaaand Relax...',
        imgId: 'RRXWkVqq9xU',
        imgAlt: 'A paddle boat waits at the docks',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lectus nisi, imperdiet eu nibh non, venenatis commodo urna. Quisque sed risus in orci feugiat sollicitudin ac a velit. '
    }
  ])
  const theme = useTheme()

  return (
    <>
      <HeroImg />

      <Container sx={{paddingY: '2em'}} >
        <Typography variant='h4' component='h2' mb='.5em' >
          Far Off Places, Magic Spells, Superheroes and More!
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus arcu vitae nibh mattis, id porta ligula dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean commodo eros turpis, in ornare purus pharetra eget. Nam eget nunc est. Donec dictum nulla mi, non ultricies leo euismod sed. Donec commodo mi porttitor, mollis nulla ut, blandit libero. Nam tristique lacus neque, at fermentum mauris maximus id. Etiam dapibus ex eget justo interdum faucibus. Quisque non diam a ligula euismod gravida sit amet nec massa.
        </Typography>
      </Container>

      <Cards cardData={homeCardsData} />

      <ColorSection>
        <Box height='400px' sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
          <Typography variant='h4' component='h3'>Travel Like A Pro</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus arcu vitae nibh mattis, id porta ligula dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean commodo eros turpis, in ornare purus pharetra eget. Nam eget nunc est. Donec dictum nulla mi, non ultricies leo euismod sed. Donec commodo mi porttitor, mollis nulla ut, blandit libero. Nam tristique lacus neque, at fermentum mauris maximus id. Etiam dapibus ex eget justo interdum faucibus. Quisque non diam a ligula euismod gravida sit amet nec massa.
          </Typography>
          <Button variant='contained' sx={{alignSelf: 'flex-start'}} component={Link} to='/fly'>Learn More</Button>
        </Box>
        <div className='home-flyImg' />
      </ColorSection>

      <Container sx={{pt: '3em', pb: '1em', display: 'flex', gap: '3em'}}>
        <img className='home-containedImg home-stayImg' src='https://source.unsplash.com/5q-vomL5kfA/640x480' alt='' />
        <Box>
          <Typography variant='h4' component='h3'>Stay Like A King</Typography>
          <Typography py='2em'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus arcu vitae nibh mattis, id porta ligula dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean commodo eros turpis, in ornare purus pharetra eget. Nam eget nunc est. Donec dictum nulla mi, non ultricies leo euismod sed. Donec commodo mi porttitor, mollis nulla ut, blandit libero. Nam tristique lacus neque, at fermentum mauris maximus id. Etiam dapibus ex eget justo interdum faucibus. Quisque non diam a ligula euismod gravida sit amet nec massa.
          </Typography>
          <Button variant='outlined' sx={{alignSelf: 'flex-start'}} color='secondary' component={Link} to='/stay'>Learn More</Button>
        </Box>
      </Container>

      <ColorSection bgcolor='warning'>
        <Box sx={{py: '2em'}}>
          <Typography variant='h4' component='h3'>Experience It All</Typography>
          <Typography py='2em'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus arcu vitae nibh mattis, id porta ligula dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean commodo eros turpis, in ornare purus pharetra eget. Nam eget nunc est. Donec dictum nulla mi, non ultricies leo euismod sed. Donec commodo mi porttitor, mollis nulla ut, blandit libero. Nam tristique lacus neque, at fermentum mauris maximus id. Etiam dapibus ex eget justo interdum faucibus. Quisque non diam a ligula euismod gravida sit amet nec massa.
          </Typography>
          <Button variant='contained' sx={{alignSelf: 'flex-start'}} component={Link} to='/plan'>Learn More</Button>
        </Box>
        <img className='home-containedImg home-planImg' src='https://source.unsplash.com/RLw-UC03Gwc/640x480' alt=''/>
      </ColorSection>

      <Container >
        <Typography py='2em'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus arcu vitae nibh mattis, id porta ligula dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean commodo eros turpis, in ornare purus pharetra eget. Nam eget nunc est. Donec dictum nulla mi, non ultricies leo euismod sed. Donec commodo mi porttitor, mollis nulla ut, blandit libero. Nam tristique lacus neque, at fermentum mauris maximus id. Etiam dapibus ex eget justo interdum faucibus. Quisque non diam a ligula euismod gravida sit amet nec massa.
        </Typography>
      </Container>      
    </>
  );
}

export default Home;