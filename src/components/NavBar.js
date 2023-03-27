import '../components/NavBar.css';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export function NavBar() {
   return (
      <AppBar position="static" className="nav-bar">
         <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
               Antonio Porter
            </Typography>
            <Button color="inherit">About</Button>
            <Button color="inherit">Studies</Button>
            <Button color="inherit">Contact</Button>
         </Toolbar>
      </AppBar>
   );
}
