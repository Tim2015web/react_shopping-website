import styles from './Hero.module.scss';
import heroImg from '../../assets/header-img.webp';

export function Hero() {
  return (
    <div className={styles.hero}>
      <div className="container">
        <div className={styles.wrapper}>

          <div className={styles.text}>

            <div className={styles.title}>
              <span>LET’S</span><br />
              EXPLORE<br />
              <span className={styles.titleSecondWrap}>UNIQUE</span><br />
              CLOTHES.
            </div>

            <div className={styles.description}>
              Live for Influential and Innovative fashion!
            </div>

            <div className={styles.btnWrap}>
              <a href="#!">Shop Now</a>
            </div>

          </div>

          <div className={styles.img}>
            <img src={heroImg} alt="Funny girl" />
          </div>

        </div>
      </div>
    </div>
  );
};