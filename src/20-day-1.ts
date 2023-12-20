import { isCharNumber, getNumberLeftAndRight, Index, replaceAt, coord } from './utils'

export { };

const test = `
broadcaster -> a, b, c
%a -> b
%b -> c
%c -> inv
&inv -> a
`;
const test2 = `
broadcaster -> a
%a -> inv, con
&inv -> b
%b -> con
&con -> output
`;

const task = `
%qx -> gz
%tr -> rm
%qr -> kx, jm
%gj -> tx, rj
%lc -> hr
&kx -> zs, br, jd, bj, vg
&kd -> rg
%rm -> pf, ml
%tg -> tq, cp
%cp -> tp, tq
%sx -> qc, pf
&zf -> rg
%jz -> kx, pt
%dt -> tg, tq
%xv -> rj
%vz -> rj, xv
%vn -> vv, tq
%hl -> xt
%qc -> pf
%br -> jz
broadcaster -> sr, cg, dt, zs
%sk -> kx, qr
%xq -> dj
&vg -> rg
%zd -> pf, lc
%hr -> pm
%cg -> qx, rj
%tx -> vz, rj
%qf -> sb
&rj -> gs, sb, qx, qf, gz, hl, cg
%rb -> lz
%ml -> pf, xq
%bj -> jd
&gs -> rg
%sr -> pf, zd
%sb -> gj
&tq -> tp, rb, dt, kd, zt
%tp -> dm
%vv -> tq
%pm -> tr
%dj -> pf, sx
%lz -> vn, tq
%jd -> lx
%qn -> tq, rb
%zs -> kx, bj
&rg -> rx
%pt -> cb, kx
%xt -> ns, rj
%gz -> hl
%zt -> qn
%jm -> kx
%vp -> br, kx
&pf -> tr, hr, zf, sr, xq, pm, lc
%gp -> tq, zt
%dm -> tq, gp
%lx -> kx, vp
%ns -> qf, rj
%cb -> sk, kx
`;

interface CommandFlipFlop {
    com: "%",
    is_on: boolean,
    to: string[]
};

interface CommandConjunction {
    com: "&",
    inputs: Map<string, boolean>,
    to: string[]
};


type Command = CommandFlipFlop | CommandConjunction;

function main(input: string) {
    const lines = input.split("\n").map(t => t.trim()).filter((t) => t);
    let sum = 0;

    const commands = new Map<string, Command>();
    const outs: { from: string, to: string, is_low: boolean }[] = [];
    for (const line of lines) {
        const from = line.split(" -> ")[0];
        const to = line.split(" -> ")[1].split(", ");
        if (from[0] === "%") {
            commands.set(from.substring(1), {
                com: "%",
                to: to,
                is_on: false
            });
        } else if (from[0] === "&") {
            commands.set(from.substring(1), {
                com: "&",
                to: to,
                inputs: new Map()
            });
        } else {
            outs.push(...to.map(t => ({ from: "broadcaster", to: t, is_low: true })));
        }
    }

    while (outs.length) {
        const next = outs.pop();
        const command = commands.get(next.to);
        if (command) {
            // off 
            // on high dont change state
            // on low change from on-off and back
            if (command.com === "%") {
                let nextLow = false;
                if (next.is_low) {
                    nextLow = command.is_on;
                    command.is_on = !command.is_on;
                    outs.push(...command.to.map(t => ({ from: next.to, to: t, is_low: nextLow })));
                } else {
                    if (command.is_on) {
                        outs.push(...command.to.map(t => ({ from: next.to, to: t, is_low: next.is_low })));
                    }
                }

            }
            // if it all high pulses => low pulse; otherwise high pulse
            if (command.com === "&") {
                command.inputs.set()
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
