import portfolioImg01 from "../images/img1.avif";
import chatimg from "../images/chatApp.png"
import classImg from "../images/classroom.png"


// import chatVideo from "../videos/chatroom_flask.mkv"
// import classVideo from "../videos/classweb.mkv"
let chatVideo = null
let classVideo = null;

const portfolios = [
  {
    id: "01",
    imgUrl: chatimg,
    category: "Web Design",
    vidUrl: chatVideo,
    title: "Chat App in Flask",
    description:
      "Chat App made in flask is light weight web app for creating a private chat room and messaging in the chat room.",
    technologies: ["HTML", "css", "flask", "MongoDB", "socket.io"],
    siteUrl: "#",
  },
  {
    id: "02",
    imgUrl: classImg,
    category: "Ux",
    vidUrl : classVideo,
    title: "Online Classes Management Web App",
    description:
      "The web app is used for student management and Online classes management, it has functionality for both student as well as faculty where in a student can submit assignments, make notes & todos, watch online videos, attempt quizzes and interacrt with 3d Models and faculty can assign assignments to students, manage models, manage quizzes, etc...",
    technologies: ["HTML", "Vue.js", "django", "sqlite3"],
    siteUrl: "#",
  },
  {
    id: "03",
    imgUrl: portfolioImg01,
    category: "Ux",
    title: "Multimedia Sharing Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "04",
    imgUrl: portfolioImg01,
    category: "Web Design",
    title: "Landing Page",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "05",
    // imgUrl: portfolioImg03,
    category: "Web Design",
    title: "Landing Page",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
  },

  {
    id: "06",
    // imgUrl: portfolioImg06,
    category: "Ux",
    title: "Online Therapy Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "07",
    // imgUrl: portfolioImg07,
    category: "Web Design",
    title: "Appointment Booking Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "08",
    // imgUrl: portfolioImg01,
    category: "Web Design",
    title: "Finance Technology Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "09",
    // imgUrl: portfolioImg02,
    category: "Ux",
    title: "Video Conference Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "10",
    // imgUrl: portfolioImg03,
    category: "Ux",
    title: "File Sharing Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "11",
    // imgUrl: portfolioImg04,
    category: "Web Design",
    title: "Landing Page",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "12",
    // imgUrl: portfolioImg05,
    category: "Web Design",
    title: "Landing Page",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "13",
    // imgUrl: portfolioImg06,
    category: "Web Design",
    title: "Online Therapy Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "14",
    // imgUrl: portfolioImg07,
    category: "ux",
    title: "Appointment Booking Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
];

export default portfolios;
