import { isCharNumber, getNumberLeftAndRight, Index, replaceAt, coord } from './utils'

export { };

const test = `
...........
.....###.#.
.###.##..#.
..#.#...#..
....#.#....
.##..S####.
.##..#...#.
.......##..
.##.#.####.
.##..##.##.
...........
`;

const task = `
...................................................................................................................................
..............#...#........#...............#.#.......#....##...........#.#..#......#.....#.........#..##...........................
.#..##..##..#......#.#.#...##......###...##......#.#..#...................#.....#..........#..#................#...#..........#....
.....................#..#.......#.....##.........#.......................................#........#....#.#..........#.#......#.#...
......##...#.....#.......#...#..###..........#..........#......................#........#.............#.....#........#....#........
.................##.................#...#.........#................................#........#...........#............#........#....
..............#.#....#........##.....##..........#.............##.............#...#......#..##..........#.........#.....#...#..#...
..#....#.......#...##..#......#.........#.#..#....#.#..............#........#...#...#...............#.#.....#..#..##......#...#....
...#......##...##..#...#..........#...#..........#..............#...#..........#..#..#..#........#.#.#.#.#...........###...........
.#.#.#...#.#...##............................................#......................#...#......#......##.#.........................
.##.#.........#...#..................##...........#............#..................###...#...........#.................#....#.......
.....................#...#.#................#................#.#........................#...#...##....##....#.#...#.........#...#..
...#.......#...#.........................#.#..................#........##..........................#......##....##............#....
......................#.....................#...............#.......#.#...................#...............#...#........#.##......#.
............................#..........................#........#....#.##..#.......#.##..#...#.#..#...............#.#..#....#......
.......................................................#.#..#.#....#......................#............#....#..#.......#.........#.
.....##........#...............#.......#...............#.#..........##..#...................#................#..#...#.#....#...###.
....#.....................##................#.......#.......#...#.#...#...............#................#...............##..........
....#........#..#.......#.#.#........................#.#...........#.......#..#.........#....#.......#........#.#.#................
......###.....#..#...........#.....#..#..#........#......#.#........###.....##............#..#...........#.........................
.....#...........#...................#..#..........#..#...###.#.........#.##...............#..##..........#.........#..............
.#.........#....#............#.##..........................##.....#........#....#.............#.......#...#..............##.#......
.#..#...#.......#...#.......##.......#.#.............................#...#...#.#...........#...#.................#.........#.#.#...
...#....................#.....##..............#.................#.................#............#......#....#.......#.........#.....
.......#...#.............#.##...#.#...................#.....#..#........#................................#.............#..#...##...
...#.###..............#....#........................#......#...#.........#......#.#....................#........#...#...#.......#..
............#.#...#...........................#....###.###...#........#..#........#...................##.....###......#........#...
.....#...#................#.##..##..................#....#.........#............##...................##................#.....#.....
.#....#..............##...#..................#......#..........##.#....#......##.#...............#....##..............#....#.......
....#.#.##...........##.....#...........#.........#...#........#..#.......#......#................#.#...#....#...#.................
.......#...#...#...#..#.......#..........#..................#..#........#..#.#.....#.#.....................##......................
.....##.........#.......##...#.............#.##.#.#...#.##.#...#......#...#....#.......#..#.........#...........#.##.###.#.....#...
...................#.#.......................#.....#.#......#.....##...#.#....#..#..........#...........#..##....#...#.......#.#...
.....#..#..#.........#...#.#.........#...#.#...##...#......##........#...............#.......#................#.....#...#.#........
........#.....###.....................#.........#.........#.........#....##............#..##.............#.........#..#.......#....
.#.........#....##..##.................#...#................................#...#.....#.........#.......#............#....#......#.
..#.........#.......#..................#..#.#...#........#.#.......#...##.#........#..........#.#..........#..#.....#.........#....
..#...............#...................##.#.......#...#..........#....................##.........#.................#..#......##..#..
.#........#.......#............##...........##........#.......................#................#....................#...###......#.
........###..........#..............#.............#..#.#.#............##...............#........#...#........#...................#.
...#............................#...##.##........#......#..#...................#.#.....#...#.##...............#........#...#.......
..#...##....................#.....##......#.......#..........#......#.........#...#..............#..............#..................
.....#..#....................#....###.....#..#.............#...#....#................#.....#.....................#........#........
.....#.#...#.....#..............##............#....##.#....#.#........##...........#....#.........................#....#......##...
....#..#.....##...........#.#.#.#............#....#.....#.........#........................##.......#.#..............##...#........
...............#..............#................................#....#........#.......#.......##......#.#............#......#....#..
.#......#....##........#.............#..#.#.............#...#..#.........#.........#................#..................#...........
.........#..............#....#......#.....##......#............#....#.........#....#...................#....#.........#......#..#..
..............................#....#.#........#.#.....#..#.................#....#...#..........#............##.......#.#.#....#....
.#..................#....#..#.......#.##..............#...#.......#................#...............................................
.#..##.........................#.....###......#....#......#.....#............#.#......##......##......##....#..........##.....#....
..........................##.#.....#..........................................#.#..#....#..#..................#...........#........
..##.....#.......#....#.........#..........#....................#.........#........###........................#..........#.........
.#.#...............#..........#.......#.....#....##.#..#.##...............#...#...#.#......#.......#.......#.#.............#....##.
..................#...............##.........##..#........#..#..........#.....................#............................#.......
.....#................#...##.......##.........#.....#.#....#.#........#...#..#....#..............#..#....#....#....#...............
..##.#........#...............#.#..#...................##...#......#.#...#..#.....##.................##...#.#...................#..
...#...............#......#.....#.......#......#.........#...#......#...#..#....#..#......#.......#.......#...#.##.#...........##..
..............##..........##..........#..##...............#...........##..#..#..#.#.......#...#.............#......................
..........#.#........................#...#.#..#.#...##..#.#.#.#.......#....#.#.#..............#...#...#........###..##...........#.
......................#...#.#..##.....#....#.....###.#..#.....#..........#........#...........##...#..#...........##..#............
..................................####.#..............#.................#........#.#............##......#.#..........#.............
..................#..........#.............................#...........#..#..#......#................#.......##...##..#............
....................#...#....#.#.#.##......#................#.................#...........#....#..........#....#...##.###..........
.................#.......#...#............###.###..#.......#......#.......#..##......#.#.....#.....................#...............
.................................................................S.................................................................
.......##...........#.........###.......#....###.#.#....#.#....#....#........#.......#...#...#.#.........#...................#.....
.......#...............#............#...#..#.......##...#...#.#............#.............#......##..........#..............#.......
.......##.........#.....................##...#...#.................#...#.......#..####......#.....#..............#..##.............
........#..#.............#.#..##..............#...#.............#.....#......#...#.#.......#...............##...##.................
.........#..#...#..#.#..#..#...................##......#.....#..#...##..............#......#..........#.##...#.#.##.#..............
..............#..........#....................................#.........#.......#..#............##................#................
...........#...#.....#.........#....#..###....#...#.......#....#...............##.....#.......#.#.....#.#....#.#..#................
..#...................#........###..............#.#................#...###...##.............#.###......#...#...#.....#..........#..
.#.#............#.....#....###......................................#..........................#..................#................
................#..#...#................#.................##.................##..........#.......#...#.............#...............
.....##...........#....#.......#......#.#.....#.....#................#.....#.........#..#.................#........#........#......
.#.#.............#..#.#..............#.....#..#.#.....#..#......#.........#.....#.#......#..#.......#.#......##............#..#....
...................#............#....#...........#........#...................#.....##..............#........###...............#...
......###..........###.#.......#.................................................#..#.........#.#...#.........#.#..........#.#.....
..#.................#..#..#...#............#...#...#..##.#....##..#..................##.....#......#.........................#...#.
......................#.#.....#.#...#.......##...........#...#....#.............#.......#.............#.#.#.#......................
......#..#.#..........#....#.........#......#................#.........##.#....#.......#........#.#....................#......#....
..#....#....#...............#..........#...#.#......#...................#.........#..#.#......#..#.........................##....#.
..............#..........##......#.##...#...#.#................#...#..#.......#.#.....#........#...###..##.........#..##.........#.
........##...........................##.......#.#..................#........#.......#.#........#.........................##....#...
..#.#...........#.......................#.#.....#....#.....#...............####...#..............#...#....................#.#......
.......#...#....#.#.......#####...##.....#.#.......#....#.#........#................................#.##..........##....#..#.......
.........#.....#................##.#..................#.....................#...#................#.###.#.......###....#............
............#.#....#........#....#..................#...##.............#............#.......#.....#..#............##...............
....#.....#..........#..............#...#...#........##.....#.#....#....#........##.............................#.#.......#........
..#..#.#.......#.................#................................#......##.#..#..............#.#................#...#.#...........
.....#.....#........................#..#................#......#.......#.........###.#.#.........#.........#.....#.......#.........
.......#.......................................#.......#...............#.#..###...#.#.##.......#...........#.#.....#.##........#...
......##.........#.................................#.........#........##.#................#.#...#.............#...#..#........#....
......#.....#.#.......#...........#..#...........#.........#..#.#.......#.........##.....#....#.#...............#...#...#....#...#.
..#...#.#....#....#..............................#..#...#.......#.#.#..##..................#...............#......#..###..#.#......
.....#...#..#......#.....##...............#..........#..#.#####.......#...........#...................#.....#...#.........#..#.#...
.................#.......#..................#........#.......##...##.#....#.#.............#.............#....#....#................
...........####..#.....#....#.............#.......#...#..#.....#.............#...#....#.............#.#....#.#.............#.......
...#..#..#...#...#.#.....#.......................#....#..###.###.....#.........#....................#....#..#............#.....#...
.#.##....##...#......#.#.....#......................#.##..................#........#..#................#.#.......#.............#...
....##........#.......#..#..#............#..#..#..#...#......###..#..#..#...##...............................#.#........#......#.#.
..#..#..........#..........#..#.#.............#.....#...........#.##.......#............................#...........#...#..........
..#.#..#...#....#.....#.....#...#................#.....#.....#....#..#...#..#....#....#.....................#....#.................
.......#........#...#.............#.................#...#.#.....#.#....#..........#......................#..#............#.........
....#........#........#..............#.........................#...................#..........#.........#..#.........#.............
................#........#.........#............................#.#.............#..##.......#......#..#.................#......#.#.
..#.....#.........#...#..#.#.........................#...#...#...........#.....#...........#........#.............#.....#........#.
....#...#....#......#....#...#..#.................#...##.....#.#............................##...#...#..##.#.....................#.
...#..##...............#............................#...........#......#.#.....#............#........#.##................#.........
................#..#.............#..#..............#.#....#...#.#...#...#.#.##.............................#..#...........#........
.......#.......#....###............#.#.#.....................#.#..#....#.................##.....#.#..........##..#......#..........
.......#..........##.#.......#.##...#...............##.....#..........#................#............#...#........#........#........
...###.#.............................#.....#.#............##..#...#.....###..........#...............................#.....#....#..
....###.#...#.......#.##........#......#..##.#..........#.#...#.#....#.#..............##....#..#...#...........#...#.#..#..........
.....#....#.#..##.....#..........#..#...##..............#.......#.......#.............#..#.....#.......#.....#...##...###.......#..
........##...#...##..#.#.....#..........................#.#.#..#..#...................#....#....#..#....#..........#....##.........
...........##.....#...#........##..#........#....#..........#..#...............................................#......#.#.......#..
...#..##.........##....#...........##...#.......##.........#........#...........#........#.#.##...........#....#.....###...#.......
...#...#........................#..#...#..#........................................#......#..#...#.#....#...........#..............
...#..#.......#..#......##...................#...............#.....#.#.............#.....#.........#.#..##.....#..........#..#.....
....###....#..#.....#.#........#.##.......##...#...............#...............###.###.#...#............##.....#.................#.
....#...#.........#.##............#.....#........#............................................##.#......#..##.........#....###..#..
............#...##..#..........#........#.......#.#..........................#..#.#.......#......#.......................##.#..#...
....#......#....#....#..#.....#........#......#....#..#.#..............................#..#....#............#....#.................
..#.............#...#......#...#.....................#.##...............................##...#.......#........................#.##.
....#....##........#..............#....#.......#.....................................#........#........#...##..........#...........
....#.#.##..#..#....................#.................#.##.............#....#....#.............###...#...#..##....#.....##.........
.............#.......#...............#........#.#.....#..#.#................#.....#..##.....#....#...............#....#......#...#.
...................................................................................................................................
`;

