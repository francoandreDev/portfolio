import React from "react";
import { Link } from "react-scroll";
import { useDispatch } from "react-redux";
import { setTopicId } from "../../store/slices/topicId.slice";

const ElementBar = ({id, text}) => {
    const dispatch = useDispatch();
    return (
        <li>
            <Link
                to="topicId"
                smooth={true}
                duration={450}
                onClick={() => dispatch(setTopicId(id))}
            >
                {text}
            </Link>
        </li>
    );
};

export default ElementBar;
