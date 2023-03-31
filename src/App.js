import './App.css';
import { HideAppBar, Banner, Card, About, Contact, Footer, content } from './components';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { primary, secondary } from './styles/colors';

const theme = createTheme({
   palette: {
      primary: {
         light: primary[300],
         main: primary[500],
         dark: primary[700],
      },
      secondary: {
         light: secondary[300],
         main: secondary[500],
         dark: secondary[700],
      },
   },
});

function App() {
   return (
      <div className="app-main-container">
         <ThemeProvider theme={theme}>
            <HideAppBar />
            <Banner />
            {content.map((item, index) => (
               <Card imgRight={index % 2 === 0} content={item} />
            ))}
            <About />
            <Contact />
            <Footer />
         </ThemeProvider>
      </div>
   );
}

export default App;
