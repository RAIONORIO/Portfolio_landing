import Socials from "./Socials"
import rai from "../assets/rai2.png"

export default function About() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center pt-28 px-4">

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* FOTO */}
        <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 relative flex-shrink-0">
          <img
            src={rai}
            alt="Rai"
            className="w-full h-full object-cover rounded-full shadow-xl"
          />
        </div>

        {/* TEXTO */}
        <div className="text-center md:text-left max-w-md md:max-w-xl">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Sobre mim
          </h1>

          <p className="text-gray-400 leading-relaxed">
            Desenvolvedor Full Stack focado em criar soluções modernas, performáticas e escaláveis.
            Trabalho com React, TypeScript, Python (FastAPI) e Java (Spring Boot), construindo aplicações
            completas com atenção à arquitetura, performance e experiência do usuário.
          </p>

          {/* ÍCONES */}
          <div className="mt-8 flex justify-center md:justify-start">
            <Socials />
          </div>

        </div>

      </div>

    </section>
  )
}