import { isCharNumber, getNumberLeftAndRight, Index } from './utils'

export { };

const test = `
...#......
.......#..
#.........
..........
......#...
.#........
.........#
..........
.......#..
#...#.....
`;

const task = `
.......#..........................................................................#.........................................................
....................#.........#............#.........................#.......................#..............................................
.#.......................................................#.................#.........................................................#......
..............#.................................#................#....................................................#.....................
..................................#......................................................................#..................................
..................#..................................#.............................#.......#...............................#................
.......#...............................#...................#................................................................................
........................................................................#....................................#........................#.....
..#...........................................................................................................................#.............
............#............#..............................................................................#...................................
...........................................#.....................................................#................#.........................
.....................................................................#...........................................................#..........
...............#....................#.......................................................................................................
#.....................................................#.......................................#............................#..........#.....
.....#................#......#................................................#.............................................................
.......................................#.......................#.......#..............#..................#......#...........................
............................................................................................................................................
...................................................#..............................................#.............................#........#..
..........#........................................................................................................#........................
...............................................#.............................#............#...........#.....................................
....................#..........................................................................................#........#...................
....#.........#............#...............................................................................................................#
....................................#................................#.............#............#...........................................
...............................#..................................................................................#.........................
#...............................................#........#.....................................................................#............
......#........................................................#......................................................#.....................
..........................................#....................................#............................................................
..................#.....................................................................#..................................#.......#........
.............................................................................................#..............................................
.............#........#...........#..........................#............................................#.......#.........................
........#...................#.......................#...................#..................................................................#
.................................................................................#.......................................#..................
................................................................#...........................................................................
...............................................#...........#..........................................#.....#...............................
..........................................#....................................................................................#............
.......#.....#............................................................................#.............................................#...
......................#....................................................#....................................#...........................
.................#...................#................#....................................................................#................
..#...............................................................#...................#.............................#.......................
.............................................................................................#..............................................
.........#..........#.......................................................................................................................
...............................#.........#.......#...............................#.........................................................#
......................................................................................................#...................#.....#...........
........................................................................................#..................#................................
..#.........................................................................................................................................
....................................................................................................................#...................#...
......................#..............................#..........#...........................................................................
......................................................................#..........................................................#..........
#.......................................#......................................................................#............................
.....#..........................#...........................................................................................................
..................#...............................#............................#........................#.................#.................
..........................................................#.................................#...............................................
.......................#..............................................................................................#...........#.....#...
............................................................................................................................................
.......#............................................#.......................................................................................
...............#................#......#......................#......................................#......................................
.....................................................................................#......................................................
............................................................................................................................................
............................................................................................................................................
...#........................................................#...........................#.....#.........................#.........#.........
............................................................................................................................................
...........#..........#......#................................................................................#.............#...............
.......................................#.................................................................................................#..
...............................................#...............#............................................................................
.............................................................................#.....................................#........................
....#..............#..................................................#............#........................................................
..............................#......................#..........................................#.....................................#.....
..............#..........................#...........................................................#......................................
................................................#..............................#..............................#..........#.......#..........
............................................................#...............................................................................
.#........................#.................................................................................................................
...............................#...........................................................#................................................
.............#........................................#........#..................................................#.........................
...........................................#...........................................................#...................#................
.........#.......................................#............................#.......#...................................................#.
.....................................................................#.............................................................#........
...........................................................#................................................................................
.....................................................#......................................#.......#..............#...........#............
............................................................................................................................................
#..........#.....................#..............................................................#........................#..................
...........................#...................#...............................#.....#..................................................#...
................................................................#...........................................................................
.......................................#..................#.......................................................................#.........
...........................................................................................................#................................
......#...............................................#......................#.................#.......................#....................
...............................#..................................#.............................................#....................#......
...........#......................................................................#................#............................#...........
.........................#.........#...............#........................................................................................
.#.........................................#...........................#..................................................................#.
....................#.........................................#.............#...........................................#...................
............................#...................................................................#............................#..............
............................................................................................................................................
.............#..............................................................................#...............#.........................#.....
#......#..........................#...............................................................................#.........................
...............................................#.......................#..................................................................#.
.....................#......................................................................................................................
............................................................#......................#.........................................#......#.......
.........................#............................#................................................................#....................
..#..............................#...............................#..........................................................................
.......................................................................................#.............#..........#...........................
.............#.........................#....................................................................................................
..................................................#...............................#.........................................#...............
...................#..........................................................................#.............................................
.#....................................................#.......#..........................................#......................#.....#.....
...............................#............................................................................................................
..............#....................................................#..........#....................#......................................#.
.........................................................#..............................#..........................#........................
.....#.........................................................................................#.............#..........#...................
..................................#................................................................................................#........
#........................#..................................................................................................................
....................#.......................#................................#..............................................................
...........#.......................................................................#...................#......................#.............
..............................................................#...................................................#.........................
...............................#..................#............................................#............................................
................#.........#.............#............................#....................#................#................................
.#..........................................................................................................................................
........#...................................................................................................................................
..................................#...................................................#.............................................#.......
.................................................................................#..........................................................
.............................#..........................#.....................................#....................#.......................#
........................................#..........................#........................................#...........#.....#.............
......................................................................................................#.....................................
..........#......#.......#....................................................#......................................................#......
.....#...............................................#.................................#........#...........................................
#...........................................#...................................................................................#...........
..............................#..............................#.....................#.......#................................................
......................#.........................#.........................................................................................#.
.......#...........................#.......................................#...............................#............#...................
............#.............................................#........................................#........................................
.....................................................#..............#................#......................................................
............................................................................................................................................
.........................#.................................................................#............#.....................#.............
..................#..........................................................#..................................#......#..................#.
.#.................................................#..........#.........#.........#.........................................................
.......#.........................#.......#..............#..........................................#........................................
.....................#.....#..............................................................................#.................................
...........................................................................#.....................................................#..........
......................................#.........................................................#........................................#..
#...............#...................................#.....................................#............#.................#..................
.............................................#.........................#..........#.............................#...........................
`;

