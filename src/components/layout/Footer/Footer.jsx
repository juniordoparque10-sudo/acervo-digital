import BrandMark from "../../brand/BrandMark/BrandMark";
import { demoInstitution } from "../../../data/demoData";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="footer__brand">
        <div className="footer__logo">
          <BrandMark variant="isotipo" />
        </div>

        <div>
          <strong>{demoInstitution.name}</strong>
          <p>{demoInstitution.slogan}</p>
        </div>
      </div>

      <p className="footer__credits">Desenvolvido por {demoInstitution.developer}</p>
    </footer>
  );
}
