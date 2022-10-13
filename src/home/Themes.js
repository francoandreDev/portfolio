import React, {useReducer} from 'react';

const Themes = () => {

    const initialState = {
        icon: <i class="fa-regular fa-sun"></i>,
        theme: "theme-dark",
        isDark: true
    };

    function reducer(state, action) {
        switch (action.type) {
            case "changeTheme":
                return state.isDark
                    ? {
                          icon: <i class="fa-regular fa-moon"></i>,
                          theme: "theme-light",
                          isDark: false
                      }
                    : {
                          icon: <i class="fa-regular fa-sun"></i>,
                          theme: "theme-dark",
                          isDark: true
                      };
            default:
                throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className={`bg-home ${state.isDark ? "theme-dark" : "theme-light"}`}>
        <button onClick={() => dispatch({ type: "changeTheme" }) } >
            Turn into: {state.icon}
        </button>
    </div>
    );
};

export default Themes;