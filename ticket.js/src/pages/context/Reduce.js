export const initialstate = {
  event: [],
  Authenticated: JSON.parse(localStorage.getItem("islogged")) || false,
};
export const stateReducer = (state, action) => {
  console.log("action", state, action);

  switch (action.type) {
    case "login":
      return {
        ...state,
        Authenticated: (state.Authenticated = true),
      };

    case "add":
      return {
        ...state,
        event: action.payload,
      };
      case 'deltask':
        return{
            ...state,
            event:state.event.filter((item)=>item.id!== action.payload)
        }
  }
};
