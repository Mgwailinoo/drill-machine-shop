const getDefaultCart = () => [];

const initialState = {
  cart: getDefaultCart(),
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const isPresent = state.cart?.find(
        (item) => item.id === action.payload.id
      );
      let newCart;

      if (isPresent) {
        newCart = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      } else {
        const newPayload = { ...action.payload, qty: 0 };
        newCart = [...state.cart, newPayload];
      }

      const newState = { ...state, cart: newCart };

      return newState;
    }

    case "IN_QTY": {
      const newChangeCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, qty: item.qty + 1 };
        } else {
          return item;
        }
      });

      const newState = { ...state, cart: newChangeCart };

      return newState;
    }

    case "DEC_QTY": {
      const newChangeCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, qty: item.qty - 1 };
        } else {
          return item;
        }
      });

      const newState = { ...state, cart: newChangeCart };

      return newState;
    }

    case "REMOVE_QTY": {
      const blankTheCart = state.cart?.filter(
        (item) => !(item.id === action.payload.id)
      );
      const newState = { ...state, cart: blankTheCart };

      return newState;
    }

    case "CLEAR_QTY": {
      const newState = { ...state, cart: [] };

      return newState;
    }

    default:
      return state;
  }
};

export { cartReducer };
