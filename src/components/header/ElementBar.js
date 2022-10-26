import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTopicId } from "../../store/slices/topicId.slice";

const ElementBar = ({ id, text, selectedElement, setSelectedElement }) => {
    const dispatch = useDispatch();
    const liRef = useRef();
    const checkRef = useRef();

    const selectLi = () => {
        setSelectedElement(id);
        liRef.current.style.color = "blue";
        checkRef.current.id === id
            ? (checkRef.current.checked = true)
            : (checkRef.current.checked = false);
    };

    useEffect(() => {
        if (selectedElement !== id) {
            liRef.current.style.color = "";
            if (checkRef.current.checked === true) {
                checkRef.current.checked = false;
            }
        }
    }, [selectedElement, id]);

    return (
        <li
            onClick={() => {
                dispatch(setTopicId(id));
                selectLi();
            }}
            ref={liRef}
        >
            <h4>{text}</h4>

            <input
                type="checkbox"
                id={id}
                ref={checkRef}
                style={{ opacity: 0, width: "1px", height: "1px" }}
            />
        </li>
    );
};

export default ElementBar;
