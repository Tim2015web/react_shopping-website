import styles from './Vouchers.module.scss';

import imgVouchers from '../../assets/vouchers-img.webp';
import imgLogo1 from '../../assets/app-store.webp';
import imgLogo2 from '../../assets/google-play.webp';

export function Vouchers() {
  return (
    <div className={styles.vouchers}>
      <div className="container">
        <div className={styles.wrapper}>

          <div className={styles.textWrap}>

            <div className={styles.titleWrap}>
              <h2>DOWNLOAD APP & GET THE VOUCHER!</h2>
              <p>Get 30% off for first transaction using Rondovision mobile app for now.</p>
            </div>

            <div className={styles.logoWrap}>
              <img src={imgLogo1} alt="Logotype App Store" />
              <img src={imgLogo2} alt="Logotype Google Play" />
            </div>

          </div>

          <div className={styles.imageWrap}>
            <img src={imgVouchers} alt="Phone with apps on the screen" />
          </div>

        </div>
      </div>
    </div>
  );
};