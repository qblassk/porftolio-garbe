import '../components/HideAppBar.css';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, useScrollTrigger, Slide, Button } from '@mui/material';

function HideOnScroll(props) {
   const { children, window } = props;
   const trigger = useScrollTrigger({
      target: window ? window() : undefined,
   });

   return (
      <Slide appear={false} direction="down" in={!trigger}>
         {children}
      </Slide>
   );
}

HideOnScroll.propTypes = {
   children: PropTypes.element.isRequired,
   window: PropTypes.func,
};

export function HideAppBar(props) {
   return (
      <div>
         <HideOnScroll {...props}>
            <AppBar className="tool-bar">
               <Toolbar>
                  <Typography variant="h4" component="div" color="inherit" sx={{ flexGrow: 1 }}>
                     GARBe
                  </Typography>
                  <Button color="inherit">PROYECTOS</Button>
                  <Button color="inherit">NOSOTROS</Button>
                  <Button color="inherit">CONTACTO</Button>
               </Toolbar>
            </AppBar>
         </HideOnScroll>
         <Toolbar />
      </div>
   );
}
