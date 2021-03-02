const initialState = {
  currentlyEditing: false,
  isOpen: false,
  orderDocId: null,
};

export const orderFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEW_ORDER":
      return { ...state, isOpen: true };
    case "EDIT_ORDER":
      return {
        ...state,
        currentlyEditing: true,
        isOpen: true,
        orderDocId: action.payload,
      };
    case "FINISHED_EDITING":
      return {
        ...state,
        currentlyEditing: false,
        isOpen: false,
        orderDocId: null,
      };
    default:
      return { ...state };
  }
};
