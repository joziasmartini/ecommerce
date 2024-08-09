import Banner from '@/assets/banner.svg'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative w-full overflow-none">
      <Image
        src={Banner}
        alt="Banner"
        width={1349}
        height={431}
        className="md:h-full h-[300px] w-[100%] object-cover"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col justify-center items-center">
          <h1 className="pb-4 font-bold text-4xl md:text-5xl text-center">
            Se joga no Arraiá
          </h1>
          <h2 className="font-medium text-lg md:text-xl text-center">
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
