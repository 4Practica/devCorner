import React, { SetStateAction } from 'react'
import styles from './SearchBar.module.css'
import searchIcon from '@assets/search.svg'

interface SearchBarProps {
  search: string
  setSearch: React.Dispatch<SetStateAction<string>>
  handleSearch: React.FormEventHandler<HTMLFormElement>
}

const SearchBar: React.FC<SearchBarProps> = ({
  search,
  setSearch,
  handleSearch,
}) => {
  return (
    <form onSubmit={handleSearch} className={`${styles['search-bar']}`}>
      <label>
        <img alt='Buscar' src={searchIcon} />
      </label>
      <input
        type='search'
        placeholder={'Search'}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
        }}
      />
    </form>
  )
}

export default SearchBar
