import React from "react";
import { useSelector } from "react-redux";

const Main = () => {
    const theme = useSelector((state) => state.theme);

    return (
        <main className={`${theme}`}>
            <h1>Hello my name is Franco</h1>
        </main>
    );
};

export default Main;
