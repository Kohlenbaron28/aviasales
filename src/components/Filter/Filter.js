import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { sortByPrice, sortByDuration, sortByOptimal } from '../../store/ticketsSlice';

import classes from './Filter.module.scss';

export default function Filter() {
  const [price, setPrice] = useState(false);
  const [duration, setDuration] = useState(false);
  const [optimal, setOptimal] = useState(false);

  const dispatch = useDispatch();

  return (
    <form className={classes.form}>
      <div
        className={classes['form_radio_btn first']}
        onClick={() => {
          dispatch(sortByPrice());
          setPrice(true);
          setDuration(false);
          setOptimal(false);
          // console.log(e.target.value);
        }}
      >
        <input
          className={classes['form_radio_btn__input']}
          id="radio-1"
          type="radio"
          name="Price"
          value="1"
          checked={price}
        />
        <label className={classes['form_radio_btn__label']} htmlFor="radio-1">
          Самый дешевый
        </label>
      </div>

      <div
        className={classes['form_radio_btn second']}
        onClick={() => {
          dispatch(sortByDuration());
          setPrice(false);
          setDuration(true);
          setOptimal(false);
          //console.log(e.target.value);
        }}
      >
        <input
          className={classes['form_radio_btn__input']}
          id="radio-2"
          type="radio"
          name="Duration"
          value="2"
          checked={duration}
        />
        <label className={classes['form_radio_btn__label']} htmlFor="radio-2">
          Самый быстрый
        </label>
      </div>

      <div
        className={classes['form_radio_btn']}
        onClick={() => {
          dispatch(sortByOptimal());
          setPrice(false);
          setDuration(false);
          setOptimal(true);
          //console.log(e.target.value);
        }}
      >
        <input
          className={classes['form_radio_btn__input']}
          id="radio-3"
          type="radio"
          name="Optimal"
          value="3"
          checked={optimal}
        />
        <label className={classes['form_radio_btn__label']} htmlFor="radio-3">
          Оптимальный
        </label>
      </div>
    </form>
  );
}
