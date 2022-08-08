export const initialState = {
  basket: [],
  user: null,
};

export const actionTypes = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
  REMOVE_ITEM: "REMOVE_ITEM",
  SET_USER: 'SET_USER'
};



export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_ITEM":
        const index = state.basket.findIndex((basketItem => basketItem.id === action.id))
        let newBasket = [...state.basket]
        if(index>=0){
            newBasket.splice(index,1)
        } 
      return {
       ...state,
       basket:newBasket
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }

    default:
      return state;
  }
};
