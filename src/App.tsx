import { Suspense } from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import TechnologySection from "./components/TechnologySection";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";

const technologyFetch = async () => {
  const res = await fetch('/data.json')
  const data = await res.json();
  return data;
}
function App() {
  const technologypromise = technologyFetch();
  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<h2>Loading.......</h2>}>
        <TechnologySection technologypromise={technologypromise} />
      </Suspense>
      <ToastContainer/>
      <Footer/>


    </>
  );
}

export default App;