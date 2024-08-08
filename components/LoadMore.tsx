import { ChaoticOrbit, LeapFrog } from '@uiball/loaders'
import { Orbit } from 'next/font/google'

type LoadMoreProps = {
  onClick: () => void
  isLoading: boolean
}

export default function LoadMore({ onClick, isLoading }: LoadMoreProps) {
  return (
    <div className="flex flex-col items-center">
      <button
        type="button"
        className={`my-20 rounded-full ${
          !isLoading && 'hover:bg-orange-600'
        } w-64 h-12 text-sm font-semibold hover:text-white shadow-sm bg-orange-200 text-orange-600 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
        onClick={onClick}
      >
        {isLoading ? (
          <div className="flex justify-center">
            <LeapFrog size={24} speed={1} color="#ea580c" />
          </div>
        ) : (
          'Carregar outros'
        )}
      </button>
    </div>
  )
}
