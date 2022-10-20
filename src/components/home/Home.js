import { useSelector } from "react-redux";
import Wave from "../ClickLogic/Wave";
import ShowHome from "./ShowHome";
import GetUserNameForm from "./GetUserNameForm";
import "./Home.css";

const Home = () => {
    const userName = useSelector((state) => state.userName);
    const theme = useSelector((state) => state.theme);

    return (
        <div className={`bg-home ${theme} max-size flex-column-center`}>
            <Wave/>
            {userName === "" ? <GetUserNameForm/> : <ShowHome/>}
        </div>
    );
};

export default Home;
