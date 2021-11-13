import React, { useState } from 'react';
const Header = ({ setYear, year }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [showSelectedDay, setShowSelectedDay] = useState(false)
    return (
        <nav className={"z-10 transition-all " + (year === 2021 ? 'bg-transparent' : 'bg-gray-800')}>
            <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>

                            <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" onClick={() => setIsOpen(!isOpen)}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>

                            <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className={"flex items-center justify-center flex-1 sm:items-stretch sm:justify-start " + (year === 2021 ? 'text-red-300' : 'text-white')}>
                        <div className="flex items-center flex-shrink-0 ">
                            <p className="text-2xl  ">creaseaj</p >
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4 items-center">
                                <p className="text-2xl  w-max">advent of code</p>
                                <div className="relative flex">
                                    <p className={"text-2xl  transition-all  border-transparent border-2 rounded-md px-2 hover:border-gray-800  hover:text-gray-800 cursor-pointer " + (year === 2021 ? "bg-transparent" : "bg-gray-800 hover:bg-gray-300")} onClick={() => setShowSelectedDay(!showSelectedDay)}>{year} </p>

                                    <div className={"z-10 absolute bg-gray-300 p-3 rounded-md w-full overflow-hidden " + (showSelectedDay ? 'block' : 'hidden')} >
                                        <div onClick={() => { setShowSelectedDay(false); setYear(2021); }}>2021</div>
                                        <div onClick={() => { setShowSelectedDay(false); setYear(2020); }}>2020</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sm:hidden" id="mobile-menu">
                {isOpen ? (
                    <>
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a href="/" className="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md" aria-current="page">Dashboard</a>

                            <a href="/" className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">Advent Of Code</a>

                            <a href="/" className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">Projects</a>
                        </div>

                    </>
                ) : null}


            </div>
        </nav>
    )
}
export default Header