import rai from '../assets/rai.png'

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-24 bg-black text-white flex items-center justify-center overflow-hidden">

      {/* FUNDO */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black z-0" />

      {/* CONTEÚDO */}
      <div className="relative z-10 grid md:grid-cols-3 items-center gap-10 md:gap-16 max-w-7xl w-full px-6">

        {/* LEFT */}
        <div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            developer
          </h1>

          <p className="mt-4 text-gray-500 leading-relaxed max-w-sm">
            Desenvolvimento de aplicações completas, integração e performance.
          </p>
        </div>

        {/* IMAGE */}
<div className="flex justify-center">
  <div className="glitch-img">
    <img
      src={rai}
      alt="Raí"
      className="w-80 md:w-[420px] object-cover shadow-2xl"
    />
  </div>
</div>

        {/* RIGHT */}
        <div className="text-right">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            {"<full-stack />"}
          </h1>

          <p className="mt-4 text-gray-500 leading-relaxed max-w-sm ml-auto">
            APIs, interfaces e soluções reais para problemas reais.
          </p>
        </div>

      </div>
    </section>
  )
}