export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_LOCATION':
      return { ...state, location: action.payload };

    default:
      throw new Error('Sin ubicacion encontrada');
  }
};
