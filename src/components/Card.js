import '../components/Card.css';
import { Grid, Typography } from '@mui/material';

const cardImg = (props) => {
   return (
      <Grid item xs={6} align="center">
         <img src={props.content.img} alt="Words" />
      </Grid>
   );
};

const cardText = (props) => {
   return (
      <Grid item xs={6}>
         <Grid container direction="column" justifyContent="center" alignItems="center" spacing={'1.1vw'}>
            <Grid item className="grid-text">
               <Typography variant="h6" align="center" color="#4d4d4d" fontSize="1.6vw">
                  {props.content.title}
               </Typography>
            </Grid>
            <Grid item className="grid-text">
               <Typography variant="body1" align="center" color="#499e7e" fontSize="1.4vw">
                  <b>{props.content.subtitle}</b>
               </Typography>
            </Grid>
            <Grid item className="grid-text">
               <Typography variant="body1" align="center" color="#4d4d4d" fontSize="1.2vw">
                  {props.content.descriptionA}
               </Typography>
            </Grid>
            <Grid item className="grid-text">
               <Typography variant="body1" align="center" color="#499e7e" fontSize="1.2vw">
                  <i>{props.content.descriptionB}</i>
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
