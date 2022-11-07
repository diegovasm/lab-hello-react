import ironhackLogo from "../images/ironhack-logo-xs.png"
import menuTop from "../images/menu-top-xs.png"
//Função para estruturar o navbar da landing page.

function Navbar(){

    return (
        <nav className="App-navbar">
            <img 
                className="App-logo"
                src={ironhackLogo} 
                alt= "logo"
            />
            <img
                className="App-menu"
                src={menuTop}
                alt="menu"
            />
        </nav>
    );
}

export default Navbar;