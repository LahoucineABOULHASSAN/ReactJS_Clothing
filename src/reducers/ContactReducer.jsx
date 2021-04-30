export const contactReducer = (state, action) => {
  switch (action.type) {
    case 'INSERT_DATA':
      return {
        ...state,
        [action.event.target.name]: action.event.target.value,
      };
    case 'POST_REQUEST':
      action.event.preventDefault();
      //   axios call
      // clear form
      return { name: '', email: '', message: '' };
    default:
      return state;
  }
};
