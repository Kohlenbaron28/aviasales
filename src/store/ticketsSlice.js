import { createSlice, current } from '@reduxjs/toolkit';

const ticketSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
    valueFilterTransfer: [],
    showAllTickets: true,
  },
  reducers: {
    switchFilterAll(state, action) {
      state.showAllTickets = action.payload;
    },
    setValueFilterTicket(state, action) {
      console.log(current(state));
      console.log(action);
      if (action.payload.isChecked) {
        state.valueFilterTransfer.push(action.payload.filterValue);
      } else {
        state.valueFilterTransfer = state.valueFilterTransfer.filter((item) => item !== action.payload.filterValue);
      }
    },
    sortByPrice(state) {
      const filterTickes = current(state.tickets).slice();
      console.log(filterTickes);
      filterTickes.sort((prev, next) => (prev.price > next.price ? 1 : -1));
    },
    sortByDuration(state) {
      const filterValue = current(state.tickets).slice();
      filterValue.sort((prev, next) => (prev.duration > next.duration ? 1 : -1));
    },
    sortByOptimal(state) {
      const filterValue = current(state.tickets).slice();
      filterValue.sort((prev, next) => (prev.price + prev.duration > next.price + next.duration ? 1 : -1));
    },
  },
});
export const { setValueFilterTicket, switchFilterAll, sortByPrice, sortByDuration, sortByOptimal } =
  ticketSlice.actions;
export default ticketSlice.reducer;
