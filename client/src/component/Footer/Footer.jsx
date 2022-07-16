import styles from "./Footer.module.scss";
import { SLOGAN, INFO, FOR_CLIENTS, CONTACTS } from "./footer_data";
import { Logo, FooterNav, Contacts, BeInTouch } from "./footer_components";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Logo slogan={SLOGAN} styles={styles} />
        <FooterNav about={INFO} styles={styles} />
        <FooterNav about={FOR_CLIENTS} styles={styles} />
        <Contacts contacts={CONTACTS} styles={styles} />
        <BeInTouch />
      </div>
      <div className={styles.copyright}>
        <span className={styles.text}>
          &copy; 1997-{new Date().getFullYear()} Меблева фабрика «LORI». Усі
          права захищені.
        </span>
      </div>
    </footer>
  );
}
