import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import { setValueFilterTicket, switchFilterAll } from '../../store/ticketsSlice';

import classes from './SideBar.module.scss';

const SideBar = () => {
  const [checkedAllTicket, setCheckedAllTicket] = useState(true);
  const [checkedZero, setCheckedZero] = useState(true);
  const [checkedOne, setCheckedOne] = useState(true);
  const [checkedTwo, setCheckedTwo] = useState(true);
  const [checkedThree, setCheckedThree] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (checkedZero && checkedOne && checkedTwo && checkedThree) {
      setCheckedAllTicket(true);
    } else {
      setCheckedAllTicket(false);
    }
  }, [checkedZero, checkedOne, checkedTwo, checkedThree]);
  useEffect(() => {
    dispatch(switchFilterAll(checkedAllTicket));
  }, [dispatch, checkedAllTicket]);
  useEffect(() => {
    dispatch(setValueFilterTicket({ isChecked: checkedZero, filterValue: 0 }));
  }, [checkedZero, dispatch]);
  useEffect(() => {
    dispatch(setValueFilterTicket({ isChecked: checkedOne, filterValue: 1 }));
  }, [checkedOne, dispatch]);
  useEffect(() => {
    dispatch(setValueFilterTicket({ isChecked: checkedTwo, filterValue: 2 }));
  }, [checkedTwo, dispatch]);
  useEffect(() => {
    dispatch(setValueFilterTicket({ isChecked: checkedThree, filterValue: 3 }));
  }, [checkedThree, dispatch]);

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'All':
        setCheckedAllTicket(e.target.checked);
        break;
      case 'Zero':
        setCheckedZero(e.target.checked);
        break;
      case 'One':
        setCheckedOne(e.target.checked);
        break;
      case 'Two':
        setCheckedTwo(e.target.checked);
        break;
      case 'Three':
        setCheckedThree(e.target.checked);
        break;
      default:
        setCheckedAllTicket(e.target.checked);
        setCheckedZero(e.target.checked);
        setCheckedOne(e.target.checked);
        setCheckedTwo(e.target.checked);
        setCheckedThree(e.target.checked);
    }
  };

  return (
    <div className={classes.sideBar}>
      <h3 className={classes['sideBar__title']}>Количество пересадок</h3>
      <form action="" className={classes.option}>
        <label htmlFor="1" className={classes['sideBar__label']}>
          <input
            onChange={handleChange}
            name="All"
            type="checkbox"
            className={classes['sideBar__input']}
            id="1"
            checked={checkedAllTicket}
          />
          <span className={classes['sideBar__chekBox']}></span>
          Все
        </label>

        <label className={classes['sideBar__label']} htmlFor="2">
          <input
            onChange={handleChange}
            name="Zero"
            type="checkbox"
            className={classes['sideBar__input']}
            id="2"
            checked={checkedZero}
          />
          <span className={classes['sideBar__chekBox']}></span>
          Без пересадок
        </label>

        <label className={classes['sideBar__label']} htmlFor="3">
          <input
            onChange={handleChange}
            name="One"
            type="checkbox"
            className={classes['sideBar__input']}
            id="3"
            checked={checkedOne}
          />
          <span className={classes['sideBar__chekBox']}></span>1 пересадка
        </label>

        <label className={classes['sideBar__label']} htmlFor="4">
          <input
            onChange={handleChange}
            name="Two"
            type="checkbox"
            className={classes['sideBar__input']}
            id="4"
            checked={checkedTwo}
          />
          <span className={classes['sideBar__chekBox']}></span>2 пересадки
        </label>

        <label className={classes['sideBar__label']} htmlFor="5">
          <input
            onChange={handleChange}
            name="Three"
            type="checkbox"
            className={classes['sideBar__input']}
            id="5"
            checked={checkedThree}
          />
          <span className={classes['sideBar__chekBox']}></span>3 пересадки
        </label>
      </form>
    </div>
  );
};

export default SideBar;
