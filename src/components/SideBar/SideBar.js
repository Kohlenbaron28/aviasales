import { bindActionCreators } from 'redux';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';

import classes from './SideBar.module.scss';

const SideBar = ({ tickets, all, zero, one, two, three, getTicketsById, stop }) => {
  const [checkedAllTicket, setCheckedAllTicket] = useState(false);
  const [checkedZero, setCheckedZero] = useState(false);
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const [checkedThree, setCheckedThree] = useState(false);

  console.log(tickets, stop);

  useEffect(() => {
    getTicketsById();
  }, []);
  useEffect(() => {
    if (checkedZero && checkedOne && checkedTwo && checkedThree) {
      all({
        payload: true,
        zeroP: checkedZero,
        oneP: checkedOne,
        twoP: checkedTwo,
        threeP: checkedThree,
      });
      setCheckedAllTicket(true);
    } else {
      setCheckedAllTicket(false);
      //all({ payload: false });
    }
  }, [checkedZero, checkedOne, checkedTwo, checkedThree]);
  useEffect(() => {
    getTicketsById();
  }, []);

  //   useEffect(() => {
  //     all();
  //   }, [checkedAllTicket]);
  //   useEffect(() => {
  //     zero();
  //   }, [checkedZero]);
  //   useEffect(() => {
  //     one();
  //   }, [checkedOne]);
  //   useEffect(() => {
  //     two();
  //   }, [checkedTwo]);
  //   useEffect(() => {
  //     three;
  //   }, [checkedThree]);
  //   const fetchingId = () => {
  //     fetch('https://aviasales-test-api.kata.academy/search')
  //       .then((res) => res.json())
  //       .then((res) => res.searchId);
  //   };
  //   fetchingId();
  const handleChange = (e) => {
    switch (e.target.name) {
      case 'All':
        all({
          payload: e.target.checked,
          zeroP: e.target.checked,
          oneP: e.target.checked,
          twoP: e.target.checked,
          threeP: e.target.checked,
        });
        if (e.target.checked === false) {
          all({
            payload: false,
            zeroP: e.target.checked,
            oneP: e.target.checked,
            twoP: e.target.checked,
            threeP: e.target.checked,
          });
          setCheckedOne(false);
          setCheckedTwo(false);
          setCheckedThree(false);
          setCheckedZero(false);
        } else if (e.target.checked === true) {
          setCheckedOne(true);
          setCheckedTwo(true);
          setCheckedThree(true);
          setCheckedZero(true);
        }
        setCheckedAllTicket(e.target.checked);
        break;
      case 'Zero':
        zero({ payload: e.target.checked });
        setCheckedZero(e.target.checked);
        break;
      case 'One':
        one({ payload: e.target.checked });
        setCheckedOne(e.target.checked);
        break;
      case 'Two':
        two({ payload: e.target.checked });
        setCheckedTwo(e.target.checked);
        break;
      case 'Three':
        three({ payload: e.target.checked });
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

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets,
    stop: state.stop,
  };
};

const mapDicpatchToProps = (dispatch) => {
  const { all, zero, one, two, three, getTicketsById, getId } = bindActionCreators(actions, dispatch);
  return {
    all,
    zero,
    one,
    two,
    three,
    getTicketsById,
    getId,
  };
};

export default connect(mapStateToProps, mapDicpatchToProps)(SideBar);
