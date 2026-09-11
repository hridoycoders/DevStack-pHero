import Logo from "../assets/logo-text.png"
const Nav = () => {
    return (
    <nav>
       <div>
        <img src={Logo} alt="DevStack Logo" />
        <span>Dev<span>Stack</span></span>
      </div>

        <ul>
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
        </ul>

         <div>
        <button >Sign In</button>
        <button >Sign Up</button>
      </div>
    </nav>
    );
};

export default Nav;