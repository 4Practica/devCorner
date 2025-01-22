import React, { SetStateAction } from 'react'
import styles from './SearchBar.module.css'
import { MagnifierIcon } from '@common/icons'

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
      <label htmlFor='search'>
        <MagnifierIcon width={26} height={26} />
      </label>
      <input
        id='search'
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
