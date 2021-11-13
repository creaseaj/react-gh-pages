import { useState } from 'react';
import './App.css';
import AocApp from './components/AocApp';
import Header from './components/Header';

function App() {
  const [year, setYear] = useState(2021);
  console.log(year);
  return (
    <div className={"App h-screen transition-all w-screen overflow-hidden " + (year === 2021 ? "bg-[#ffefdb]" : "bg-white")}>
      <Header setYear={(e) => setYear(e)} year={year} />
      <AocApp year={year} />
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden" >
        <div className="relative max-w-[100rem] h-full w-full mx-auto">
          <div className={"absolute -rotate-45 w-72 h-8 top-[30%] right-[-10rem] rounded-full transition-all  border-2  " + (year === 2021 ? "bg-red-300 border-gray-900" : "bg-transparent border-transparent")} />
          <div className={"absolute -rotate-45 w-72 h-8 top-[40%] right-[-9rem] rounded-full transition-all  border-2  " + (year === 2021 ? "bg-yellow-300 border-gray-900" : "bg-transparent border-transparent")} />
          <div className={"absolute -rotate-45 w-72 h-8 top-1/2 right-[-8rem] rounded-full transition-all  border-2  " + (year === 2021 ? "bg-blue-300 border-gray-900" : "bg-transparent border-transparent")} />
          <div className={"absolute -rotate-45 w-72 h-8 top-[60%] right-[-7rem] rounded-full transition-all  border-2  " + (year === 2021 ? "bg-purple-300 border-gray-900" : "bg-transparent border-transparent")} />
          <div className={"absolute left-[-20rem] top-1/3 h-[50rem] w-[50rem] rounded-full  flex items-center justify-center from-green-300 to-blue-300 transition-all  border-2  " + (year === 2021 ? "bg-gradient-to-t border-gray-900" : "bg-transparent border-transparent")}>
            <div className={"w-[45rem] h-[45rem] rounded-full transition-all  border-2  " + (year === 2021 ? "bg-[#ffefdb] border-gray-900" : "bg-transparent border-transparent")} />
          </div>
          <div className={"absolute h-[40rem] w-72  from-pink-300 to-purple-300 top-[-12.5rem] left-[50%] rotate-[75deg] rounded-md  border-2  " + (year === 2021 ? "bg-gradient-to-t border-gray-900" : "bg-transparent border-transparent")}></div>

        </div>
      </div>



    </ div>
  );
}

export default App;
