export default function Resume() {
  return (
    <section className="min-h-screen bg-black text-white pt-28 px-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-10">Resume</h1>

        <div className="grid md:grid-cols-2 gap-10">

          {/* SKILLS */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-blue-400">Skills</h2>

            <ul className="space-y-2 text-gray-400">
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
            <h2 className="text-xl font-semibold mb-4 text-blue-400">Experiência</h2>

            <div className="space-y-4 text-gray-400">
              <div>
                <p className="font-medium text-white">Desenvolvedor Full Stack</p>
                <p>Sistemas web, APIs e integrações</p>
              </div>

              <div>
                <p className="font-medium text-white">Projetos pessoais</p>
                <p>Aplicações completas com front + back</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}