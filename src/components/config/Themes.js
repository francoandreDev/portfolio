import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import { changeTheme } from "../../store/slices/theme.slice";

const Themes = () => {
    const dispatchRedux = useDispatch();

    const initialState = {
        icon: <i className="fa-regular fa-sun"></i>,
        theme: "theme-dark",
        isDark: true
    };

    function reducer(state, action) {
        switch (action.type) {
            case "changeTheme":
                return state.isDark
                    ? {
                          icon: (
                              <i
                                  className="fa-regular fa-moon"
                              ></i>
                          ),
                          theme: "theme-light",
                          isDark: false
                      }
                    : {
                          icon: (
                              <i
                                  className="fa-regular fa-sun"
                              ></i>
                          ),
                          theme: "theme-dark",
                          isDark: true
                      };
            default:
                throw new Error();
        }
    }

    const [state, dispatchReducer] = useReducer(reducer, initialState);

    return (
        <div className={`${state.isDark ? "theme-dark" : "theme-light"}`}>
            <button
                onClick={() => {
                    dispatchReducer({ type: "changeTheme" });
                    dispatchRedux(changeTheme());
                }}
                style={{color: `${!state.isDark ? "black" : "lightGray"}`}}
            >
                <span>Theme {state.icon}</span>
            </button>
        </div>
    );
};

export default Themes;
