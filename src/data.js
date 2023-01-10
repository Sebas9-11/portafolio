import shark from "../src/assets/image/sharkIcon.png";
import unilibre from "../src/assets/image/logoUnilibre.png";
import coder from "../src/assets/image/coderHouse.png";
import ciber from "../src/assets/image/ciberSeguridad.jpg";
import IOT from "../src/assets/image/IT.jpg";

export const projects = [
  {
    title: "Unilibre Shark",
    subtitle: "App movil ios/android",
    description:
      'App realizada en react native y firebase para un concurso en la universidad libre la cual es una version de el programa "SHARK TANK"',
    image: shark,
    git: "https://github.com/Sebas9-11/shark_app.git",
    link: "https://drive.google.com/drive/folders/1pme40tnM_joW2ghfMi2Y6T7swuESTO7s?usp=sharing",
  },
  {
    title: "Horarios Unilibre",
    subtitle: "App movil ios/android",
    description:
      "Esta app se esta desarrollando en react native , firebase y Sqlite para solucionar problema que tienen los profesores en la universidad a la hora de realizar los reportes de ingresos y fallas a clases , la funcion de la App es sistematisar y hacer mas facil ese proceso ",
    image: unilibre,
    git: "https://github.com/Sebas9-11/horarios_unilibre.git",
    link: "https://drive.google.com/drive/folders/1gkFn-4Aoa57PreqMeAFpJjPdFvGYbO4h?usp=sharing",
  },
];

export const skills = [
  "JavaScript",
  "React & React Native",
  "Tailwind CSS",
  "API",
  "HTML",
  "CSS",
  "MySQL",
  "Firebase",
  "Java",
  "Git",
];

export const certificates = [
  {
    title: "Desarollo de aplicaciones moviles",
    subtitle: "Desarrollo movil",
    description:
      "Curso de desarrollo de aplicaciones moviles con react native y firebase",
    image: coder,
  },
  {
    title: "Cybersecurity Essentials",
    subtitle: "Cybersecurity",
    description: "Curso de seguridad informatica",
    image: ciber,
  },
  {
    title: "Internet of Things",
    subtitle: "Internet of Things",
    description: "Curso de internet de las cosas",
    image: IOT,
  },
];
