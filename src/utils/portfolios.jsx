import portafolio from "../assets/portfolio/portfolio.png";
import citasReact from "../assets/portfolio/citasReact.png";
import pokemons from "../assets/portfolio/pokemons.png";
import controlPresupuestario from "../assets/portfolio/controlPresupuestario.png";
import polleria from "../assets/portfolio/polleria.png";

export const portfolios = [
  {
    id: 1,
    src: pokemons,
    title: "Pokemons",
    main: "React",
    tech: "React, HTML, CSS, JavaScript, React Router, Redux, Axios, Formik, sweetalert2, Tailwind CSS",
    description: "Adminstrador de Pokemones.",
    code: "https://github.com/FherAmableRicse/pokemons-crud-redux-react",
    demo: "https://pokemons-r.netlify.app",
  },
  {
    id: 2,
    src: polleria,
    title: "Polleria",
    main: "React",
    tech: "React,HTML,CSS,JavaScript,Boostrap 5",
    description: "Aplicación Web para la polleria Pollo PICOM.",
    code: "https://github.com/FherAmableRicse/react-proyecto-polleria",
    demo: "https://pollo-picom.netlify.app",
  },
  {
    id: 3,
    src: portafolio,
    title: "Portafolio",
    main: "React",
    tech: "React,HTML,CSS,JavaScript,Tailwind CSS",
    description: "Aplicación Web donde se muestra los proyectos personales.",
    code: "https://github.com/FherAmableRicse/react-portafolio",
    demo: "https://fheramablericse.netlify.app",
  },

  {
    id: 4,
    src: controlPresupuestario,
    title: "Control Presupuestario",
    main: "React",
    tech: "React,HTML,CSS,JavaScript",
    description:
      "Aplicación donde puedes calcular tu presupuesto disponible en base a tus egresos.",
    code: "https://github.com/FherAmableRicse/control-presupuestario-r",
    demo: "https://control-presupuestario-r.netlify.app",
  },
  {
    id: 5,
    src: citasReact,
    title: "Citas",
    main: "React",
    tech: "React,HTML,CSS,JavaScript",
    description:
      "Aplicación donde puedes administrar tus citas de pacientes mediante un CRUD.",
    code: "https://github.com/FherAmableRicse/citas-r",
    demo: "https://citas-r.netlify.app",
  },
];
