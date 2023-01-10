import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-10">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Aplicaciones que he construido
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Estas son algunas de las aplicaciones que he construido, puedes
            encontrar el código fuente en mi repositorio de github. estas
            aplicaciones fueron construidas con React, React Native, Nodejs,
            Firebase, entre otras tecnologías.
          </p>
        </div>
        <style jsx global>{`
          ::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <div className="flex overflow-x-auto">
          {projects.map((project) => (
            <div key={project.image} className="min-w-[30%] max-w-[30%] p-4">
              <div className="bg-gray-800 p-6 rounded-lg ">
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  {project.title}
                </h2>
                <img
                  className="h-40 rounded w-full object-scale-down object-center mb-6"
                  src={project.image}
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                  Plataformas: {project.subtitle}
                </h3>
                <p className="leading-relaxed text-base">
                  {project.description}
                </p>
                <div className="flex content-evenly justify-evenly">
                  <a
                    href={project.link}
                    className="text-green-400 inline-flex items-center md:mb-2 lg:mb-0 my-2"
                  >
                    Descargar
                  </a>
                  <a
                    href={project.git}
                    className="text-green-400 inline-flex items-center md:mb-2 lg:mb-0 my-2"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
