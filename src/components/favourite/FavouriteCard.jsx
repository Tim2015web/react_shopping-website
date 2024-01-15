import styles from './Favourite.module.scss';

import imgArrow from '../../assets/arrow-right.svg';

export function FavouriteCard({ image, title }) {
  return (
    <div className={styles.favouriteCard}>

      <div className={styles.imageWrap}>
        <img src={image} alt="Favourite pic" />
      </div>

      <div className={styles.textWrap}>

        <div>
          <h3>{title}</h3>
          <p>Explore Now!</p>
        </div>

        <img src={imgArrow} alt="Arrow right" />

      </div>

    </div>
  );
};