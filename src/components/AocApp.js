import React, { useState } from 'react';
import { Transition } from '@headlessui/react'

const ShowList = (props) => {
    let output = [];
    Days.forEach((day, i) => {
        output.push(
            <div
                className={`${day == null ? 'bg-gray-200' : ' bg-gray-100 hover:bg-gray-700 hover:text-white'} text-lg  mx-[-2px]  cursor-pointer border-b border-gray-700 ${i == 0 ? 'rounded-t-xl mt-[-2px]' : i == 24 ? 'rounded-b-xl mb-[-2px]' : null}`} id={i + 1} key={i + 1}
                onClick={(e) => {
                    if (day !== null) {
                        props.setSelectedDay(e.target.id)
                        props.setShowSelectedDay(false)
                    }
                }}>
                Day {i + 1}
            </div>
        )
    })
    return output
}

const Days = [
    '1',
    '2',
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
]

const AocApp = () => {
    const [showSelectedDay, setShowSelectedDay] = useState(false)
    const [selectedDay, setSelectedDay] = useState(null)
    return (
        <div className=" w-screen h-[calc(100vh-4rem)] sm:h-screen flex items-center sm:-mt-16">
            {showSelectedDay ? (
                <div className=" z-20 absolute right-0 bottom-0 top-0 left-0" onClick={() => setShowSelectedDay(!showSelectedDay)} />
            ) : null}
            <div className="relative flex sm:container sm:mx-auto w-screen h-full sm:h-[80vh] bg-gray-200 sm:rounded-xl p-[10px] flex-col justify-between gap-[10px]">
                <div className="w-full flex justify-between text-lg">
                    {selectedDay == null ?
                        (
                            <p className="font-semibold">Select a day to get started</p>
                        ) : (
                            <>
                                <p>Day {selectedDay}</p>
                                <p>Solution: </p>
                            </>
                        )
                    }
                </div>
                <div className="h-full w-full">
                    <textarea className="w-full h-full resize-none rounded-lg focus:outline-none p-[10px] focus:border-2 focus:border-gray-700" />
                </div>

                <div className="w-full  justify-between justify-self-end self-end flex flex-col sm:flex-row gap-[10px] sm:gap-[50px]">
                    <div className="flex h-10 w-full border border-gray-700 rounded-md justify-center items-center hover:bg-gray-700 hover:text-gray-200 ">Part 1</div>
                    <div className="flex h-10 w-full border border-gray-700 rounded-md justify-center items-center hover:bg-gray-700 hover:text-gray-200 ">Part 2</div>
                    <div className="flex h-10 w-full border border-gray-700 rounded-md justify-center items-center hover:bg-gray-700 hover:text-gray-200 "
                        onClick={() => setShowSelectedDay(!showSelectedDay)}
                    >
                        {selectedDay == null ? 'Click to pick a day' : 'Day ' + selectedDay}
                    </div>
                    <Transition
                        className="z-30 absolute right-4 bottom-4 max-h-[calc(80vh-2rem)] overflow-x-hidden overflow-y-auto border-[2px] scrollbar-hide border-gray-700 rounded-xl w-72"
                        show={showSelectedDay}
                        enter="transition-opacity duration-75"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <ShowList setShowSelectedDay={setShowSelectedDay} setSelectedDay={setSelectedDay} />
                    </Transition>
                </div>

            </div>
        </div >

    )
}
export default AocApp