// Day 1

const day1p1 = (input = null) => {
    input = input.split('\n')
    for (var i = 0; i < input.length; i++) {
        for (var j = i; j < input.length; j++) {
            if (Number.parseInt(input[i]) + Number.parseInt(input[j]) == 2020) {
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
                if (Number.parseInt(input[i]) + Number.parseInt(input[j]) + Number.parseInt(input[k]) == 2020) {
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
        console.log(day18p1Runner(day18p1LineProcessor(input[i])))
    }
    return runningTotal
}

const day18p1Runner = (input) => {
    console.log(input)

    // find and solve brackets
    let arrOut = []
    let depth = 0;
    let startIndexes = [0]
    let endIndexes = []
    input.forEach((char, index) => {
        if (char == '(') {
            depth++;
            if (depth === 1) {
                startIndexes.push(index + 1)
            }
        }
        else if (char == ')') {
            depth--;
            if (depth === 0) {
                endIndexes.push(index)
            }
        }
    })
    console.log(startIndexes, endIndexes)
    if (startIndexes.length > 1) {
        arrOut = input
    }
    for (let i = startIndexes.length - 1; i >= 0; i--) {
        day18p1Runner(input.slice(startIndexes[i], endIndexes[i]))
        arrOut.push.apply(arrOut,arrOut.slice(0,startIndexes[i - 1]))
        console.log(startIndexes[i], endIndexes[i])
        console.log(input.slice(startIndexes[i], endIndexes[i]))
    }
    // Assuming there are no brackets
    if (input.length == 1) {
        return input[0]
    }
    arrOut.push(String(solve(input.slice(0, 3))))
    arrOut.push.apply(arrOut, input.slice(3, input.length))
    return day18p1Runner(arrOut)
}
const solve = (input) => {
    switch (input[1]) {
        case '*':
            return parseInt(input[0]) * parseInt(input[2])
            break;
        case '+':
            return parseInt(input[0]) + parseInt(input[2])
        default:
            break;
    }
    return '20'
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
    day18p1
}
