import '../components/NavBar.css';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export function NavBar() {
   return (
      <AppBar position="static" className="nav-bar">
         <Toolbar>
            <Typography variant="h6" component="div" color="secondary" sx={{ flexGrow: 1 }}>
               Antonio Porter
            </Typography>
            <Button color="secondary">About</Button>
            <Button color="secondary">Studies</Button>
            <Button color="secondary">Contact</Button>
         </Toolbar>
      </AppBar>
   );
}
