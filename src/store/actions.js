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
export const getId = () => {
  return fetch('https://aviasales-test-api.kata.academy/search').then((res) => res.json());
};

export const getTicketsById = () => {
  let idd = null;
  //let arr = [];
  return function (dispatch) {
    getId()
      .then((res) => {
        idd = res.searchId;
        return res.searchId;
      })
      .then((id) => {
        console.log(idd);
        return fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`);
      })
      //   .then((res) => {
      //     res.json();
      //     arr.push(res);
      //     console.log(arr);
      //     while (res.stop === false) {
      //       let val = fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${idd}`);
      //       arr.push(val.json());
      //     }
      //     return arr;
      //   })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        dispatch({
          type: 'GET_TICKETS',
          ticketsVal: res.tickets,
          stop: res.stop,
        });
      });
  };
};
// export const getId = () => {
//     return function (dispatch) {
//       fetch('https://aviasales-test-api.kata.academy/search')
//         .then((res) => res.searchId)
//         .then((res) => res.json())
//         .then((id) =>
//           dispatch({
//             type: 'GET_TICKETS_ID',
//             id: id,
//           })
//         );
//     };
//   };
