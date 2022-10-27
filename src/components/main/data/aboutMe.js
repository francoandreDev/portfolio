import CardSection from "./CardSection";

const dataLanguages = [
    {
        id: "es1",
        icon: "fa-solid fa-language",
        text: "Spain Native"
    },
    {
        id: "en2",
        icon: "fa-solid fa-language",
        text: "English B1"
    }
];

const dataTeamWork = [
    {
        id: "SSTeam1",
        icon: "fa-solid fa-list-check",
        text: "Responsible"
    },
    {
        id: "SSTeam2",
        icon: "fa-solid fa-dumbbell",
        text: "Resilient"
    },
    {
        id: "SSTeam3",
        icon: "fa-solid fa-comment-sms",
        text: "Good expressing"
    },
    {
        id: "SSTeam4",
        icon: "fa-solid fa-ear-listen",
        text: "Good listener"
    }
];

const dataLonely = [
    {
        id: "SSLonely1",
        icon: "fa-solid fa-list-check",
        text: "Responsible"
    },
    {
        id: "SSLonely2",
        icon: "fa-solid fa-dumbbell",
        text: "Resilient"
    },
    {
        id: "SSLonely3",
        icon: "fa-regular fa-lightbulb",
        text: "Creative"
    },
    {
        id: "SSLonely4",
        icon: "fa-solid fa-stopwatch",
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
