import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* left logo  */}
        <div className="flex items-center gap-1">
          <img src={Logo} alt="" />
          <h2 className="text-lg font-bold text-gray-800">
            Dev<span className="text-pink-500">Stack</span>
          </h2>
        </div>

        {/* Center nav link */}
        <ul className="hidden items-center gap-6 md:flex">
          <li><a href="#home" className="text-pink-500">Home</a></li>
          <li><a href="#technologies">Technologies</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Right 2btn */}
        <div className="flex items-center gap-4">
          <button className="text-sm">Sign In</button>
          <button className="rounded-full bg-pink-500 px-5 py-2 text-sm text-white"> Sign Up </button>
        </div>

      </div>
    </nav>
  );
};

export default Nav;