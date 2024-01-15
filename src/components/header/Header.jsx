import styles from './Header.module.scss';
import logoImg from '../../assets/logotype.svg';
import menuImg from '../../assets/burger.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>

          <div className={styles.logotype}>
            <img src={logoImg} alt="Logotype" />
            <span>fashion</span>
          </div>

          <nav className={styles.navigation}>
            <ul>
              <li><a href="#!">CATALOGUE</a></li>
              <li><a href="#!">FASHION</a></li>
              <li><a href="#!">FAVOURITE</a></li>
              <li><a href="#!">LIFESTYLE</a></li>
            </ul>
            <a href="#!" className={styles.navBtn}>SIGN UP</a>
          </nav>

          <div className={styles.burgerBtn}>
            <img src={menuImg} alt="Burger" />
          </div>

        </div>
      </div>
    </header>
  );
};