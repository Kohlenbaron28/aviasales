import Filter from '../Filter/Filter';
import Card from '../Card/Card';

import classes from './CardList.module.scss';

export default function CardList() {
  return (
    <div className={classes.cardList}>
      <Filter />
      <Card />
      <Card />
      <Card />
      <button className={classes.btn}>Показать еще 5 билетов!</button>
    </div>
  );
}
