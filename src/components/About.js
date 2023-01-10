import cv from "../../src/utils/Andres_Barrios_Cv.pdf";
import portada from "../../src/assets/image/portada.jpeg";

export default function About() {
  return (
    <section id="about" className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hola, soy Andres Barrios
            <br className="hidden lg:inline-block" /> Me gusta diseñar y
            programar apps moviles.
          </h1>
          <p className="mb-8 leading-relaxed">
            Programador frontend, estudiante de ingeniería de sistemas de
            últimos semestres, programo y aprendo nuevas tecnologías encontrando
            soluciones a través de las mismas.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text items-center text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg "
            >
              Contactame
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 items-center bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Trabajos realizados
            </a>
            <a href={cv} download={cv}>
              <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                Descargar CV
              </button>
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={portada}
          />
        </div>
      </div>
    </section>
  );
}
