import styles from './SearchBar.module.css'
import search from '@assets/search.svg'
const SearchBar = () => {
    return (
        <form className={`${styles['search-bar']}`}>
            <label><img alt="Buscar" src={search} /></label>
            <input type="search" placeholder={"Search"}onChange={() => { /* Algo */ }}/>
        </form>
    )
}


export default SearchBar