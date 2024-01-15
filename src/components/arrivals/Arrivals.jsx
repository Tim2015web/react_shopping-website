import styles from './Arrivals.module.scss';
import { Card } from './Card';

const importAll = (context) => context.keys().map(context);
const imgArrivals = importAll(require.context('../../assets/arrivals/', false, /\.(webp)$/));
const titleArrivals = ['Hoodies & Sweetshirt', 'Coats & Parkas', 'Tees & T-Shirt'];

export function Arrivals() {
  return (
    <div className={styles.arrivals}>
      <div className="container">

        <div className={styles.header}>
          <h2>NEW ARRIVALS</h2>
        </div>

        <div className={styles.cards}>

          {imgArrivals.map((imgArrivals, index) => (
            <Card key={index} img={imgArrivals} title={titleArrivals[index]} />
          ))}

        </div>
        
      </div>
    </div>
  );
};