export function isCharNumber(ch: string) {
    return '0' <= ch && ch <= '9';
}

export function getNumberLeftAndRight(line: string, i: number): { num: number, left: number, right: number } {
    let numStr = line[i];
    let posLeft = i - 1;
    while (posLeft >= 0 && isCharNumber(line[posLeft])) {
        numStr = line[posLeft] + numStr;
        posLeft--;
    }

    let posRight = i + 1;
    while (posRight < line.length && isCharNumber(line[posRight])) {
        numStr = numStr + line[posRight];
        posRight++;
    }

    const res = Number(numStr);
    if (Number.isNaN(res)) {
        throw Error(`Number invalid i: ${i}, line ${line} `);
    }
    return { num: res, left: posLeft, right: posRight };
}

export interface Index { col: number, row: number }

function gcd2(a, b) {
    // Greatest common divisor of 2 integers
    if (!b) return b === 0 ? a : NaN;
    return gcd2(b, a % b);
}
export function gcd(array) {
    // Greatest common divisor of a list of integers
    var n = 0;
    for (var i = 0; i < array.length; ++i)
        n = gcd2(array[i], n);
    return n;
}
function lcm2(a, b) {
    // Least common multiple of 2 integers
    return a * b / gcd2(a, b);
}
export function lcm(array) {
    // Least common multiple of a list of integers
    var n = 1;
    for (var i = 0; i < array.length; ++i)
        n = lcm2(array[i], n);
    return n;
}

export function replaceAt(str: string, index: number, replacement: string) {
    return str.substring(0, index) + replacement + str.substring(index + replacement.length);
}