interface OneField {
    coords: coord;
    zip: string;
}

function getPointsFromZip(zip: string): coord[] {
    const lines = zip.split(";");
    const points: coord[] = [];
    for (let i = 0; i < lines.length; i++) {
        for (let j = 0; j < lines[i].length; j++) {
            if (lines[i][j] === "S") {
                points.push([i, j]);
            }
        }
    }
    return points;
}

function zipPoints(points: coord[], input: string[]): string {
    let zip = input.join(";");
    for (const point of points) {
        const i = point[0] * (input[0].length + 1) + point[1];
        zip = zip.substring(0, i) + "S" + zip.substring(i + 1);
    }
    return zip;
}

function movePoints(field: OneField, rowMax: number, colMax: number, input: string[]): { newField: OneField, outs: OneField[] } {
    const newPoints = [];
    const points = getPointsFromZip(field.zip);
    const outLeftPoints: coord[] = [];
    const outTopPoints: coord[] = [];
    const outRightPoints: coord[] = [];
    const outBottomPoints: coord[] = [];
    const outs: OneField[] = [];

    for (const [i, j] of points) {
        for (const dir of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
            const nextI = dir[0] + i;
            const nextJ = dir[1] + j;
            const i1 = nextI >= 0 ? nextI % rowMax : rowMax + ((nextI + 1) % rowMax) - 1;
            const j1 = nextJ >= 0 ? nextJ % colMax : colMax + ((nextJ + 1) % colMax) - 1;

            if (0 <= nextI && nextI < rowMax && 0 <= nextJ && nextJ < colMax) {
                if (input[nextI][nextJ] !== "#") {
                    newPoints.push([nextI, nextJ])
                }
            } else {
                if (nextI < 0) outTopPoints.push([i1, j1]);
                if (nextJ < 0) outLeftPoints.push([i1, j1]);
                if (nextI >= rowMax) outBottomPoints.push([i1, j1]);
                if (nextJ >= colMax) outRightPoints.push([i1, j1]);
            }
        }
    }
    if (outLeftPoints.length) {
        outs.push({
            coords: [0, -colMax],
            zip: zipPoints(outLeftPoints, input)
        })
    }
    if (outTopPoints.length) {
        outs.push({
            coords: [- rowMax, 0],
            zip: zipPoints(outTopPoints, input)
        })
    }
    if (outRightPoints.length) {
        outs.push({
            coords: [0, 0 + colMax],
            zip: zipPoints(outRightPoints, input)
        })
    }
    if (outBottomPoints.length) {
        outs.push({
            coords: [0 + rowMax, 0],
            zip: zipPoints(outBottomPoints, input)
        })
    }

    return {
        newField: { coords: field.coords, zip: zipPoints(newPoints, input) },
        outs: outs
    }
}

