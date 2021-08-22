import React, { useState } from 'react';

const ShowList = (props) => {
    let output = [];
    for (let i = 1; i <= 25; i++) {
        output.push(
            <div
                className={`text-lg bg-gray-100 hover:bg-gray-700 hover:text-white cursor-pointer border-b border-l-[2px] border-r-[2px] border-gray-700 ${i == 1 ? 'rounded-t-xl border-t-[2px]' : i == 25 ? 'rounded-b-xl border-b-[2px]' : null}`} id={i} key={i}
                onClick={(e) => {
                    props.setSelectedDay(e.target.id)
                    props.setShowSelectedDay(false)
                }}>
                Day {i}
            </div>
        )
    }
    return output
}

const AocApp = () => {
    const [showSelectedDay, setShowSelectedDay] = useState(false)
    const [selectedDay, setSelectedDay] = useState(null)
    return (
        <div className=" w-screen h-[calc(100vh-4rem)] sm:h-screen flex items-center sm:-mt-16">
            {showSelectedDay ? (
                <div className=" z-20 absolute right-0 bottom-0 top-0 left-0" onClick={() => setShowSelectedDay(!showSelectedDay)} />
            ) : null}
            <div className="relative flex sm:container sm:mx-auto w-screen h-full sm:h-[80vh] bg-gray-200 sm:rounded-xl p-10 gap-[50px]">
                <div className="w-full  justify-between justify-self-end self-end flex">
                    <div className="flex h-10 w-full border border-gray-700 rounded-md justify-center items-center hover:bg-gray-700 hover:text-gray-200 "> Test</div>
                    <div className="flex h-10 w-full border border-gray-700 rounded-md justify-center items-center hover:bg-gray-700 hover:text-gray-200 "> Test</div>
                    <div className="flex h-10 w-full border border-gray-700 rounded-md justify-center items-center hover:bg-gray-700 hover:text-gray-200 "
                        onClick={() => setShowSelectedDay(!showSelectedDay)}
                    >
                        {selectedDay == null ? 'Click to pick a day' : 'Day ' + selectedDay}
                    </div>
                    {showSelectedDay ? (
                        <div className="z-30 absolute right-4 bottom-4    rounded-x w-72">
                            <ShowList setShowSelectedDay={setShowSelectedDay} setSelectedDay={setSelectedDay} />
                        </div>
                    ) : null}
                </div>

            </div>
        </div >

    )
}
export default AocApp