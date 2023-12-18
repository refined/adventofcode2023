import { isCharNumber, getNumberLeftAndRight, Index, replaceAt } from './utils'

export { };

const test = `
R 6 (#70c710)
D 5 (#0dc571)
L 2 (#5713f0)
D 2 (#d2c081)
R 2 (#59c680)
D 2 (#411b91)
L 5 (#8ceee2)
U 2 (#caa173)
L 1 (#1b58a2)
U 2 (#caa171)
R 2 (#7807d2)
U 3 (#a77fa3)
L 2 (#015232)
U 2 (#7a21e3)
`;

const task = `
L 5 (#111620)
U 5 (#381431)
L 2 (#477290)
U 5 (#0055c3)
L 7 (#35c9c0)
U 7 (#3e9133)
L 8 (#3e6ab0)
D 7 (#0ea593)
L 6 (#36a930)
U 7 (#4d36c1)
L 4 (#3c4a90)
D 4 (#0055c1)
L 2 (#344810)
D 7 (#4802a3)
L 3 (#277100)
U 11 (#627223)
L 4 (#025c90)
U 3 (#11f173)
L 2 (#417c80)
U 2 (#4b1db3)
L 9 (#408e20)
U 2 (#573413)
L 3 (#4300e0)
U 3 (#091f23)
L 5 (#3e9af0)
U 5 (#3fbd63)
R 7 (#289662)
U 3 (#14ada3)
R 9 (#2eb052)
U 5 (#4227c3)
L 5 (#127c82)
U 6 (#38f103)
L 6 (#5ca1e2)
D 6 (#1c9d13)
L 5 (#3f9df2)
U 5 (#476803)
L 4 (#354a00)
U 3 (#2d78d3)
L 4 (#4efa60)
U 3 (#2ad883)
L 2 (#2c6d82)
U 4 (#044e93)
L 7 (#534552)
U 2 (#044e91)
L 3 (#049192)
U 6 (#2b2513)
L 3 (#0a2b30)
U 8 (#0bf1e3)
L 6 (#2bdeb0)
U 2 (#031ed3)
L 5 (#464160)
U 6 (#4a2ac3)
L 5 (#059300)
D 5 (#2d2dd3)
L 3 (#108d20)
D 8 (#06b713)
L 5 (#1ae3b0)
U 4 (#482203)
L 3 (#2d5110)
U 7 (#1f9f83)
L 4 (#2d5112)
U 2 (#504413)
L 5 (#4eb920)
U 7 (#100471)
R 4 (#1d6930)
U 3 (#0555f1)
L 7 (#282d32)
U 4 (#0f9851)
R 7 (#14ab62)
U 5 (#705421)
R 7 (#14ab60)
U 7 (#277191)
R 8 (#282d30)
U 5 (#020441)
L 3 (#359a90)
U 5 (#49a163)
L 10 (#324050)
U 3 (#2355c3)
R 6 (#1ac6d0)
U 5 (#3e8f41)
R 2 (#095022)
D 5 (#71def1)
R 5 (#095020)
U 4 (#16f1d1)
R 6 (#52f300)
U 4 (#1639f3)
R 4 (#272af0)
D 4 (#2ca5c3)
R 5 (#3faee2)
D 3 (#298dd3)
R 3 (#402702)
D 5 (#0931e3)
L 6 (#434db0)
D 4 (#182893)
L 2 (#3c8830)
D 5 (#199ba3)
R 6 (#272af2)
U 5 (#1ffc73)
R 10 (#307410)
U 3 (#379fd3)
R 6 (#325eb0)
U 6 (#2559b1)
R 8 (#5c5140)
U 3 (#3e05f1)
R 7 (#539910)
D 2 (#1ef0a1)
R 3 (#1a8750)
D 4 (#237b61)
L 4 (#196ce0)
D 2 (#1006a1)
L 6 (#281362)
D 3 (#446261)
L 3 (#066910)
D 8 (#346f31)
L 3 (#066912)
D 5 (#49b741)
R 3 (#281360)
D 4 (#22a361)
R 4 (#4a8650)
D 4 (#34fa61)
R 5 (#535680)
D 4 (#4f3651)
R 4 (#18ef30)
D 6 (#17c341)
R 5 (#0d0b50)
D 5 (#1bcf31)
R 2 (#54e8e0)
D 4 (#1bcf33)
R 3 (#266190)
U 9 (#2d5151)
R 5 (#529352)
D 4 (#2a98d1)
R 2 (#4eb1a2)
D 3 (#56bf71)
R 7 (#31f440)
U 4 (#316c41)
L 4 (#3175c0)
U 5 (#303211)
R 3 (#0d4ac2)
U 6 (#219441)
R 3 (#593452)
U 5 (#1f71e3)
L 3 (#0e4222)
U 5 (#06e0a3)
L 3 (#27ad72)
U 5 (#623083)
R 4 (#27ad70)
U 5 (#14e0e3)
L 4 (#062f42)
U 2 (#1c64d3)
L 11 (#2018a2)
U 4 (#239af1)
R 3 (#05a4e2)
U 4 (#6b90b1)
R 5 (#0c25b2)
U 8 (#2a9d11)
R 4 (#4506c2)
D 12 (#219443)
R 3 (#28d952)
U 5 (#24e201)
R 3 (#3995c0)
U 3 (#63c3f1)
R 6 (#1054c0)
D 3 (#0efd41)
R 7 (#49ea82)
D 7 (#02c511)
L 7 (#28ad90)
D 6 (#6833f1)
R 5 (#13e0b0)
D 3 (#2529a1)
L 5 (#62e790)
D 8 (#434c21)
L 4 (#0f4a30)
D 4 (#1e9241)
R 4 (#39dd60)
D 5 (#36c1a1)
R 8 (#49a760)
U 5 (#082491)
R 4 (#2a0c62)
U 2 (#2dfbe1)
R 5 (#26b5c2)
U 4 (#51c741)
R 3 (#33c3b2)
U 9 (#2ec8c1)
R 5 (#2d4e22)
U 8 (#0eec81)
R 2 (#2bb9e2)
U 5 (#001b23)
R 5 (#131f02)
U 6 (#22e323)
L 3 (#24ab72)
U 5 (#2a94c3)
L 4 (#32f9c0)
D 4 (#273b93)
L 4 (#3a3580)
U 4 (#09dae3)
L 5 (#055ef2)
D 5 (#3b8563)
L 6 (#67d052)
U 5 (#02dd03)
L 4 (#151fc2)
U 5 (#006c93)
R 3 (#499c62)
U 5 (#3856e1)
R 4 (#327782)
U 7 (#3c23d1)
R 2 (#01db60)
U 9 (#3dd9d1)
R 6 (#615be0)
D 2 (#1d5671)
R 3 (#337e00)
D 9 (#13e4d1)
L 5 (#5bd7c2)
D 4 (#192ea1)
R 5 (#3c8d50)
D 6 (#030631)
R 6 (#118670)
U 3 (#3b07c1)
R 2 (#4f33f0)
U 6 (#23a3c1)
R 7 (#453072)
U 2 (#1e5661)
R 5 (#4f3a82)
U 6 (#4773a1)
R 7 (#08dcc2)
U 9 (#1c8461)
R 2 (#5bd7c0)
U 5 (#10d9a1)
R 7 (#0d64a0)
U 7 (#1c4f91)
R 4 (#4d4da0)
U 2 (#149ed3)
R 6 (#4af8c0)
D 8 (#5ce2f3)
R 7 (#01faf0)
D 3 (#4f76a3)
R 5 (#57d530)
D 2 (#4b5ee1)
R 3 (#411330)
D 3 (#4b5ee3)
L 5 (#020630)
D 6 (#2a4931)
R 6 (#254aa0)
D 8 (#229851)
R 3 (#47c190)
D 8 (#029521)
L 4 (#094f80)
D 3 (#112503)
L 4 (#052040)
U 4 (#44f593)
L 7 (#052042)
D 4 (#32c573)
L 5 (#2254f2)
D 5 (#02c763)
L 2 (#59d0e2)
D 5 (#02dec3)
L 4 (#2d4462)
D 4 (#02dec1)
R 9 (#69db02)
U 7 (#2971c3)
R 2 (#5bb5d0)
U 4 (#17a1d3)
R 5 (#0e75d0)
D 6 (#2bf401)
R 6 (#04e520)
D 5 (#375453)
R 4 (#143ee0)
D 3 (#4f9323)
L 9 (#434f50)
D 3 (#27c6e1)
R 5 (#0f9750)
D 8 (#5f2091)
R 3 (#2c3e80)
U 6 (#12ffc1)
R 4 (#1789e0)
U 4 (#38fc41)
R 2 (#00f070)
U 10 (#590d31)
L 6 (#00f072)
U 5 (#0b5b61)
R 6 (#226380)
U 8 (#009cf3)
R 7 (#08b880)
D 3 (#1c2403)
R 7 (#60dbf0)
D 6 (#2abaf3)
R 7 (#699472)
D 6 (#370ab3)
L 7 (#195b80)
D 5 (#624953)
L 7 (#3b2f70)
D 3 (#3dac43)
R 5 (#548af2)
D 3 (#05b5d3)
L 8 (#10b380)
D 2 (#4bd843)
L 3 (#4f5a30)
D 4 (#4bd841)
R 3 (#4b5fb0)
D 5 (#358563)
L 5 (#3b77a0)
D 5 (#2ed623)
R 5 (#57fde0)
D 7 (#29ca13)
R 8 (#0b9492)
D 4 (#0beeb1)
R 7 (#0af1b2)
D 6 (#0b3cb3)
R 2 (#0223f2)
D 2 (#3c4fc3)
R 7 (#4eaa22)
D 6 (#1953f3)
R 9 (#43f802)
D 3 (#55a3b1)
R 6 (#170752)
D 3 (#0b3cb1)
R 9 (#018f52)
D 2 (#0beeb3)
R 3 (#19bd22)
U 2 (#617433)
R 4 (#0228e0)
U 8 (#3c8e73)
R 4 (#33ea40)
U 3 (#3f0b73)
R 7 (#01c062)
U 3 (#369bd3)
R 5 (#01c060)
U 4 (#167a33)
R 5 (#256370)
U 6 (#22c591)
R 3 (#0e8902)
U 9 (#5b7131)
L 5 (#0e8900)
U 5 (#0deab1)
L 11 (#3803b0)
U 4 (#3c8e71)
L 4 (#4a25d0)
U 3 (#587e03)
R 5 (#1bdb80)
U 2 (#732611)
R 7 (#217af0)
U 3 (#160d21)
R 3 (#34ba90)
U 6 (#60e121)
R 5 (#2ee030)
U 6 (#287e11)
R 7 (#33aee0)
U 3 (#32e821)
R 7 (#2885e2)
U 5 (#467531)
R 5 (#2885e0)
U 3 (#0c3191)
R 3 (#249d82)
D 2 (#483a81)
R 7 (#4a75a0)
D 6 (#26e9d1)
R 5 (#4a75a2)
D 3 (#25d3b1)
R 6 (#2e9262)
D 4 (#03e411)
L 8 (#6b9272)
D 6 (#116f51)
R 8 (#12aae0)
D 4 (#01a2a1)
R 6 (#734070)
D 10 (#01a2a3)
L 6 (#38d700)
D 9 (#29dd11)
R 3 (#153790)
D 7 (#109bf1)
L 8 (#28dde2)
D 5 (#33e5b1)
R 8 (#1dc922)
D 4 (#6bb741)
R 6 (#379ae2)
U 8 (#151eb1)
R 6 (#268562)
U 3 (#2e8fe1)
R 3 (#525330)
D 6 (#10dad1)
R 6 (#527410)
U 6 (#3979c1)
R 8 (#6f5a32)
U 7 (#303501)
R 2 (#1aef42)
U 3 (#1b0861)
L 4 (#0de6a0)
U 4 (#043ff1)
L 10 (#68ced0)
U 5 (#020831)
L 11 (#4358c2)
U 5 (#597361)
R 7 (#136172)
U 9 (#083dc1)
R 3 (#1ffb42)
U 3 (#2655a1)
R 6 (#4550f2)
U 8 (#2b0791)
R 2 (#29fd92)
U 3 (#03ab61)
R 8 (#77ce32)
U 4 (#102c81)
R 10 (#106b62)
U 6 (#433841)
L 5 (#0c8962)
U 3 (#3d8421)
L 9 (#00c362)
U 4 (#304041)
L 4 (#01a312)
U 7 (#347691)
L 3 (#48b7c2)
U 4 (#2d3763)
L 5 (#31d162)
U 5 (#2d3761)
R 7 (#1aa832)
U 2 (#2b4031)
R 8 (#252b62)
U 6 (#430c61)
L 6 (#1b0730)
U 3 (#1ad951)
L 3 (#39b7c0)
D 4 (#278041)
L 10 (#248e00)
U 4 (#562763)
L 3 (#1cb6a0)
U 4 (#143e83)
R 4 (#500690)
U 3 (#2ec473)
R 6 (#217680)
U 3 (#1b9fa3)
R 4 (#366d30)
U 2 (#4a6411)
R 8 (#3c9090)
U 5 (#143e81)
R 8 (#6cfbc0)
D 8 (#2818d3)
R 4 (#2cef70)
D 11 (#2e0581)
R 2 (#500420)
D 7 (#503ab1)
R 6 (#0ed250)
D 2 (#529be1)
R 2 (#29ffa0)
D 8 (#106443)
R 6 (#70b9d0)
D 4 (#106441)
R 6 (#3c0700)
D 6 (#394be1)
R 7 (#37b782)
D 3 (#2afee1)
R 3 (#032762)
D 4 (#7838d1)
R 7 (#22d3a2)
D 6 (#48ebb3)
R 5 (#3cb6f2)
D 5 (#5a4c03)
R 7 (#3c5702)
D 3 (#1cad51)
R 3 (#094532)
D 3 (#2e9931)
R 3 (#610912)
D 4 (#279271)
R 7 (#25b722)
D 4 (#2dbd51)
R 4 (#4bc002)
D 7 (#247551)
R 4 (#3a7412)
D 6 (#3490a1)
L 8 (#3eadf2)
D 7 (#0ebcd1)
L 4 (#21b642)
D 5 (#57d0d1)
L 6 (#0d1512)
U 9 (#3396b1)
L 5 (#341e50)
D 7 (#1482a1)
L 5 (#341e52)
D 2 (#421a61)
L 3 (#0070e2)
D 3 (#57f993)
L 2 (#3d4352)
D 9 (#167b63)
R 3 (#0d80f2)
D 4 (#6cd083)
R 7 (#0c7022)
U 3 (#33c873)
R 6 (#0273b2)
U 6 (#384081)
R 7 (#261032)
D 6 (#6808f3)
R 4 (#1fb802)
D 3 (#0b72e3)
R 4 (#35e7f2)
D 5 (#737bd1)
L 4 (#1e2372)
D 2 (#384083)
L 4 (#19be72)
D 8 (#210f83)
L 6 (#137eb2)
U 10 (#493ac3)
L 3 (#263cb2)
D 4 (#41dce3)
L 3 (#417982)
D 9 (#28fb53)
R 4 (#472bb2)
D 3 (#3bc9a3)
L 3 (#5dad72)
D 7 (#1a9483)
L 8 (#25ba62)
D 5 (#565e21)
R 11 (#2bd302)
D 5 (#10d481)
L 4 (#4b1be2)
D 9 (#266eb1)
L 6 (#0638f2)
D 8 (#38a111)
L 4 (#5f8be2)
U 7 (#34aa31)
L 9 (#6632e2)
U 4 (#3c0661)
L 6 (#5e52b2)
U 4 (#3c0663)
L 6 (#095802)
U 9 (#0c4341)
L 7 (#073530)
U 5 (#456251)
L 5 (#161800)
U 5 (#371cb1)
R 5 (#2e7860)
U 3 (#25a131)
L 6 (#07fb20)
U 6 (#0632e1)
L 10 (#5ca0e0)
D 5 (#03c0d1)
L 3 (#40d762)
D 4 (#4c8b61)
L 2 (#23c4a2)
D 5 (#410711)
L 5 (#0ed410)
D 6 (#074d01)
L 3 (#568940)
D 3 (#08bd23)
L 3 (#0cc3e0)
D 9 (#784533)
L 2 (#0cc3e2)
D 2 (#437203)
L 7 (#3a1770)
D 6 (#0a0371)
L 3 (#1ce6a0)
D 3 (#37d2e1)
L 4 (#5c5d70)
D 9 (#0bd5d1)
L 2 (#1a3fe0)
D 3 (#693381)
L 4 (#0946c2)
U 12 (#2df7a3)
L 4 (#66da52)
D 4 (#225e03)
L 5 (#08d6d2)
D 7 (#4641e3)
L 4 (#128362)
U 7 (#0475e1)
L 4 (#346ad2)
D 7 (#2de451)
L 3 (#1d29c0)
D 6 (#427cb1)
L 7 (#1d29c2)
D 4 (#350921)
L 8 (#346ad0)
D 2 (#6a73b1)
L 4 (#19dcb2)
D 3 (#7176f1)
L 3 (#003692)
D 2 (#08d4c1)
L 7 (#4f3522)
D 7 (#0d38c1)
L 6 (#1467f2)
D 7 (#0614f3)
L 3 (#16d732)
D 2 (#730733)
L 6 (#2ee4f2)
D 6 (#3026d3)
L 6 (#185472)
D 4 (#204341)
L 3 (#532d02)
D 4 (#204343)
L 5 (#284fc2)
D 4 (#141a03)
L 3 (#1c8732)
D 5 (#365ac3)
L 8 (#1ae1e2)
D 6 (#2031a3)
L 8 (#4b40c0)
D 3 (#30cba3)
L 5 (#4b40c2)
D 2 (#2dd753)
L 3 (#1ae1e0)
D 9 (#294be3)
L 3 (#542fd2)
U 10 (#4b3733)
L 4 (#18c272)
U 4 (#1b2ab3)
L 4 (#6787b2)
D 8 (#0aa403)
L 2 (#417590)
D 4 (#3bce53)
L 3 (#30b170)
U 4 (#075fb3)
L 3 (#0e2320)
U 2 (#1ea7a3)
L 8 (#4eeb72)
U 4 (#0c6ce3)
R 5 (#420950)
U 2 (#004bd3)
R 6 (#2fedd0)
U 3 (#004bd1)
R 6 (#125af0)
U 6 (#07f653)
R 4 (#4f9522)
U 10 (#0e08d3)
L 5 (#098952)
U 6 (#1e7a63)
L 2 (#4af752)
U 5 (#4b16d3)
L 3 (#1dbc42)
U 3 (#59b8a3)
L 3 (#122370)
D 9 (#223c53)
L 6 (#6c1240)
D 5 (#223c51)
L 2 (#439c50)
D 6 (#2a5503)
L 9 (#2bf2f2)
D 5 (#147433)
L 5 (#585f22)
D 6 (#49ed13)
L 6 (#0b1052)
D 8 (#3f0673)
L 5 (#246c32)
D 6 (#20b213)
R 3 (#246c30)
D 2 (#2c1703)
R 6 (#0b1050)
D 7 (#4d1da3)
L 7 (#3fcba0)
D 4 (#070aa1)
L 2 (#3fb160)
D 4 (#67d971)
L 4 (#0c9540)
D 10 (#1d77f1)
L 3 (#081080)
D 7 (#368293)
R 9 (#225fc0)
D 6 (#1a0723)
R 7 (#225fc2)
U 6 (#3bd253)
R 3 (#0d1100)
D 3 (#0f82c3)
R 4 (#1b6f60)
D 7 (#13d1c3)
R 4 (#33cc20)
D 6 (#13d1c1)
L 6 (#48ce70)
D 3 (#301223)
L 2 (#40b300)
D 6 (#270e63)
L 2 (#2137c0)
D 3 (#2904e3)
L 6 (#25bef0)
U 7 (#1cad53)
L 5 (#127ca2)
U 5 (#3ecf43)
L 6 (#29b292)
D 4 (#2b86d3)
L 4 (#3583d2)
U 11 (#32d9e3)
L 5 (#0511b2)
U 3 (#3b6653)
L 3 (#3852b2)
U 8 (#3bf173)
L 7 (#290102)
U 5 (#358ea3)
L 7 (#549172)
U 4 (#1f7503)
L 2 (#30fec2)
U 7 (#4a6733)
L 9 (#482ea2)
U 5 (#210683)
L 3 (#1b1032)
U 8 (#37d3c3)
L 2 (#211102)
U 4 (#31d3b3)
L 4 (#037bb2)
U 6 (#3763d3)
L 6 (#14c8a2)
U 8 (#4ad391)
L 2 (#41c3d2)
U 4 (#29b821)
L 8 (#1b32f2)
U 6 (#748bb3)
R 6 (#129632)
U 2 (#229953)
R 3 (#3c0172)
U 5 (#4e4773)
R 6 (#4f9a82)
D 5 (#44ea23)
R 4 (#04df92)
U 6 (#10b5e3)
R 6 (#6405c2)
U 3 (#40daf3)
R 5 (#1212a2)
U 2 (#27b3b3)
R 6 (#12f172)
U 7 (#3ec613)
L 3 (#512902)
U 8 (#28df13)
L 5 (#3c5532)
U 3 (#4d31f3)
L 6 (#17d212)
U 5 (#55ffd3)
`;

