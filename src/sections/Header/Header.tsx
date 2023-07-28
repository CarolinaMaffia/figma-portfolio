import './Header.scss';

const Header = () => {
  return (
    <header>
        <h2 className='header-title'>.Dev</h2>

        <div className='list-container'>
            <ol>
                <li><a>Home</a></li>
                <li>About Me</li>
                <li>Contact</li>
            </ol>
        </div>
    </header>
  )
}

export default Header