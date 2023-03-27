import '../components/CenteredText.css';
import { Typography, Grid } from '@mui/material';

export function CenteredText() {
   return (
      <Grid
         container
         className="grid-container"
         direction="column"
         justifyContent="center"
         alignItems="center"
         spacing={3}
      >
         <Grid item>
            <Typography variant="body1" align="center" width="60vw">
               Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim
               elementum. Mollis elit sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
            </Typography>
         </Grid>

         <Grid item>
            <Typography variant="body1" align="center" width="60vw">
               <b>Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.</b>
            </Typography>
         </Grid>

         <Grid item>
            <Typography variant="body1" align="center" width="60vw">
               Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit sodales taciti
               duis praesent id. Consequat urna vitae morbi nunc congue.
            </Typography>
         </Grid>
      </Grid>
   );
}
