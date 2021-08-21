import React, { useState } from 'react';

const ShowList = (props) => {
    let output = [];
    for (let i = 0; i < 25; i++) {
        output.push(<div className="text-lg hover:bg-gray-700 hover:text-white" id={i}
            onClick={(e) => {
                props.setSelectedDay(e.target.id)
                props.setShowSelectedDay(false)
            }}>
            Day {i + 1}
        </div>
        )
    }
    return output
}

const AocApp = () => {
    const [showSelectedDay, setShowSelectedDay] = useState(false)
    const [selectedDay, setSelectedDay] = useState(null)
    return (
        <div className=" w-screen h-screen flex items-center -m-16">
            {showSelectedDay ? (
                <div className=" z-10 absolute right-0 bottom-0 top-0 left-0" onClick={() => setShowSelectedDay(!showSelectedDay)} />
            ) : null}
            <div className="relative flex container mx-auto h-app bg-gray-200 rounded-xl p-10 justify-end">
                <div className="flex h-10 w-56 border border-gray-800 rounded-md justify-center items-center hover:bg-gray-800 hover:text-gray-200 self-end"
                    onClick={() => setShowSelectedDay(!showSelectedDay)}
                >
                    {selectedDay == null ? 'Click to pick a day' : 'Day ' + selectedDay}
                </div>
                {showSelectedDay ? (
                    <div className=" z-20 absolute right-0 bottom-0  border-2 rounded-xl border-gray-700 bg-gray-100 w-72 divide-y ">
                        <ShowList setShowSelectedDay={setShowSelectedDay} setSelectedDay={setSelectedDay} />
                    </div>
                ) : null}
            </div>
        </div >

    )
}
export default AocApp