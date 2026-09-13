import Logo from "../assets/logo-text.png";

const Footer = () => {
    return (
        <footer className="bg-[#0F172A] text-white">
            {/*Footer Section */}
            <div className="max-w-7xl mx-auto px-6 py-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div className="space-y-5">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img src={Logo} alt="Dev Stack Logo" className="w-10 h-10" />
                        <h2 className="text-xl font-bold text-white"> Dev<span className="brand-gradient">Stack</span></h2>
                    </div>
                    {/* Description */}
                    <p className="text-sm leading-6 text-slate-400 max-w-xs">
                        Curated tools, technologies, and resources for developers building
                        modern software.
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-5 text-sm text-slate-400">
                        <a className="hover:text-white transition" href="https://github.com/hridoycoders">Github</a>
                        <a className="hover:text-white transition" href="https://www.linkedin.com/in/hridoy-ahmed1/">LinkedIn</a>
                        <a className="hover:text-white transition" href="https://www.facebook.com/HridoyAhmedNoor1/">Facebook</a>
                    </div>
                </div>

                {/* Product Links */}
                <div className="space-y-4">
                    <h3 className="text-sm font-semibold tracking-wider text-white">PRODUCT</h3>

                    <div className="flex flex-col gap-3 text-sm text-slate-400">
                        <a href="" className="hover:text-white transition">Home</a>
                        <a href="" className="hover:text-white transition">Technologies</a>
                        <a href="" className="hover:text-white transition">Projects</a>
                    </div>
                
                </div>

                {/* Company Links */}
                <div className="space-y-4">
                    <h3 className="text-sm font-semibold tracking-wider text-white">COMPANY</h3>

                    <div className="flex flex-col gap-3 text-sm text-slate-400">
                        <a href="" className="hover:text-white transition">About</a>
                        <a href="" className="hover:text-white transition">Contact</a>
                        <a href="" className="hover:text-white transition">Careers</a>
                    </div>

                </div>

                {/* Legal Links */}
                <div className="space-y-4">
                    <h3 className="text-sm font-semibold tracking-wider text-white">LEGAL</h3>

                    <div className="flex flex-col gap-3 text-sm text-slate-400">
                        <a href="" className="hover:text-white transition">Privacy Policy</a>
                        <a href="" className="hover:text-white transition">Terms of Service</a>
                    </div>

                </div>
            </div>

            {/* Bottom Footer Section */}
            <div className="border-t border-slate-700/50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
                    <p>© 2026 Dev Stack. All rights reserved.</p>

                    <div className="flex items-center gap-5">
                        <a href="" className="hover:text-white transition">Privacy</a>
                        <a href="" className="hover:text-white transition">Terms</a>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;