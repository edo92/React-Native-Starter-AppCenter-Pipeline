const initialState = {
  name: "Hello World",
  username: "",
  age: "",
  users: [],
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERS": {
      return {
        ...state,
        users: action.users,
      };
    }

    case "SET_USERNAME": {
      return {
        ...state,
        username: action.username,
      };
    }

    case "SET_AGE": {
      return {
        ...state,
        age: action.age,
      };
    }

    default:
      return state;
  }
};

export default user;
