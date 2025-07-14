import { useContext } from "react";
import { createContext, useReducer } from "react";

const initialState = { user: null };
const UserContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "get/user": {
      const user = JSON.parse(localStorage.getItem("user"));
      return { ...state, user: user };
    }
    case "set/user": {
      localStorage.setItem("user", action.payload);
      return { ...state, user: action.payload };
    }
    default: {
      return state;
    }
  }
}

export default function UserProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function getUser() {
    dispatch({ type: "get/user" });
  }

  function setUser(user) {
    dispatch({ type: "set/user", payload: user });
  }

  return (
    <UserContext.Provider value={{ getUser, setUser, user: state.user }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  return context;
}
