import Socials from "./Socials"
import rai from "../assets/rai2.png"

export default function About() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center pt-24">

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">

        {/* FOTO */}
        <div className="w-48 h-48 md:w-64 md:h-64 relative">
          <img
            src={rai}
            alt="Rai"
            className="w-full h-full object-cover rounded-full shadow-lg"
          />
        </div>

        {/* TEXTO */}
        <div className="text-center md:text-left max-w-xl">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre mim
          </h1>

          <p className="text-gray-400 leading-relaxed">
            Desenvolvedor Full Stack com foco em criação de aplicações modernas,
            performáticas e escaláveis. Experiência com React, Next.js, TypeScript,
            Python (FastAPI) e Java (Spring Boot).
          </p>

          {/* ÍCONES */}
          <div className="mt-10">
            <Socials />
          </div>

        </div>

      </div>

    </section>
  )
}