function sumOnField(zip: string): number {
    return [...zip].filter(ch => ch === "S").length;
}

function main(input: string, steps: number) {
    const lines = input.split("\n").map(t => t.trim()).filter((t) => t);
    let sum = 0;

    let allPoints = new Map<number, Map<number, number>>();
    let newMap = new Map<number, number>();
    const baseField: string[] = [];
    for (let row = 0; row < lines.length; row++) {
        const line = lines[row];
        const startIndex = line.indexOf("S");
        if (startIndex >= 0) {
            const start = [row, startIndex];
            newMap.set(start[1], 0);
            allPoints.set(start[0], newMap);
            baseField.push(line.replace("S", "."));
        } else {
            baseField.push(line);
        }
    }
    const rowMax = lines.length; // 131
    const colMax = lines[0].length; // 131

    const fields = new Map<string, string>(); // [i,j] -> string
    const cache = new Map<string, { newField: OneField, outs: OneField[] }>(); // string -> string
    fields.set("0,0", lines.join(";"));

    for (let counter = 0; counter < steps; counter++) {
        if (counter === 65 + 131 * 3) {
            const iterates = (steps - 65) / 131;
            const odd = Math.pow((iterates), 2);
            const even = Math.pow((iterates - 1), 2);
            sum = sumOnField(fields.get("0,131")) * even + sumOnField(fields.get("0,0")) * odd // all full square
                + sumOnField(fields.get("0,393")) // top, left, right, bottom
                + sumOnField(fields.get("0,-393"))
                + sumOnField(fields.get("-393,0"))
                + sumOnField(fields.get("393,0"))

                + sumOnField(fields.get("262,131")) * (iterates - 1) // not very full square on edges
                + sumOnField(fields.get("-262,131")) * (iterates - 1)
                + sumOnField(fields.get("262,-131")) * (iterates - 1)
                + sumOnField(fields.get("-262,-131")) * (iterates - 1)

                + sumOnField(fields.get("393,131")) * (iterates) // small square on edges
                + sumOnField(fields.get("-393,131")) * (iterates)
                + sumOnField(fields.get("393,-131")) * (iterates)
                + sumOnField(fields.get("-393,-131")) * (iterates)
                ;
            break;
        }

        const newFields = [];
        for (const [coords, field] of fields.entries()) {
            let p = cache.get(field);
            const cor: coord = coords.split(",").map(Number) as coord;
            if (!p) {
                p = movePoints({ coords: cor, zip: field }, rowMax, colMax, baseField);
                cache.set(field, p);
            }
            fields.set(coords, p.newField.zip);
            for (const o of p.outs) {
                const newCoords = [cor[0] + o.coords[0], cor[1] + o.coords[1]];
                if (!fields.has(newCoords.join(","))) {
                    newFields.push([newCoords.join(","), o.zip])
                };
            }
        }
        for (const f of newFields) {
            fields.set(f[0], f[1]);
        }
    }

    console.log(sum);
}

console.log("test");
console.log("task");
main(task, 26501365);
console.log("done");