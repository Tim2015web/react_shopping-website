import styles from './Footer.module.scss';

import imgFacebook from '../../assets/social/fb.svg';
import imgInstagram from '../../assets/social/in.svg';
import imgTwitter from '../../assets/social/tw.svg';
import imgLinkedIn from '../../assets/social/in.svg';

export function Footer() {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>

          <div className={styles.logoWrap}>

            <div className={styles.title}>
              <span>FASHION</span>
            </div>

            <div className={styles.description}>
              <p>Complete your style with awesome clothes from us.</p>
            </div>

            <div className={styles.social}>
              <a href="#!"><img src={imgFacebook} alt="Social link" /></a>
              <a href="#!"><img src={imgInstagram} alt="Social link" /></a>
              <a href="#!"><img src={imgTwitter} alt="Social link" /></a>
              <a href="#!"><img src={imgLinkedIn} alt="Social link" /></a>
            </div>

          </div>

          <nav className={styles.menuWrap}>

            <div className={styles.row}>
              <ul>
                <li><p>Company</p></li>
                <li><a href="#!">About</a></li>
                <li><a href="#!">Contact us</a></li>
                <li><a href="#!">Support</a></li>
                <li><a href="#!">Careers</a></li>
              </ul>
            </div>

            <div className={styles.row}>
              <ul>
                <li><p>Quick Link</p></li>
                <li><a href="#!">Share Location</a></li>
                <li><a href="#!">Orders Tracking</a></li>
                <li><a href="#!">Size Guide</a></li>
                <li><a href="#!">FAQs</a></li>
              </ul>
            </div>

            <div className={styles.row}>
              <ul>
                <li><p>Legal</p></li>
                <li><a href="#!">Terms & conditions</a></li>
                <li><a href="#!">Privacy Policy</a></li>
              </ul>
            </div>

          </nav>

        </div>
      </div>
    </div>
  );
};