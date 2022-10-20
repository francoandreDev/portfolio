import React, { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUserName } from "../../store/slices/userName.slice";
import "./Form.css";

const GetUserName = () => {
    const dispatch = useDispatch();
    const nameRef = useRef();
    const [name, setName] = useState("");
    const [isName, setIsName] = useState(false);

    const formHandler = (e) => {
        e.preventDefault();
        isName ? dispatch(setUserName(name)) : dispatch(setUserName(""));
    };

    useEffect(() => {
        nameRef.current.focus();
    }, []);

    useEffect(() => {
        const minLength = 2;
        name.length <= minLength ? setIsName(false) : setIsName(true);
    }, [name]);
    return (
        <form
            autoComplete="off"
            className="flex-column-center max-size"
            onSubmit={(event) => formHandler(event)}
        >
            <h2>Welcome</h2>
            <div className="flex-column-center">
                {!isName && name.length !== 0 ? (
                    <label
                        htmlFor="input-username"
                        style={{ color: "crimson" }}
                    >
                        Length of your name must be greater
                    </label>
                ) : (
                    <p>Press Enter to send your name</p>
                )}
                <input
                    type="text"
                    ref={nameRef}
                    placeholder="Write your name here "
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="input-username"
                />
            </div>
        </form>
    );
};

export default GetUserName;
