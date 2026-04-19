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
    <section className="min-h-screen bg-black text-white pt-28 px-4">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center md:text-left">
          Portfolio
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div 
              key={index} 
              className="portfolio-card h-full"
            >
              <div className="portfolio-card-inner h-full flex flex-col justify-between">

                <div>
                  <h2 className="title text-lg font-semibold">
                    {project.name}
                  </h2>

                  <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                <span className="text-xs text-blue-400 mt-6 block">
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