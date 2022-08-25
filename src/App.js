import './App.css';
import {Box, Button, Typography, ThemeProvider} from '@mui/material'
import theme from './theme/theme';
import ListMovies from './containers/ListMovies.jsx';
function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
        <Box p={2}>
          <Typography variant='h5'>
            React List dan Axios
          </Typography>
        </Box>
        <Box sx={{
          p : 2,
          display : "flex",
          gap : 2
        }}>
          <Button variant='contained' color='primary'>
            Button Warna Hijau
          </Button>
          <Button variant='contained' color='secondary'>
            Button Warna Biru
          </Button>
        </Box>
      </header>
        <section>
          <ListMovies />
        </section>
    </div>
    </ThemeProvider>
  );
}

export default App;
