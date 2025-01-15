import { TOGGLE_DIALOG } from "../actions/modalActions";

const initialDialogState = {
  isDialogOpen: false,
};

const itemReducer = (state = initialDialogState, action) => {
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
