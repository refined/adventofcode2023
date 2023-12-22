import { isCharNumber, getNumberLeftAndRight, Index } from '../utils'

export { };

const task = `
Time:        35     69     68     87
Distance:   213   1168   1086   1248
`;

const test = `
Time:      7  15   30
Distance:  9  40  200
`;



function main(input: string) {
    const lines = input.split("\n").map(t => t.trim()).filter((t) => t);
    const timeStr = lines[0].split(":")[1].split(" ").map(v => v.trim()).filter(v => v).join("");
    const time = Number(timeStr);
    const distance = Number(lines[1].split(":")[1].split(" ").map(v => v.trim()).filter(v => v).join(""));
    let sum = 1;

    let ways = 0;
    for (let speed = 0; speed < time; speed++) {
        const timeLeft = time - speed;
        if (speed * timeLeft > distance) {
            ways++;
        }
    }
    sum = sum * ways;


    console.log(sum);
}

console.log("test");
main(test);
console.log("task");
main(task);
console.log("done");