function main(input: string) {
    const lines = input.split("\n").map(t => t.trim()).filter((t) => t);
    let sum = 0;

    const moves: Map<number, Map<number, [[number, number], [number, number]]>> = new Map();
    const area: number[][] = Array<number[]>(10000).fill(Array<number>(10000).fill(0));
    let i = 5000;
    let j = 5000;
    for (const line of lines) {
        const dir = line.split(" ")[0];
        const length = Number(line.split(" ")[1]);
        let move: [number, number] = [0, 0];
        if (dir === "R") move = [0, 1];
        else if (dir === "D") move = [1, 0];
        else if (dir === "L") move = [0, -1];
        else if (dir === "U") move = [-1, 0];
        for (let i1 = i; i1 <= i + move[0] * length; i1++) {
            area[i1][j] = 1;
        }
        for (let j1 = j; j1 <= j + move[1] * length; j1++) {
            area[i][j1] = 1;
        }
        if (!moves.has(i)) {
            moves.set(i, new Map());
        }
        const toI = moves.get(i)!;
        toI.set(j, [move, [i + move[0] * length, j + move[1] * length]]);
        i = i + move[0] * length;
        j = j + move[1] * length;
    }

    for (let i1 = 0; i1 < area.length; i1++) {
        const element = area[i1];
        let isIn = false;
        for (let j1 = 0; j1 < element.length; j1++) {
            if (area[i1][j1] === 1) {
                const move = moves.get(i1)?.get(j1);
                if (move) {
                    while (area[i1][j1] === 1) {
                        sum += 1;
                        j1 += 1;
                    }
                }
                isIn = !isIn;
            }
            if (isIn) {
                sum += 1;
            }
        }
    }

    console.log(sum);
}

console.log("test");
main(test);
console.log("task");
main(task);
console.log("done");
