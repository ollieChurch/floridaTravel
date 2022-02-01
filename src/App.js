import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import './App.css';
import Cards from './components/Cards';
import HeaderBar from './components/HeaderBar';
import HeroImg from './components/HeroImg';

function App() {

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
      <Box pb='2em' >
        <Cards />
      </Box>  
    </>
  );
}

export default App;
