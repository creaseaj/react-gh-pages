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

const day18p1 = (input) => {
    input = input.split('\n')
    var runningTotal = 0
    for (var i = 0; i < input.length; i++) {
        day18p1LineProcessor(input[i])
        //runningTotal += day18p1Runner(input[i])
    }

}

const day18p1Runner = (input) => {
    if (input.length == 1) {
        return input[0]
    }
    
    return day18p1Runner(input)
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

const day18p2 = (input) => {
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

export default {
    day1p1,
    day1p2,
    day18p1,
    day18p2
}