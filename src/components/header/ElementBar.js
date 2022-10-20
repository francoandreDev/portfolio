import React from "react";
import { useDispatch } from "react-redux";
import { setTopicId } from "../../store/slices/topicId.slice";

const ElementBar = ({ id, text }) => {
    const dispatch = useDispatch();
    return <li onClick={() => dispatch(setTopicId(id))}>{text}</li>;
};

export default ElementBar;
