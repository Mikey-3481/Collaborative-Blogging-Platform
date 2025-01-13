import { TOGGLE_DIALOG } from "./actions";

const initialState = {
  isDialogOpen: false,
  user: {
    
  }
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DIALOG:
      return {
        ...state,
        isDialogOpen: !state.isDialogOpen,
      };

    default:
      return state;
  }
};

export default itemReducer;
