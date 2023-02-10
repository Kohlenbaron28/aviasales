import Logo from '../img/s7.png';

import classes from './Card.module.scss';

export default function Card() {
  return (
    <div className={classes.card}>
      <div className={classes['card__top']}>
        <span className={classes['card__top__span']}>13 400 Р </span>
        <img className={classes['card__top__img']} src={Logo} alt="logo" />
      </div>
      <div className={classes['card__body']}>
        <div className={classes['card__place']}>
          <div>
            <div className={classes['card__place__title']}>MOW – HKT</div>
            <span className={classes['card__place__time']}>10:45 – 08:00</span>
          </div>
          <div>
            <div className={classes['card__place__title']}>MOW – HKT</div>
            <span className={classes['card__place__time']}>11:20 – 00:50</span>
          </div>
        </div>
        <div className={classes['card__ride']}>
          <div>
            <div className={classes['card__ride__title']}>В пути</div>
            <span className={classes['card__ride__time']}>21ч 15м</span>
          </div>
          <div>
            <div className={classes['card__ride__title']}>В пути</div>
            <span className={classes['card__ride__time']}>13ч 30м</span>
          </div>
        </div>
        <div className={classes['card__replace']}>
          <div>
            <div className={classes['card__replace__title']}>2 пересадки</div>
            <span className={classes['card__replace__time']}>HKG, JNB</span>
          </div>
          <div>
            <div className={classes['card__replace__title']}>1 пересадка</div>
            <span className={classes['card__replace__time']}>HKG</span>
          </div>
        </div>
      </div>
    </div>
  );
}
