import styles from './Community.module.scss';

export function Community() {
  return (
    <div className={styles.community}>
      <div className="container">
        <div className={styles.wrapper}>

          <div className={styles.titleWrap}>
            <h2>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h2>
            <p>Type your email down below and be young wild generation</p>
          </div>

          <div className={styles.formWrap}>
            <form action="">
              <input type="text" placeholder='Add your email here' />
              <button>SEND</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};