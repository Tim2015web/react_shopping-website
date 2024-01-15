import styles from './Banner.module.scss';

import imgBanner from '../../assets/promo-img.webp';

export function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.wrapper}>

        <div className={styles.leftCol}>
          <img src={imgBanner} alt="Thinking girl" />
        </div>

        <div className={styles.rightCol}>
        <div>
          <h2><span>PAYDAY</span><br />SALE NOW</h2>
          <p>Spend minimal $100 get 30% off voucher code for your next purchase</p>
          <p>1 June - 10 June 2021</p>
          <p>*Terms & Conditions apply</p>
          <a href="#!" className={styles.bannerBtn}>SHOP NOW</a>
        </div>
        </div>

      </div>
    </div>
  );
};