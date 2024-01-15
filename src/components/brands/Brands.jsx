import styles from './Brands.module.scss';

const importAll = (context) => context.keys().map(context);
const images = importAll(require.context('../../assets/brands', false, /\.(svg)$/));
<img src={images[0]} alt="" />

export function Brands() {
  return (
    <div className={styles.brands}>
      <div className="container">
        <div className={styles.wrapper}>

          {/* {images.map((images, index) => (
            <a href="#!"><img key={index} src={images} alt="Company logotype" /></a>
          ))} */}

          {images.map((image) => (
            <a href="#!" key={image} ><img src={image} alt="Company logotype" /></a>
          ))}

        </div>
      </div>
    </div>
  );
};