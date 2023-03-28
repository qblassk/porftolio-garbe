import '../components/Banner.css';
import imgBanner from '../assets/img/img-banner-byn.png';

export function Banner() {
   return (
      <div className="container">
         <img src={imgBanner} alt="Words" />
         <h1>ARQUITECTURA</h1>
         <h2>REGENERATIVA</h2>
      </div>
   );
}
