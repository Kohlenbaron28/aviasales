import classes from './SideBar.module.scss';

export default function SideBar() {
  return (
    <div className={classes.sideBar}>
      <h3 className={classes['sideBar__title']}>Количество пересадок</h3>

      <form action="" className={classes.option}>
        <label htmlFor="1" className={classes['sideBar__label']}>
          <input type="checkbox" className={classes['sideBar__input']} id="1" />
          <span className={classes['sideBar__chekBox']}></span>
          Все
        </label>

        <label className={classes['sideBar__label']} htmlFor="2">
          <input type="checkbox" className={classes['sideBar__input']} id="2" />
          <span className={classes['sideBar__chekBox']}></span>
          Без пересадок
        </label>

        <label className={classes['sideBar__label']} htmlFor="3">
          <input type="checkbox" className={classes['sideBar__input']} id="3" />
          <span className={classes['sideBar__chekBox']}></span>1 пересадка
        </label>

        <label className={classes['sideBar__label']} htmlFor="4">
          <input type="checkbox" className={classes['sideBar__input']} id="4" />
          <span className={classes['sideBar__chekBox']}></span>2 пересадки
        </label>

        <label className={classes['sideBar__label']} htmlFor="5">
          <input type="checkbox" className={classes['sideBar__input']} id="5" />
          <span className={classes['sideBar__chekBox']}></span>3 пересадки
        </label>
      </form>
    </div>
  );
}
