import SearchBar from '../SearchBar/SearchBar'
import './Header.css'

function Header() {
  return (
    <div className='header-container'>
      <h1>Folks of Star Wars</h1>
      <SearchBar />
    </div>
  )
}

export default Header