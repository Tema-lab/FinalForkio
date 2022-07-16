import logo from "./footer_images/LORI_LOGO2.svg";
import insta from "./footer_images/insta.svg";
import fb from "./footer_images/fb.svg";
import styles from "./Footer.module.scss";
import Form from "./Form/Form";
import { Link } from "react-router-dom";

function Logo(props) {
  const { slogan } = props;
  return (
    <div className={`${styles.block} ${styles.logoContainer}`}>
      <a href="/">
        <img src={logo} alt="logo" className={styles.logo} />
      </a>
      <p>{slogan}</p>
    </div>
  );
}

function FooterNav(props) {
  const title = props.about.title;
  const links = props.about.links;
  return (
    <nav className={styles.block}>
      <h5>{title}</h5>
      {links.map((link, index) => (
        <Link to={link.url} key={index} className={styles.link}>
          {link.title}
        </Link>
      ))}
    </nav>
  );
}

function Contacts(props) {
  const title = props.contacts.title;
  const adress = props.contacts.adress;
  const email = props.contacts.email;
  return (
    <address className={styles.block}>
      <h5>{title}</h5>
      <p className={styles.adress}>{adress}</p>
      <a href={`mailto:${email}`} className={styles.link}>
        {email}
      </a>
    </address>
  );
}

function Socials() {
  return (
    <div className={styles.socials}>
      <h5>Стежте за нами</h5>
      <a href="https://www.instagram.com/lori_ua/">
        <img src={insta} alt="instagram" />
      </a>
      <a href="https://www.facebook.com/lori.ua/">
        <img src={fb} alt="facebook" />
      </a>
    </div>
  );
}

function BeInTouch() {
  return (
    <div className={styles.block}>
      <Form styles={styles} />
      <Socials />
    </div>
  );
}

function Plug() {
  return (
    <div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
    </div>
  );
}

export { Logo, FooterNav, Contacts, BeInTouch, Plug };
