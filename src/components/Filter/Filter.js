import classes from './Filter.module.scss';

export default function Filter() {
  return (
    <form className={classes.form}>
      <div className={classes['form_radio_btn first']}>
        <input className={classes['form_radio_btn__input']} id="radio-1" type="radio" name="radio" value="1" />
        <label className={classes['form_radio_btn__label']} htmlFor="radio-1">
          Самый дешевый
        </label>
      </div>

      <div className={classes['form_radio_btn second']}>
        <input className={classes['form_radio_btn__input']} id="radio-2" type="radio" name="radio" value="2" />
        <label className={classes['form_radio_btn__label']} htmlFor="radio-2">
          Самый быстрый
        </label>
      </div>

      <div className={classes['form_radio_btn']}>
        <input className={classes['form_radio_btn__input']} id="radio-3" type="radio" name="radio" value="3" />
        <label className={classes['form_radio_btn__label']} htmlFor="radio-3">
          Оптимальный
        </label>
      </div>
    </form>
  );
}
