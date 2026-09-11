import Stack from "../assets/banner-stack.png"
const Banner = () => {
    return (
        <section>
            <div>
                <h1> Build Your Ideal <br />
                    <span > Development Stack </span>
                </h1>

                <p>
                    Explore frontend, backend, database, and tooling options, compare them side by side,
                    and put together the stack that fits your next project.
                </p>
                <div >
                    <button>
                        Explore Technologies
                    </button>

                    <button>
                        Learn More
                    </button>
                </div>
                {/* Banner Stack  */}
                <div className="flex justify-center md:justify-end">
                    <img src={Stack} alt="" />
                </div>
            </div>
        </section>

    );
};

export default Banner;