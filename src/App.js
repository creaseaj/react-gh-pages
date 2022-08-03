import { useEffect } from "react";
import Typical from "./components/Typical";

function App() {
  const toRotate = ["Web Developer", 4000, "Cyber Security Student", 4000, "Full Stack Software Engineer", 4000];
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, [])
  return (
    <div
      className="absolute inset-0 w-full flex justify-center items-center relative"
      style={{ height: "calc(var(--vh, 1vh) * 100)" }}>
      <div className="flex-col flex justify-center items-center">
        <div className='text-white text-2xl'>
          Hi, I'm <span className="text-red-500">Adam</span>
        </div>
        <div className="text-white text-xl w-full">
          I'm a <span className="text-red-500">  <Typical
            steps={toRotate}
            loop={Infinity}
            wrapper="span" /></span>
        </div>
      </div>
      <a href="https://github.com/creaseaj">
        <img src='./github.png' className="absolute bottom-4 right-4 h-[30px] w-[30px]" alt="github logo" />
      </a>
    </div >
  );
}

export default App;
