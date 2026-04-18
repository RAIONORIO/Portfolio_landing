export default function Portfolio() {

  const projects = [
    {
      name: "Invoice System",
      desc: "Sistema completo para edição de orçamentos",
      tech: "TypeScript"
    },
    {
      name: "Timesheet",
      desc: "Controle de horas trabalhadas",
      tech: "TypeScript"
    },
    {
      name: "User System",
      desc: "Sistema de criação de usuários",
      tech: "TypeScript"
    },
    {
      name: "Health Pharma",
      desc: "Sistema backend em Java",
      tech: "Java (Spring Boot)"
    },
    {
      name: "Óptica Back",
      desc: "Backend em Python",
      tech: "Python"
    },
    {
      name: "Gemini Grand Prix",
      desc: "Jogo de corrida",
      tech: "JavaScript"
    }
  ]

  return (
    <section className="min-h-screen bg-black text-white pt-28 px-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-10">Portfolio</h1>

        <div className="grid md:grid-cols-3 gap-6">

          {projects.map((project, index) => (
            <div key={index} className="portfolio-card">

              <div className="portfolio-card-inner">

                <h2 className="title text-lg font-semibold">
                  {project.name}
                </h2>

                <p className="text-gray-400 text-sm mt-2">
                  {project.desc}
                </p>

                <span className="text-xs text-blue-400 mt-4 block">
                  {project.tech}
                </span>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}