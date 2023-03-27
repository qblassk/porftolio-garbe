import '../components/TextWithImage.css';
import imageA from '../assets/img/words.jpg';
import { Grid, Typography } from '@mui/material';

const TextToTheRight = (props) => {
   return (
      <Grid container direction="row" justifyContent="center" alignItems="center">
         <Grid item xs={5} align="center">
            <img src={imageA} alt="Words" />
         </Grid>

         <Grid item xs={5}>
            <Grid container direction="column" justifyContent="center" alignItems="center" spacing={3}>
               <Grid item>
                  <Typography variant="h6" align="center">
                     PERSONAL SHOPER
                  </Typography>
               </Grid>
               <Grid item>
                  <Typography variant="body1" align="center">
                     <b>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                        dignissim elementum. Mollis elit sodales taciti duis praesent id. Consequat urna vitae morbi
                        nunc congue.
                     </b>
                  </Typography>
               </Grid>
               <Grid item>
                  <Typography variant="body1" align="center">
                     Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit sodales
                     taciti duis praesent id. Consequat urna vitae morbi nunc congue.
                  </Typography>
               </Grid>
               <Grid item>
                  <Typography variant="body1" align="center">
                     Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit sodales
                     taciti duis praesent id. Consequat urna vitae morbi nunc congue.
                  </Typography>
               </Grid>
               <Grid item>
                  <Typography variant="body1" align="center">
                     Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit sodales
                     taciti duis praesent id. Consequat urna vitae morbi nunc congue.
                  </Typography>
               </Grid>
            </Grid>
         </Grid>
      </Grid>
   );
};

const TextToTheLeft = (props) => {
   return (
      <Grid container direction="row" justifyContent="center" alignItems="center">
         <Grid item xs={5}>
            <Grid container direction="column" justifyContent="center" alignItems="center" spacing={3}>
               <Grid item>
                  <Typography variant="h6" align="center">
                     PERSONAL SHOPER
                  </Typography>
               </Grid>
               <Grid item>
                  <Typography variant="body1" align="center">
                     <b>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                        dignissim elementum. Mollis elit sodales taciti duis praesent id. Consequat urna vitae morbi
                        nunc congue.
                     </b>
                  </Typography>
               </Grid>
               <Grid item>
                  <Typography variant="body1" align="center">
                     Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit sodales
                     taciti duis praesent id. Consequat urna vitae morbi nunc congue.
                  </Typography>
               </Grid>
               <Grid item>
                  <Typography variant="body1" align="center">
                     Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit sodales
                     taciti duis praesent id. Consequat urna vitae morbi nunc congue.
                  </Typography>
               </Grid>
               <Grid item>
                  <Typography variant="body1" align="center">
                     Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit sodales
                     taciti duis praesent id. Consequat urna vitae morbi nunc congue.
                  </Typography>
               </Grid>
            </Grid>
         </Grid>
         <Grid item xs={5} align="center">
            <img src={imageA} alt="Words" />
         </Grid>
      </Grid>
   );
};

export function TextWithImage(props) {
   return <TextToTheRight />;
}
