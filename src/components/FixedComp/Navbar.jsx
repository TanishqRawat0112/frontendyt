import Search from './Search';
import icon from '../../assets/temp.jpeg';
import '../../index.css'; // Import the CSS file

const Navbar = () => {
    return (
        <div className="navbar-container">
            {/* Start Section */}
            <div className="navbar-start">
                <div className="navbar-home">
                    <svg xmlns='http://www.w3.org/2000/svg' height="32" viewBox='0 0 24 24' width="32" focusable="false" aria-hidden="true" className='hamburger-svg-css'>
                        <path d="M21 6H3V5h18v1Zm0 5H3v1h18v-1Zm0 6H3v1h18v-1Z" />
                    </svg>
                </div>
                <div className="navbar-logo-container">
                    <div className='navbar-logo-container-div'>
                    <img src={icon} alt="H" />
                    </div>
                    <div className="navbar-logo-text">Streami</div>
                </div>
            </div>

            {/* Center Section */}
            <div className="navbar-center">
                <Search placeholder={'search'} />
            </div>

            {/* End Section */}
            <div className="navbar-end">
                <div className="navbar-item">create</div>
                <div className="navbar-item">notification</div>
                <div className="navbar-item">channel</div>
            </div>
        </div>
    );
}

export default Navbar;
