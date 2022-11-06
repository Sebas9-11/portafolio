import { certificates } from "../data";

export default function Certificate() {
  return (
    <section id="certificates" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white ">
            Certificados
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {certificates.map((certificate) => (
            <div className="p-4 lg:w-1/3">
              <div className="h-full border-2 border-gray-800 bg-gray-900 p-8 rounded">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center mb-6"
                  src={certificate.image}
                  alt="content"
                />
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  {certificate.name}
                </h2>
                <p className="leading-relaxed mb-3">
                  {certificate.description}
                </p>
                <div className="flex items-center flex-wrap ">
                  <a
                    href={certificate.image}
                    className="text-green-400 inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    Ver Certificado
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
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
