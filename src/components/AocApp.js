import React, { useEffect, useState, useRef } from 'react';
import dayFunctions, { day18p1, day1p1, day1p2 } from './dayFunctions';
import AocTestCode from './AocTestCode';
import Button from './Button';
import { motion } from "framer-motion"

const ShowList = (props) => {
    let output = [];
    Days.forEach((day, i) => {
        output.push(
            <div
                className={`${day === null ? 'bg-gray-200' : ' bg-gray-100 hover:bg-gray-700 hover:text-white'} ${i !== 24 ? 'border-b' : null} text-lg  mx-[-2px]  cursor-pointer  border-gray-700 ${i === 0 ? 'rounded-t-xl mt-[-2px]' : i === 24 ? 'rounded-b-xl mb-[-2px]' : null}`} id={i + 1} key={i + 1}
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

class Day {
    constructor(link, solution1, solution2) {
        this.link = link
        this.solution1 = solution1
        this.solution2 = solution2
    }
}

const Days = [
    new Day('https://adventofcode.com/2020/day/1', day1p1, day1p2),
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
    new Day('https://adventofcode.com/2020/day/18', day18p1, null),
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
    const [selectedDay, setSelectedDay] = useState(18)
    const [solution, setSolution] = useState(null)
    const [input, setInput] = useState('')
    let changeDayButton = useRef(null)
    useEffect(() => {
        setSolution(null)
        setInput(AocTestCode[selectedDay])
    }, [selectedDay])
    const classNames = {
        enter: "enter",
        enterFrom: "enterFrom",
        enterTo: "enterTo",
        leave: "leave",
        leaveFrom: "leaveFrom",
        leaveTo: "leaveTo"
    };
    return (
        <div className=" w-screen h-[calc(100vh-4rem)] sm:h-screen flex items-center sm:-mt-16">
            {showSelectedDay ? (
                <div className=" z-10 absolute right-0 bottom-0 top-0 left-0" onClick={() => setShowSelectedDay(!showSelectedDay)} />
            ) : null}
            <div className="relative flex sm:container sm:mx-auto w-screen h-full sm:h-[80vh] bg-gray-200 sm:rounded-xl p-[10px] flex-col justify-between gap-[10px]">
                <div className="w-full flex justify-between text-lg">
                    {selectedDay == null ?
                        (
                            <p className="font-semibold">Select a day to get started</p>
                        ) : (
                            <>
                                <p>Day {selectedDay}</p>
                                <p>Solution: {solution}</p>
                            </>
                        )
                    }
                </div>
                <div className="h-full w-full">
                    <textarea className="w-full h-full resize-none rounded-lg focus:outline-none p-[10px] focus:border-2 focus:border-gray-700"
                        onChange={(input) => setInput(input.target.value)}
                        value={input}
                    />
                </div>

                <div className="w-full  justify-between justify-self-end self-end flex flex-col sm:flex-row gap-[10px] sm:gap-[50px]">
                    <Button function={() => setSolution(Days[selectedDay - 1].solution1(input))} value="Part 1" />
                    <Button function={() => setSolution(Days[selectedDay - 1].solution2(input))} value="Part 2" disabled={Days[selectedDay - 1].solution2 == null} />
                    <div ref={changeDayButton} className="z-30 w-full">
                        <Button id="dayPick" function={() => setShowSelectedDay(!showSelectedDay)} value='Change Day' />

                    </div>
                    <motion.div
                        className={`bg-gray-200 z-20 absolute right-[10px] bottom-[10px] max-h-[calc(80vh-2rem)] overflow-x-hidden overflow-y-auto scrollbar-hide border-[2px] border-gray-700 rounded-md  ${showSelectedDay ? ' pb-[40px]' : null}`}
                        style={{ width: changeDayButton.current?.offsetWidth ?? 400 }}
                        animate={{
                            height: !showSelectedDay ? 40 : "auto"

                        }}
                        transition={{ type: "tween", duration: 0.3 }}

                    >
                        <ShowList setShowSelectedDay={setShowSelectedDay} setSelectedDay={setSelectedDay} />
                    </motion.div>

                    {/* <Transition
                        className="z-10 absolute right-[10px] bottom-[10px] max-h-[calc(80vh-2rem)] overflow-x-hidden overflow-y-auto border-[2px] scrollbar-hide border-gray-700 rounded-xl pb-[40px]"
                        style={{ width: changeDayButton.current?.offsetWidth ?? 400 }}
                        show={showSelectedDay}
                        {...classNames}
                    >
                        <ShowList setShowSelectedDay={setShowSelectedDay} setSelectedDay={setSelectedDay} />
                    </Transition> */}
                </div>

            </div>
        </div >

    )
}
export default AocApp