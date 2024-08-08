// SearchContext.tsx
import React, { createContext, useState, ReactNode, useContext } from 'react'

interface SearchContextType {
  searchTerm: string
  setSearchTerm: (term: string) => void
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState<string>('')

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  )
}

const useSearchContext = () => {
  const context = useContext(SearchContext)
  if (context === undefined) {
    throw new Error(
      'useSearchContext deve ser usado dentro de um SearchProvider',
    )
  }
  return context
}

export { SearchProvider, useSearchContext }
