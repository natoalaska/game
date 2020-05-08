function format(number) {
    let exponent = Math.floor(Math.log10(number))
    let mantissa = number / Math.pow(10, exponent)
    
    if (exponent < 3) return number.toFixed(0)

    if (exponent % 3 == 1) {
        upMantissa = moveDecimal(mantissa, 1)
        upExponent = (Math.floor(exponent / 3))
        return upMantissa.toFixed(3) + " " + numberNames[upExponent]
    }
    if (exponent % 3 == 2) {
        upMantissa = moveDecimal(mantissa, 2)
        upExponent = (Math.floor(exponent / 3))
        return upMantissa.toFixed(3) + " " + numberNames[upExponent]
    }
    if (exponent % 3 == 0) {
        return mantissa.toFixed(3) + " " + numberNames[exponent / 3]
    }
}

var numberNames = {
    '1': "K",
    '2': 'M',
    '3': 'B',
    '4': 'T',
    '5': 'a',
    '6': 'b',
    '7': 'c',
}

function moveDecimal(number, shift) {
    number /= Math.pow(10, -shift)
    return number
}