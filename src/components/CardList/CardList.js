import { connect } from 'react-redux';

import Filter from '../Filter/Filter';
import Card from '../Card/Card';

import classes from './CardList.module.scss';

let max = 1;
let firstName = '';
let secondName = '';

const CardList = ({ tickets }) => {
  const elements = tickets.map((ticket) => {
    if (ticket.segments[0].stops.length === 1) {
      firstName = '1 пересадка';
    } else if (ticket.segments[0].stops.length === 2) {
      firstName = '2 пересадки';
    } else if (ticket.segments[0].stops.length === 3) {
      firstName = '3 пересадки';
    } else if (ticket.segments[0].stops.length === 0) {
      firstName = 'Без пересадок';
    }
    if (ticket.segments[1].stops.length === 1) {
      secondName = '1 пересадка';
    } else if (ticket.segments[1].stops.length === 2) {
      secondName = '2 пересадки';
    } else if (ticket.segments[1].stops.length === 3) {
      secondName = '3 пересадки';
    } else if (ticket.segments[1].stops.length === 0) {
      secondName = 'Без пересадок';
    }
    const parseDuration = (ms) => {
      let hours = ms / (1000 * 60 * 60);
      let absoluteHours = Math.floor(hours);
      var h = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours;

      //Get remainder from hours and convert to minutes
      var minutes = (hours - absoluteHours) * 60;
      var absoluteMinutes = Math.floor(minutes);
      var m = absoluteMinutes > 9 ? absoluteMinutes : '0' + absoluteMinutes;
      return h + 'ч ' + m + 'м';
    };
    const parseDurationToComa = (ms) => {
      let hours = ms / (1000 * 60 * 60);
      let absoluteHours = Math.floor(hours);
      var h = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours;

      //Get remainder from hours and convert to minutes
      var minutes = (hours - absoluteHours) * 60;
      var absoluteMinutes = Math.floor(minutes);
      var m = absoluteMinutes > 9 ? absoluteMinutes : '0' + absoluteMinutes;
      return h + ':' + m;
    };

    return (
      <Card
        key={max++}
        price={ticket.price}
        firstOrigin={ticket.segments[0].origin}
        firstDestination={ticket.segments[0].destination}
        secondOrigin={ticket.segments[1].origin}
        secondDestination={ticket.segments[1].destination}
        firstStops={ticket.segments[0].stops}
        secondStops={ticket.segments[1].stops}
        firstName={firstName}
        secondName={secondName}
        firstTime={parseDuration(ticket.segments[0].duration * 60000)}
        secondTime={parseDuration(ticket.segments[1].duration * 60000)}
        firstDate={ticket.segments[0].date}
        firstDuration={ticket.segments[0].duration}
        secondDate={ticket.segments[1].date}
        secondDuration={ticket.segments[1].duration}
        firstTimeComa={parseDurationToComa(ticket.segments[0].duration * 60000)}
        secondTimeComa={parseDurationToComa(ticket.segments[1].duration * 60000)}
      />
    );
  });
  return (
    <div className={classes.cardList}>
      <Filter />
      {elements}

      <button className={classes.btn}>Показать еще 5 билетов!</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets,
  };
};

export default connect(mapStateToProps)(CardList);
