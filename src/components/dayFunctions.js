// Day 1

const day1p1 = (input = null) => {
    input = input.split('\n')
    for (var i = 0; i < input.length; i++) {
        for (var j = i; j < input.length; j++) {
            if (Number.parseInt(input[i]) + Number.parseInt(input[j]) === 2020) {
                return Number.parseInt(input[i]) * Number.parseInt(input[j])

            }
        }
    }
}

const day1p2 = (input) => {
    input = input.split('\n')
    for (var i = 0; i < input.length; i++) {
        for (var j = i; j < input.length; j++) {
            for (var k = j; k < input.length; k++) {
                if (Number.parseInt(input[i]) + Number.parseInt(input[j]) + Number.parseInt(input[k]) === 2020) {
                    return Number.parseInt(input[i]) * Number.parseInt(input[j]) * Number.parseInt(input[k])
                }
            }
        }
    }
}


// Day 18

const day18p1 = (input) => {
    input = input.split('\n')
    var runningTotal = 0
    for (var i = 0; i < input.length; i++) {
        runningTotal += parseInt(day18p1Runner(day18p1LineProcessor(input[i])))
    }
    return runningTotal
}

const day18p2 = (input) => {
    input = input.split('\n')
    var runningTotal = 0
    for (var i = 0; i < input.length; i++) {
        runningTotal += parseInt(day18p2SolveBrackets(day18p1LineProcessor(input[i])))
    }
    return runningTotal
}

const day18p2SolveBrackets = (input) => {
    console.log(input)
    let arrOut = []
    let depth = 0;
    let startIndexes = []
    let endIndexes = []
    input.forEach((char, index) => {
        if (char === '(') {
            depth++;
            if (depth === 1) {
                startIndexes.push(index + 1)
            }
        }
        else if (char === ')') {
            depth--;
            if (depth === 0) {
                endIndexes.push(index)
            }
        }
    })
    // Found location of brackets, now I need to solve the brackets and put the line back together
    if (startIndexes.length > 0) {
        arrOut.push.apply(arrOut, input.slice(0, startIndexes[0] - 1))
        for (let i = 0; i < startIndexes.length; i++) {
            arrOut.push(day18p1Runner(input.slice(startIndexes[i], endIndexes[i])))
            arrOut.push.apply(arrOut, input.slice(endIndexes[i] + 1, startIndexes[i + 1] - 1))
        }
        arrOut.push.apply(arrOut, input.slice(endIndexes[endIndexes.length - 1] + 1, input.length))
    }
    let copyOut = []
    if (arrOut.length === 0) {
        copyOut = input
    } else {
        copyOut = arrOut
    }
    arrOut = []

    // use copyOut and will be brackets free
    copyOut = day18p2SolveAdd(copyOut)
    console.log('final added', copyOut)
    copyOut = day18p2SolveMultiply(copyOut)
    return copyOut

}
const day18p2SolveAdd = (input) => {
    console.log('adding', input)
    let arrOut = []
    let lastAdd = 0
    input.forEach((character, index) => {
        if(character === '+') {
            input[index + 1] = solve(input.slice(index -1, index + 1))
        }
    })
    for (let i = 0; i < input.length - 2; i++) {
        if (input[i + 1] === '+') {
            console.log('nextiter', input)
            arrOut.push.apply(arrOut, input.slice(lastAdd, i))
            arrOut.push(solve(input.slice(i, i + 3)))
            input[i + 2] = solve(input.slice(i, i + 3))
            lastAdd = i + 3
        } else if (input[i + 1] === '*') {

        }
    }
    arrOut.push.apply(arrOut, input.slice(lastAdd, input.length))

    return arrOut
}


const day18p2SolveMultiply = (input) => {
    let arrOut = []
    arrOut.push(String(solve(input.slice(0, 3))))
    if (input.length > 3) {
        arrOut.push.apply(arrOut, input.slice(3, input.length))
    } else {
        console.log('arrOut', arrOut)
        return arrOut

    }
    return day18p2SolveMultiply(arrOut)

}
const day18p1Runner = (input) => {
    // find and solve brackets
    let arrOut = []
    let depth = 0;
    let startIndexes = []
    let endIndexes = []
    input.forEach((char, index) => {
        if (char === '(') {
            depth++;
            if (depth === 1) {
                startIndexes.push(index + 1)
            }
        }
        else if (char === ')') {
            depth--;
            if (depth === 0) {
                endIndexes.push(index)
            }
        }
    })
    // Found location of brackets, now I need to solve the brackets and put the line back together
    if (startIndexes.length > 0) {
        arrOut.push.apply(arrOut, input.slice(0, startIndexes[0] - 1))
        for (let i = 0; i < startIndexes.length; i++) {
            arrOut.push(day18p1Runner(input.slice(startIndexes[i], endIndexes[i])))
            arrOut.push.apply(arrOut, input.slice(endIndexes[i] + 1, startIndexes[i + 1] - 1))
        }
        arrOut.push.apply(arrOut, input.slice(endIndexes[endIndexes.length - 1] + 1, input.length))
    }
    let copyOut = []
    if (arrOut.length === 0) {
        copyOut = input
    } else {
        copyOut = arrOut
    }
    arrOut = []
    // Assuming there are no brackets
    if (copyOut.length === 1) {
        return copyOut[0]
    }
    arrOut.push(String(solve(copyOut.slice(0, 3))))
    if (copyOut.length > 3) {
        arrOut.push.apply(arrOut, copyOut.slice(3, copyOut.length))
    }
    return day18p1Runner(arrOut)
}
const solve = (input) => {
    switch (input[1]) {
        case '*':
            return parseInt(input[0]) * parseInt(input[2])
        case '+':
            return parseInt(input[0]) + parseInt(input[2])
        default:
            return 0;
    }
}
const day18p1LineProcessor = (input) => {
    let arrOut = []
    for (var i = 0; i < input.length; i++) {
        if (input[i] !== ' ') {
            arrOut.push(input[i])
        }
    }
    return arrOut
}

export {
    day1p1,
    day1p2,
    day18p1,
    day18p2
}
