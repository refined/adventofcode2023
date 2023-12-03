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