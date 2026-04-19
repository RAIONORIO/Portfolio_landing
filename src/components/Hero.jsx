import rai from '../assets/rai.png'

export default function Hero({ setPage }) {
  return (
    <section className="relative min-h-screen pt-28 bg-black text-white flex items-center justify-center overflow-hidden">

      {/* FUNDO */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black z-0" />

      {/* CONTEÚDO */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 items-center gap-12 max-w-7xl w-full px-6">

        {/* IMAGE (vem primeiro no mobile) */}
        <div className="flex justify-center order-1 md:order-2">
          <div 
            className="glitch-img cursor-pointer"
            onClick={() => setPage('about')}
          >
            <img
              src={rai}
              alt="Raí"
              className="w-56 sm:w-64 md:w-[420px] object-cover shadow-2xl"
            />
          </div>
        </div>

        {/* LEFT */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
            developer
          </h1>

<p className="mt-4 text-gray-400 leading-relaxed max-w-md mx-auto md:mx-0">
  Transformo ideias em produtos digitais funcionais.
  Mais do que código, busco criar soluções claras, eficientes e com propósito — conectando tecnologia, experiência e resultado.
</p>
        </div>

        {/* RIGHT */}
        <div className="order-3 text-center md:text-right">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
            {"<full-stack />"}
          </h1>

<p className="mt-4 text-gray-400 leading-relaxed max-w-md mx-auto md:mx-0">
  Desenvolvimento não é só código — é resolver problemas.
  Crio aplicações que fazem sentido, performam bem e entregam resultado no mundo real.
</p>
        </div>

      </div>
    </section>
  )
}