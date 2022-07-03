import Typical from "./components/Typical";

function App() {
  const toRotate = ["Web Developer", 4000, "Cyber Security Student", 4000, "Full Stack Software Engineer", 4000];

  return (
    <div className="bg-slate-800 w-full h-screen flex justify-center items-center relative">
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