function ifLineEmpty(galaxy: string[], i: number) {
    for (let j = 0; j < galaxy[i].length; j++) {
        const element = galaxy[i][j];
        if (element !== ".") {
            return false;
        }
    }
    return true;
}

function ifColumnEmpty(galaxy: string[], j: number) {
    for (let i = 0; i < galaxy.length; i++) {
        const element = galaxy[i][j];
        if (element !== ".") {
            return false;
        }
    }
    return true;
}
const galaxyExpander = 1000000-1;

function main(input: string) {
    const lines = input.split("\n").map(t => t.trim()).filter((t) => t);
    const emptyLines = lines.map((_, i) => ifLineEmpty(lines, i) ? i : -1).filter(i => i !== -1);
    const emptyColumns = [...lines[0]].map((_, j) => ifColumnEmpty(lines, j) ? j : -1).filter(i => i !== -1);

    const nums = [];
    for (let i = 0; i < lines.length; i++) {
        for (let j = 0; j < lines[i].length; j++) {
            if (lines[i][j] === "#") {
                const countExpandedRows = emptyLines.filter(l => l < i).length;
                const countExpandedColumns = emptyColumns.filter(c => c < j).length;
                nums.push([i + countExpandedRows * galaxyExpander, j + countExpandedColumns * galaxyExpander]);
            }
        }
    }

    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            const first = nums[i];
            const second = nums[j];
            sum += Math.abs(first[0] - second[0]) + Math.abs(first[1] - second[1]);
            // console.log(`${i} ${j} - ${sum}, ${first} ${second}`);
        }
    }
    
 
    console.log(sum);
}

console.log("test");
main(test);
console.log("task");
main(task);
console.log("done");
