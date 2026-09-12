import Stack from "../assets/banner-stack.png"
const Banner = () => {
    return (
        <section id="home" className="mx-auto grid min-h-[420px] max-w-7xl items-center gap-10 px-6 py-12 md:grid-cols-2">
            {/* litle text  */}
            <div>
                <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl"> Build Your Ideal <br />
                    <span className="brand-gradient"> Development Stack </span>
                </h1>
                {/* paragrap */}
                <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                    Explore frontend, backend, database, and tooling options, compare them side by side,
                    and put together the stack that fits your next project.
                </p>
                {/* 2Btn */}
                <div className="mt-8 flex flex-wrap gap-3">
                    <button className="rounded-md brand-button px-5 py-3 text-sm font-medium text-white transition hover:opacity-90">
                        Explore Technologies
                    </button>

                    <button className="rounded-md border border-slate-200 px-8 py-3 text-sm text-slate-600 transition hover:border-pink-400 hover:text-pink-500">
                        Learn More
                    </button>
                </div>
            </div>
            {/* Banner Img  */}
            <div className="flex justify-center md:justify-end">
                <img src={Stack} alt="Banner-img" className="w-full max-w-md object-contain" />
            </div>
        </section>

    );
};

export default Banner;