// Day 1

const day1p1 = (input) => {
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
        day18p1Runner(day18p1LineProcessor(input[i]))
        //runningTotal += day18p1Runner(input[i])
    }
    console.log(runningTotal)

}

const day18p1Runner = (input) => {
    // find and solve brackets
    let arrOut = []
    let depth = 0;
    input.forEach(char => {
        if (char == '(') {

        }
    })
    // Assuming there are no brackets
    if (input.length == 1) {
        return input[0]
    }
    arrOut.push(String(solve(input.slice(0, 3))))
    arrOut.push.apply(arrOut, input.slice(3, input.length))
    console.log(arrOut)
    return day18p1Runner(arrOut)
}
const solve = (input) => {
    console.log('solving', input)
    switch (input[1]) {
        case '*':
            return parseInt(input[0]) * parseInt(input[2])
            break;
        case '+':
            return parseInt(input[0]) + parseInt(input[2])
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



export default {
    day1p1,
    day1p2,
    day18p1
}