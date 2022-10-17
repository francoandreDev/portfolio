import React from "react";
import profile from "../../assets/images/profile-photo.png";
import { useSelector } from "react-redux";

const Presentation = () => {
    const userName = useSelector((state) => state.userName);
    return (
        <>
            <div className="presentation">
                <h1>Presentation</h1>
                <section className="content">
                    <article className="content">
                        <h2>React Developer</h2>
                        <p>
                            Welcome {userName}, my name is {"\n"}
                            Franco André. {"\n"}
                            I'm a full-stack programmer focus in work with
                            React. {"\n"}
                        </p>
                    </article>
                    <div className="container-photo">
                        <img src={profile} alt="profile" className="profile" />
                    </div>
                </section>
                <aside>
                    <p>
                        I'm interesting in work real soon. {"\n"}
                        Every day I learn or put on trial new knowledge I gain.{" "}
                        {"\n"}I see all as one step to be better. {"\n"}
                        My goal for this year is get a job in React and start to
                        learn NextJs. {"\n"}
                    </p>
                </aside>
            </div>
        </>
    );
};

export default Presentation;
