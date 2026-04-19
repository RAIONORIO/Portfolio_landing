export default function Resume() {
  return (
    <section className="min-h-screen bg-black text-white pt-28 px-4">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center md:text-left">
          Resume
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* SKILLS */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-blue-400">
              Skills
            </h2>

            <ul className="space-y-2 text-gray-400 leading-relaxed">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Java (Spring Boot)</li>
              <li>Python (FastAPI)</li>
              <li>APIs REST</li>
              <li>Banco de Dados</li>
            </ul>
          </div>

          {/* EXPERIÊNCIA */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-blue-400">
              Experiência
            </h2>

            <div className="space-y-6 text-gray-400 leading-relaxed">

              <div>
                <p className="font-medium text-white">
                  Desenvolvedor Full Stack
                </p>
                <p className="text-sm sm:text-base">
                  Desenvolvimento de sistemas web, APIs e integrações completas.
                </p>
              </div>

              <div>
                <p className="font-medium text-white">
                  Projetos pessoais
                </p>
                <p className="text-sm sm:text-base">
                  Criação de aplicações completas com frontend e backend integrados.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  )
}