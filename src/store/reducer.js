const initialState = {
  tickets: [],
  id: null,
  sortStation: null,
  showAllTickets: false,
  showZeroDuration: false,
  showOneDuration: false,
  showTwoDuration: false,
  showThreeDuration: false,
  loading: true,
};

export const checkboxReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case 'SHOW_ALL':
      if (
        action.payload.zeroP === true &&
        action.payload.oneP === true &&
        action.payload.twoP === true &&
        action.payload.threeP === true
      ) {
        return {
          ...state,
          showAllTickets: true,
        };
      }
      return Object.assign({}, state, {
        showAllTickets: action.payload.payload,
        showZeroDuration: action.payload.zeroP,
        showOneDuration: action.payload.oneP,
        showTwoDuration: action.payload.twoP,
        showThreeDuration: action.payload.threeP,
        tickets: state.tickets.filter(
          (obj) =>
            obj.segments[0].stops.length === 1 ||
            obj.segments[1].stops.length === 1 ||
            obj.segments[0].stops.length === 0 ||
            obj.segments[1].stops.length === 0 ||
            obj.segments[0].stops.length === 2 ||
            obj.segments[1].stops.length === 2 ||
            obj.segments[0].stops.length === 3 ||
            obj.segments[1].stops.length === 3
        ),
      });

    case 'SHOW_ZERO':
      return Object.assign({}, state, {
        showZeroDuration: action.payload.payload,
        tickets: state.tickets.filter(
          (obj) => obj.segments[0].stops.length === 0 || obj.segments[1].stops.length === 0
        ),
      });
    case 'SHOW_ONE':
      return Object.assign({}, state, {
        showOneDuration: action.payload.payload,
        tickets: state.tickets.filter(
          (obj) => obj.segments[0].stops.length === 1 || obj.segments[1].stops.length === 1
        ),
      });
    case 'SHOW_TWO':
      return Object.assign({}, state, {
        showTwoDuration: action.payload.payload,
        tickets: state.tickets.filter(
          (obj) => obj.segments[0].stops.length === 2 || obj.segments[1].stops.length === 2
        ),
      });
    case 'SHOW_THREE':
      return Object.assign({}, state, {
        showThreeDuration: action.payload.payload,
        tickets: state.tickets.filter(
          (obj) => obj.segments[0].stops.length === 3 || obj.segments[1].stops.length === 3
        ),
      });
    case 'SORT_BY_PRICE':
      return Object.assign({}, state, {
        sortStation: action.type,
        tickets: [...state.tickets].sort((prev, next) => (prev.price > next.price ? 1 : -1)),
      });
    case 'SORT_BY_DURATION':
      return Object.assign({}, state, {
        sortStation: action.type,
        tickets: [...state.tickets].sort((prev, next) =>
          prev.segments[0].duration + prev.segments[1].duration > next.segments[0].duration + next.segments[1].duration
            ? 1
            : -1
        ),
      });
    case 'SORT_BY_OPTIMAL':
      return Object.assign({}, state, {
        sortStation: action.type,
        tickets: [...state.tickets].sort((prev, next) =>
          prev.price > next.price &&
          prev.segments[0].duration + prev.segments[1].duration > next.segments[0].duration + next.segments[1].duration
            ? 1
            : -1
        ),
      });
    case 'GET_TICKETS_ID':
      return {
        ...state,
        id: action.id,
      };
    case 'GET_TICKETS':
      return Object.assign({}, state, {
        tickets: [...state.tickets, ...action.ticketsVal],
        stop: action.stop,
        loading: false,
      });
    default:
      return state;
  }
};
