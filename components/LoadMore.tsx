type LoadMoreProps = {}

export default function LoadMore({}: LoadMoreProps) {
  return (
    <div className="flex flex-col items-center">
      <button
        type="button"
        className="my-20 rounded-full bg-gray-100 px-20 py-2.5 text-sm font-semibold text-orange-600 shadow-sm hover:bg-orange-200 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Carregar outros
      </button>
    </div>
  )
}
