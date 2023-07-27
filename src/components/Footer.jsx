import logo from "../assets/logo-light.png";

const Footer = () => {
  return (
    <footer className="footer">
      <hr />
      <div className="footer__body">
        <div className="footer__logo">
          <img src={logo} alt="Footer Logo" />
        </div>
        <div className="footer__links">
          <div className="footer__links__social">
            <h4 className="footer__links__heading">Social</h4>
            <ul className="footer__links__list">
              <li className="footer__links__item">Facebook</li>
              <li className="footer__links__item">Twitter</li>
              <li className="footer__links__item">Discord</li>
            </ul>
          </div>
          <div className="footer__links__resources">
            <h4 className="footer__links__heading">Resources</h4>
            <ul className="footer__links__list">
              <li className="footer__links__item">News</li>
              <li className="footer__links__item"></li>
              <li className="footer__links__item">Brand Assets</li>
            </ul>
          </div>
          <div className="footer__links__company">
            <h4 className="footer__links__heading">Company</h4>
            <ul className="footer__links__list">
              <li className="footer__links__item">About Us</li>
              <li className="footer__links__item">Pricing</li>
              <li className="footer__links__item">Partners</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <p className="footer__copyright">Copyright &copy; 2023 Coin Wise</p>
    </footer>
  );
};

export default Footer;
