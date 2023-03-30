import '../components/Footer.css';
import logo from '../assets/img/logo.png';

export function Footer() {
   return (
      <div className="footer-container">
         <p>Todos los derechos reservados.</p>
         <img src={logo} alt="Words" />
      </div>
   );
}
