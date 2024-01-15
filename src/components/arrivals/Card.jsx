import styles from './Arrivals.module.scss';

import imgArrow from '../../assets/arrow-right.svg';

export function Card({ img, title }) {
  return (
    <div className={styles.card}>
      <img src={img} alt="" />

      <div className={styles.textWrap}>
        <div className="">
          <h3>{title}</h3>
          <p>Explore Now!</p>
        </div>

        <img src={imgArrow} alt="Arrow right" />

      </div>

    </div>
  );
};