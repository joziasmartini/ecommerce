import Banner from '@/assets/banner.svg'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative w-full overflow-auto">
      <Image
        src={Banner}
        alt="Banner"
        width={1349}
        height={431}
        className="min-h-72"
      />
      <div className="absolute top-64 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col justify-center items-center">
          <h1 className="pb-4 font-bold text-4xl md:text-5xl text-center bg-neutral-100">
            Se joga no Arraiá
          </h1>
          <h2 className="font-medium text-xl text-center bg-neutral-100">
            Aproveite as festas com o melhor da maquiagem!
          </h2>
          <button
            type="button"
            className="mt-8 rounded-full bg-orange-600 px-8 py-3 text-white font-semibold shadow-sm hover:bg-orange-700 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          >
            Compre agora
          </button>
        </div>
      </div>
    </div>
  )
}
