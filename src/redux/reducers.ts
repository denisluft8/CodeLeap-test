export interface IState {
  user: string;
}

const initialState: IState = {
  user: "",
};

const rootReducer = (state: IState = initialState, action: any) => {
  switch (action.type) {
    case "SAVE_NAME":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
