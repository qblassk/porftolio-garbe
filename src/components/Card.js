import '../components/Card.css';
import { Grid, Typography } from '@mui/material';

const cardImg = (props) => {
   return (
      <Grid item xs={5} align="center">
         <img src={props.content.img} alt="Words" />
      </Grid>
   );
};

const cardText = (props) => {
   return (
      <Grid item xs={5}>
         <Grid container direction="column" justifyContent="center" alignItems="center" spacing={3}>
            <Grid item>
               <Typography variant="h6" align="center" color="#b3b3b3">
                  {props.content.title}
               </Typography>
            </Grid>
            <Grid item>
               <Typography variant="body1" align="center" color="#b3b3b3">
                  <b>{props.content.subtitle}</b>
               </Typography>
            </Grid>
            <Grid item>
               <Typography variant="body1" align="center" color="#b3b3b3">
                  {props.content.descriptionA}
               </Typography>
            </Grid>
            <Grid item>
               <Typography variant="body1" align="center" color="secondary">
                  <i>{props.content.descriptionB}</i>
               </Typography>
            </Grid>
            <Grid item>
               <Typography variant="body1" align="center" color="#b3b3b3">
                  {props.content.descriptionC}
               </Typography>
            </Grid>
         </Grid>
      </Grid>
   );
};

const ImgRight = (props) => {
   return (
      <Grid container className="grid-main" direction="row" justifyContent="center" alignItems="center">
         {cardText(props)}
         {cardImg(props)}
      </Grid>
   );
};

const ImgLeft = (props) => {
   return (
      <Grid container className="grid-main" direction="row" justifyContent="center" alignItems="center">
         {cardImg(props)}
         {cardText(props)}
      </Grid>
   );
};

export function Card(props) {
   return props.imgRight ? <ImgRight content={props.content} /> : <ImgLeft content={props.content} />;
}
