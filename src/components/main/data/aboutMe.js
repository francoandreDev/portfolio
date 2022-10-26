import CardSection from "./CardSection";
import spainImage from "../../../assets/images/data/spain.png";
import englishImage from "../../../assets/images/data/uk.png";
import responsibleImage from "../../../assets/images/data/responsible.png";
import resilientImage from "../../../assets/images/data/resilient.png";
import creativeImage from "../../../assets/images/data/creative.png";
import punctualityImage from "../../../assets/images/data/punctuality.png";
import talkingImage from "../../../assets/images/data/good-talking.png";
import hearImage from "../../../assets/images/data/good-listener.png";

const dataLanguages = [
    {
        id: "es1",
        img: spainImage,
        alt: "es-flag",
        text: "Native"
    },
    {
        id: "en2",
        img: englishImage,
        alt: "en-flag",
        text: "B1"
    }
];

const dataTeamWork = [
    {
        id: "SSTeam1",
        img: responsibleImage,
        alt: "responsible",
        text: "Responsible"
    },
    { id: "SSTeam2", img: resilientImage, alt: "resilient", text: "Resilient" },
    {
        id: "SSTeam3",
        img: talkingImage,
        alt: "good-expressing",
        text: "Good expressing"
    },
    {
        id: "SSTeam4",
        img: hearImage,
        alt: "good-listener",
        text: "Good listener"
    }
];

const dataLonely = [
    {
        id: "SSLonely1",
        img: responsibleImage,
        alt: "responsible",
        text: "Responsible"
    },
    {
        id: "SSLonely2",
        img: resilientImage,
        alt: "resilient",
        text: "Resilient"
    },
    { id: "SSLonely3", img: creativeImage, alt: "creative", text: "Creative" },
    {
        id: "SSLonely4",
        img: punctualityImage,
        alt: "punctual",
        text: "Punctual"
    }
];

const aboutMe = (
    <section className="border card" style={{ padding: "50px" }}>
        <h3 style={{ marginBottom: "7vh" }}>Soft Skills</h3>
        <section
            className="sub-title flex-center"
            style={{
                gap: "50px",
                flexWrap: "wrap"
            }}
        >
            <CardSection title={"Languages"} data={dataLanguages} />
            <CardSection title={"In team"} data={dataTeamWork} />
            <CardSection title={"Lonely"} data={dataLonely} />
        </section>
    </section>
);

export default aboutMe;
