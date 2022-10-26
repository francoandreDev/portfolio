import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTopicId } from "../../store/slices/topicId.slice";

const ElementBar = ({ id, text, selectedElement, setSelectedElement }) => {
    const dispatch = useDispatch();
    const liRef = useRef();
    const selectLi = () => {
        setSelectedElement(id);
        liRef.current.style.color = "blue";
    };
    useEffect(() => {
        if (selectedElement !== id) {
            liRef.current.style.color = "";
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
            {text}
        </li>
    );
};

export default ElementBar;
