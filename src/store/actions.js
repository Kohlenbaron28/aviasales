import apiServise from './service';

export const all = (payload, zeroP, oneP, twoP, threeP) => {
  return { type: 'SHOW_ALL', payload, zeroP, oneP, twoP, threeP };
};
export const zero = (payload) => {
  return { type: 'SHOW_ZERO', payload };
};
export const one = (payload) => {
  return { type: 'SHOW_ONE', payload };
};
export const two = (payload) => {
  return { type: 'SHOW_TWO', payload };
};
export const three = (payload) => {
  return { type: 'SHOW_THREE', payload };
};
export const sortByPrice = () => {
  return { type: 'SORT_BY_PRICE' };
};
export const sortByDuration = () => {
  return { type: 'SORT_BY_DURATION' };
};
export const sortByOptimal = () => {
  return { type: 'SORT_BY_OPTIMAL' };
};
export const updateSearchId = (searchId) => ({
  type: 'UPDATE_SEARCH_ID',
  payload: searchId,
});
export const updatePacketTickets = (tickets) => ({
  type: 'UPDATE_PACKET_TICKETS',
  payload: tickets,
});
export const ticketsError = (error) => ({
  type: 'TICKETS_ERROR',
  payload: error,
});
export const toggleStop = (booleanValue) => ({
  type: 'TOGGLE_STOP',
  payload: booleanValue,
});

export const getTicketsById = (searchId) => {
  return function (dispatch) {
    apiServise.getTickets(searchId).then((res) => {
      dispatch(updatePacketTickets(res.tickets));
      // если от сервера пришло, что stops: true обновляет isStop
      if (res.stop) {
        dispatch(toggleStop(res.stop));
      }
    });
  };
};
