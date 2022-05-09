import chat from "./assets/chat.png"
import api from "./assets/api.png"
import socialnetwork from "./assets/socialnetwork.png"

export const sliderItems = [{
    id: 1,
    img: chat,
    title: "Web-chat",
    desc: "Simple online chat with real-time updating and authentication via Google.",
    tech:"react, firebase, @mui",
    bg: "f5fafd",
    link: "https://github.com/Ascurse/WebChat"
},
{
    id: 2,
    img: api,
    title: "API_YAMDB",
    desc: "This API collects user's reviews on different Titles that are divided on Categories: Films, Music, Books, etc. In each category, works are divided into genres. Users can leave comments",
    tech:"Python 3.7.0, Django 2.2.16, Django REST framework 3.12.4, Simple JWT 5.0.0",
    bg: "fcf1ed",
    link: "https://github.com/orel333/API-YaMDB"
},
{
    id: 3,
    img: socialnetwork,
    title: "Yatube_network",
    desc: "Social network, where users can make posts, leave comments, join in groups and subscribe on authors. Users can edit or delete their posts and comments. Registration and password change with email.",
    bg: "fbf0f4",
    tech:"Python 3.7.0, Django 2.2.16, Bootstrap 5.1.3",
    link: "https://github.com/Ascurse/Yatube_network"
},
];