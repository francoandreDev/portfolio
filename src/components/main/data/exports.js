import aboutMe from "./aboutMe";
import technologies from "./technologies";
import experience from "./experience";
import contactMe from "./contactMe";
import texts from "./texts";
import images from "./images";
import presentations from "./presentations";

let textsImages = [];

texts.forEach((text, index) => {
    let obj = { text: text, img: images[index], id: index };
    textsImages.push(obj);
});

export {
    presentations,
    aboutMe,
    technologies,
    experience,
    contactMe,
    textsImages
};
