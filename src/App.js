import { Button, Container, Typography, Box, useTheme } from '@mui/material';
import './App.css';
import Cards from './components/Cards';
import ColorSection from './components/ColorSection';
import HeaderBar from './components/HeaderBar';
import HeroImg from './components/HeroImg';
import FavoriteIcon from '@mui/icons-material/Favorite';

function App() {
  const theme = useTheme()

  return (
    <>
      <HeaderBar />
      <HeroImg />
      <Container sx={{paddingY: '2em'}} >
        <Typography variant='h4' component='h2' mb='.5em' >
          Far Off Places, Magic Spells, Superheroes and More!
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus arcu vitae nibh mattis, id porta ligula dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean commodo eros turpis, in ornare purus pharetra eget. Nam eget nunc est. Donec dictum nulla mi, non ultricies leo euismod sed. Donec commodo mi porttitor, mollis nulla ut, blandit libero. Nam tristique lacus neque, at fermentum mauris maximus id. Etiam dapibus ex eget justo interdum faucibus. Quisque non diam a ligula euismod gravida sit amet nec massa.
        </Typography>
      </Container>
      <Cards />
      <ColorSection>
        <Box height='400px' sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
          <Typography variant='h4' component='h3'>Travel Like A Pro</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus arcu vitae nibh mattis, id porta ligula dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean commodo eros turpis, in ornare purus pharetra eget. Nam eget nunc est. Donec dictum nulla mi, non ultricies leo euismod sed. Donec commodo mi porttitor, mollis nulla ut, blandit libero. Nam tristique lacus neque, at fermentum mauris maximus id. Etiam dapibus ex eget justo interdum faucibus. Quisque non diam a ligula euismod gravida sit amet nec massa.
          </Typography>
          <Button variant='contained' sx={{alignSelf: 'flex-start'}}>Learn More</Button>
        </Box>
        <div className='home-flyImg' />
      </ColorSection>
      <Container sx={{pt: '3em', pb: '1em', display: 'flex', gap: '3em'}}>
        <img className='home-stayImg' src='https://source.unsplash.com/5q-vomL5kfA/640x480' alt='' />
        <Box>
          <Typography variant='h4' component='h3'>Stay Like A King</Typography>
          <Typography py='2em'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus arcu vitae nibh mattis, id porta ligula dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean commodo eros turpis, in ornare purus pharetra eget. Nam eget nunc est. Donec dictum nulla mi, non ultricies leo euismod sed. Donec commodo mi porttitor, mollis nulla ut, blandit libero. Nam tristique lacus neque, at fermentum mauris maximus id. Etiam dapibus ex eget justo interdum faucibus. Quisque non diam a ligula euismod gravida sit amet nec massa.
          </Typography>
          <Button variant='outlined' sx={{alignSelf: 'flex-start'}} color='secondary'>Learn More</Button>
        </Box>
      </Container>
      <ColorSection bgcolor='warning'>
        <Box sx={{py: '2em'}}>
          <Typography variant='h4' component='h3'>Experience It All</Typography>
          <Typography py='2em'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus arcu vitae nibh mattis, id porta ligula dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean commodo eros turpis, in ornare purus pharetra eget. Nam eget nunc est. Donec dictum nulla mi, non ultricies leo euismod sed. Donec commodo mi porttitor, mollis nulla ut, blandit libero. Nam tristique lacus neque, at fermentum mauris maximus id. Etiam dapibus ex eget justo interdum faucibus. Quisque non diam a ligula euismod gravida sit amet nec massa.
          </Typography>
          <Button variant='contained' sx={{alignSelf: 'flex-start'}}>Learn More</Button>
        </Box>
        <img className='home-planImg' src='https://source.unsplash.com/RLw-UC03Gwc/640x480' alt=''/>
      </ColorSection>
      <Container >
        <Typography py='2em'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus arcu vitae nibh mattis, id porta ligula dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean commodo eros turpis, in ornare purus pharetra eget. Nam eget nunc est. Donec dictum nulla mi, non ultricies leo euismod sed. Donec commodo mi porttitor, mollis nulla ut, blandit libero. Nam tristique lacus neque, at fermentum mauris maximus id. Etiam dapibus ex eget justo interdum faucibus. Quisque non diam a ligula euismod gravida sit amet nec massa.
        </Typography>
      </Container>
      
      <Box sx={{bgcolor: theme.palette.primary.main, color: 'white'}}>
        <Container>
          <Typography textAlign='center' py='3em'>Built with <FavoriteIcon /> by Ollie</Typography>
        </Container>
      </Box>
    </>
  );
}

export default App;
