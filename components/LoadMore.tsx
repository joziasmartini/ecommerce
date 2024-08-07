type LoadMoreProps = {
  onClick: () => void
}

export default function LoadMore({ onClick }: LoadMoreProps) {
  return (
    <div className="flex flex-col items-center">
      <button
        type="button"
        className="my-20 rounded-full hover:bg-orange-600 px-20 py-2.5 text-sm font-semibold hover:text-white shadow-sm bg-orange-200 text-orange-600 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={onClick}
      >
        Carregar outros
      </button>
    </div>
  )
}
