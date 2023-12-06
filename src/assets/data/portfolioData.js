import portfolioImg01 from "../images/img1.avif";
import chatimg from "../images/chatApp.png"
import classImg from "../images/classroom.png"
import blog from '../images/blogPOST.png'
import batPage from '../images/batman.png'
import ironmman from '../images/ironman.png'


import chatVideo from "../videos/chatApp_flask.mkv"
import classVideo from "../videos/classRoom.mkv"
import blogVideo from '../videos/blogPOST.mkv'


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
    vidUrl: classVideo,
    title: "Online Classes Management Web App",
    description:
      "The web app is used for student management and Online classes management",
    technologies: ["HTML", "BootStrap", "Vue.js", "django", "sqlite3"],
    siteUrl: "#",
  },
  {
    id: "03",
    imgUrl: blog,
    category: "Ux",
    vidUrl: blogVideo,
    title: "Blog Post Website in JSP",
    description:
      "A simple Blog Post website in JAVA JSP as backend and mongo db for database",
    technologies: ["JSP", "BootStrap", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "04",
    imgUrl: batPage,
    category: "Web Design",
    title: "Bat Mobile Landing Page",
    description:
      "Bat Mobile Landing Page UI Design in Figma",
    technologies: ["Figma"],
    siteUrl: "#",
  },
  {
    id: "05",
    imgUrl: portfolioImg01,
    category: "Web Design",
    title: "Landing Page",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["Figma"],
    siteUrl: "#",
  },

  {
    id: "06",
    imgUrl: ironmman,
    category: "Ux",
    title: "Ironman Suit Cart Page",
    description:
      "Cart Card UI Design in Figma",
    technologies: ["Figma"],
    siteUrl: "https://www.figma.com/file/3ANbQFXtRvECgs7xVDFhjn/Iron-Man-Product-Card-Design?type=design&mode=design&t=s73CibQqKWUjI3YG-1",
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
