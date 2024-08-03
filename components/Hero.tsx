export default function Hero() {
  const backgroundStyle = {
    background:
      'url(https://images.unsplash.com/photo-1548504769-900b70ed122e) no-repeat center',
    backgroundSize: 'cover',
  }

  return (
    <div
      style={backgroundStyle}
      className="p-20 md:p-32 text-left relative overflow-auto"
    >
      <h1 className="pb-4 text-white font-bold text-4xl md:text-5xl">
        Se joga no arraiá
      </h1>
      <h2 className="text-white font-medium text-xl">
        Aproveite as festas com o melhor da maquiagem
      </h2>
      <button
        type="button"
        className="mt-8 rounded-full bg-orange-600 px-8 py-3 text-white font-semibold shadow-sm hover:bg-orange-700 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
      >
        Compre agora
      </button>
    </div>
  )
}
