import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setUserName } from "../../store/slices/userName.slice";

const GetUserName = () => {
    const dispatch = useDispatch();
    const nameRef = useRef();
    const formHandler = () => {
        dispatch(setUserName(nameRef.current?.value));
    };
    return (
        <form onSubmit={() => formHandler()}>
            <input
                type="text"
                ref={nameRef}
                placeholder="Put your name here "
                style={{
                    textAlign: "center",
                    fontSize: "5vw",
                    outline: "none",
                    border: "1px solid gray"
                }}
            />
        </form>
    );
};

export default GetUserName;
