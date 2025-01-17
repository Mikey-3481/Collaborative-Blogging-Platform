import {
  TOGGLE_CONFIRM,
  TOGGLE_TITLE,
} from "../actions/modalActions";

const initialDialogState = {
  isTitleDialogOpen: false,
  isConfirmDialogOpen: false,
};

const itemReducer = (state = initialDialogState, action) => {
  switch (action.type) {
    case TOGGLE_TITLE:
      return {
        ...state,
        isTitleDialogOpen: !state.isTitleDialogOpen,
      };
    case TOGGLE_CONFIRM:
      return {
        ...state,
        isConfirmDialogOpen: !state.isConfirmDialogOpen,
      };

    default:
      return state;
  }
};

export default itemReducer;
