import styles from './Favourite.module.scss';
import { FavouriteCard } from './FavouriteCard';

const importAll = (context) => context.keys().map(context);
const imagesFav = importAll(require.context('../../assets/favourite', false, /\.(webp)$/));
const titleFav = ['Trending on instagram', 'All Under $40'];

export function Favourite() {
  return (
    <div className={styles.favourite}>
      <div className="container">

        <div className={styles.header}>
          <h2>Young’s Favourite</h2>
        </div>

        <div className={styles.main}>

          {imagesFav.map((imagesFav, index) => (
            <FavouriteCard key={imagesFav} image={imagesFav} title={titleFav[index]} />))}

        </div>

      </div>
    </div>
  );
};