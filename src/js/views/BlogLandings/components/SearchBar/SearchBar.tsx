import React, { SetStateAction } from 'react'
import styles from './SearchBar.module.css'
import searchIcon from '@assets/search.svg'

interface SearchBarProps {
  search: string, 
  handleSearch: React.Dispatch<SetStateAction<string>>
}


const SearchBar: React.FC<SearchBarProps> = ({ search, handleSearch}) => {
  return (
    <form className={`${styles['search-bar']}`}>
      <label>
        <img alt='Buscar' src={searchIcon} />
      </label>
      <input
        type='search'
        placeholder={'Search'}
        value={search}
        onChange={(e) => {
          handleSearch(e.target.value)
        }}
      />
    </form>
  )
}

export default SearchBar
