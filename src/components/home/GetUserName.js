import React, { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUserName } from "../../store/slices/userName.slice";

const GetUserName = () => {
    const dispatch = useDispatch();
    const nameRef = useRef();
    const [showLabel, setShowLabel] = useState(false);
    const [name, setName] = useState("");
    const formHandler = (e) => {
        e.preventDefault();
        if (name.length > 1) {
            dispatch(setUserName(name));
        } else dispatch(setUserName(""));
    };
    useEffect(() => {
        nameRef.current.focus();
    }, []);
    useEffect(() => {
        (name.length < 2) ? setShowLabel(true) : setShowLabel(false);
    }, [name]);
    return (
        <form
            onSubmit={(event) => formHandler(event)}
            style={{
                display: "flex",
                flexDirection: "column-reverse",
                alignItems: "center",
                fontSize: "2vw"
            }}
        >
            {showLabel && (
                <label htmlFor="input-username" style={{ color: "crimson" }}>
                    Length of your name must be greater
                </label>
            )}
            <input
                type="text"
                ref={nameRef}
                placeholder="Write your name here "
                value={name}
                onChange={e=>setName(e.target.value)}
                style={{
                    textAlign: "center",
                    fontSize: "5vw",
                    outline: "none",
                    border: "1px solid gray"
                }}
                id="input-username"
            />
        </form>
    );
};

export default GetUserName;
