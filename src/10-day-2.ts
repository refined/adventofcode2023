import { isCharNumber, getNumberLeftAndRight, Index } from './utils'

export { };

const test = `
..........
.S------7.
.|F----7|.
.||OOOO||.
.||OOOO||.
.|L-7F-J|.
.|II||II|.
.L--JL--J.
..........
`;

const test1 = `
FF7FSF7F7F7F7F7F---7
L|LJ||||||||||||F--J
FL-7LJLJ||||||LJL-77
F--JF--7||LJLJ7F7FJ-
L---JF-JLJ.||-FJLJJ7
|F|F-JF---7F7-L7L|7|
|FFJF7L7F-JF7|JL---7
7-L-JL7||F7|L7F-7F7|
L.L7LFJ|||||FJL7||LJ
L7JLJL-JLJLJL--JLJ.L
`;

const test2 = `
.F----7F7F7F7F-7....
.|F--7||||||||FJ....
.||.FJ||||||||L7....
FJL7L7LJLJ||LJ.L-7..
L--J.L7...LJS7F-7L7.
....F-J..F7FJ|L7L7L7
....L7.F7||L7|.L7L7|
.....|FJLJ|FJ|F7|.LJ
....FJL-7.||.||||...
....L---J.LJ.LJLJ...
`;

const task = `
F7.-.|.-F777F7.7-|F-7-7J.-J-7-JFFFJ-F--7FJ-|7F-JF|-F.|F-7-F7-L-.FF-|7.--FL-L7-J-FJF-F7F--77..F|.F--7F777|-JJ7FJF---J-L7L-F-LJ7F.|F7JJ-777.-|
7F||LF7F7L-J7||.|.JL-7LFFJFF7.LFF7|.J7F7JJ|L-JFJFJF--FF7L|.-.|-FJL7|-FJ.-F7J.FJ|LJF.L|J|F-L7.F|FL-7LJ|7FL7|.|-LJ7JJL--FJL77JJLL7.F||7|L|-7JJ
F-J|L|F7|7JLFF7-L-J7.JFJJ.|LJ7||JJF7|J|J-F-7-F7-|FF-FJ||7.|F-L-7-.L.LJJ77LL-7J.|JJL7.|7FF-||||F---JF7L-7J--FJFJ.L7-FJ7L77JLJ.|LLF7.-|-7LL777
7JF--|.JJF-7.7-7FLF--J||F|.|LF7LJF7LJ.|L.F-FFFL.-|7-||LLJ777LLLLJF77F|-FL|-|L--FJF-F7L-JLFL--LL----J|F-JJ-|F-7L-7|.LF-7F|7-FLL-F|JFL|.|J.|--
|.|77|.|LJ7F.|-L--7J|F|FF7.F7||-77F77-LJ7|-J-JJ7|L|LJ7LJ|.L77J|F-FJ|L7-J|......|F|7LJJ.FL-7FJ.L|-F7FJL--7F7J.|FLL77F--J--|FF-|F7|F|-|L77F7|7
F7|L-|F|7L-|FJ7-JFJ|L--JJFJJF|7-J|J|-FJF777LL7FF7J|.||-LL.F-7F77J|7F.|.FFL7--L|J|LF7|.FF7LF|F-.LFJLJF7F7|||F77F.L|7|FF|7-LLFJLL-JJJ.JJF77L77
J-||-LJ-|..L-|LFLJ.FFFJFLJJFL||L-JF|7F7||||.LF7.|.|F|JJ|LFL7||L7FJFFJ|-LL-JF|7|L-7L---F-JJ.L7L7-L--7|LJ||||-JF77F-J77FF-7-|J.7FL7|.7--J.L|L7
|7|777LL|-L-7L-J7LFJ-JJL77.-7L|77F||-||||F77LF-7J-LJL-F7FF7|||FJ7.F77FF|J.L-F-|LF--J..|-LFF|F7LF---JL7|LJ|||FJ|F7|FF-7.L77J7.-L-LL7|.|-JJFJJ
L7J.|J|7L-J|F7LL7.FJ7|..F77|JJ||F7F-7||||||F7L7L7.|7|7||FJ|||||.F7|L-7JJL7FLJ7LFFJ.|FF7.|FF7JF7L----7|F7FJL7L7|||F7|FJ7.F7JF7JL-JLJ--F7JF.|J
FJ.F|L-L|.FLJJL|F.||7L-J|LJ|||F7||L7||LJ|||||-L7L7F---J|L7||||L7|LJF-JJ-F|JL|7|LLF7-FJL7F-J|FJ|F-7F-JLJLJF-JFJ|||||||F7F||.JJFJF--7J.LJF---.
|LJJ..LFL77LJ|-7-7-F|.|FF7-F7F|LJL7||L7FJ|||||LL7|L7F--JL|||LJFJL7FJF7JJF77-F7--FJFFJF-JL-7||FJL7|L---7F7L77L7||||LJLJL-J|J--|-|7LF.|.7JFFJF
J||.---FJ|FJ7FJJL|7J|FLFF7||L7|F7FJ|L7||-|||L-7FJL7|L7F7FJLJF-JF-JL7||F7||F7||L|F-FL7|F7F7||||F7||7F--J|L-JF-JLJ||F------J|JLJ.|F7|F-FLF-7.|
F-|7.|.|FJJFF|.F|JL-F7JFJ|FJFJLJ||FL7||L7||L-7||F-J|FJ||L--7L-7L7F7LJ|||||||||--|7F7|||||||||||LJL7L--7L-7-L---7LJ|F--7F7-|J-J.FJFJLLL-JL|7|
J.LL7FFFLJFLLFJ7|F7L||.L7|L7|F7FJL7FJ||FJ|L--J||L-7||FJL7F-JF-J7LJL-7|||||||||7.F7|||||||||||LJF7FJF7L|F-JF---7|F-J|F-J||7JJ.LFJJ|JJLL7J-7.7
L-LJF7F.|7.||JL--.F7||F7|L-J|||L-7|L7LJL7|F---J|F-J|LJF-JL7FJ|F-----J||||LJ||L-7|LJLJ||||||LJF-JLJFJL-JL-7L--7LJ|-FJL-7|L777L.JJJ||F.|.L7L-J
.FJ|L|.F-JF7-F-J|F|LJLJ|L7F7LJ|FFJL7L7F-J|L--7FJL7FJF7L7F7||F7L---7F7LJ||F7LJF-JL---7|||||L7FJF7F7L7F-7F-JF-7L-7|FJF7FJL7|J7JF..FJ7F-FJ7|FJJ
7..|.JF-7.7JLF||LFJF7F7L-J||F7L7L7FJFJ|F-JF-7|L-7|L7|L-J|LJLJ|F--7LJL-7|||L7FJF7FF7FJ||LJL-JL-JLJL7LJFJL--JFJFFJLJFJLJ7FJL-7JJF|-FL|LF-|J7J|
L77L|.F|L-L--J.L7L-J|||F7FJ||L7L-JL7L7LJF-J7LJF7||FJL-77L7F--JL-7L7LF-JLJL7LJFJL7|LJFJL-----7F---7|F7L7F---J7FJF7FJF7F7|F--J.F7LFL7L77..L7F|
--7F|FLJ|F7||FF7L7-FJ|LJLJ7LJFL---7|F|F-JF7F--JLJ||F--JF7|L-7F--JFJFJF-7F7|F7|F-JL-7|F7F----JL--7LJ||FJ|F7FF7|FJLJ7|LJ||L7F7FJ|7-7|LLJ|JFLJ|
|F7JL7-LF--L77.JJFFL-J.F-7F-7F7F--JL-J|F7||L--7F-J|L7F7|||F-JL--7L7L7L7|||||LJL7J|FJ|||L----7F--JF-J|L7LJL-JLJL7FF7L-7LJFJ|LJFJ.L|-7.F||FFJ|
FL-JL|7LJ7|L-|.FF-7.LL-|FJL7|||L---7F-J|LJL7F-JL7FJFJ|||LJ|F77F-JFJJ|FJLJLJL--7L7FJFJ||F7F--JL--7L-7L-JF---7F--JFJ|JFJF7L7|F-J..|LL.F7L-J|L-
FLJ7.FJ7|-F-J|F-L7L77LFJ|F-JLJL7F--JL--JF--JL--7|L7L7|||F7||L7|F7L7FJL--7F---7|FJL7|J||||L--7F-7L7JL--7L--7LJ.F-JFJFJFJL-J|L--77L7.FFJ|FLJFJ
.LFJF|-F7FL-7|7L||FJF7L7|L----7|L---7F--JF-7F-7||FJFJ||||LJ|FJLJL7LJF---JL--7LJ|F7||FJ||L-7FJ|LL7L--7L|F--JJF7|F-J|L7L--7FJF--J7-LJ7J|FL7F7|
FF7|L-7|LJ7L7J|7FJL7||FJ|F7-F7||F7F-JL-7FJFJL7LJLJFJFJ|||F7||F7F7L-7L--7F7F-JF7||||||FJ|F-JL7L7FL-7FJFJ|F7.FJ|||F-7FJF--J|FJF--7JJL-J7|-LJL|
||LFJLLF7LF-F--7|F7LJ|L7LJ|FJ|||||L-7F-J|FJF7L---7|7L7||LJ|||||||F-JF--J||L--J|||LJLJ|F||F--JFJF7FLJ.L7|||FJFJ|||FJL7L--7|L-JF-J.FJL|LFF--7J
|J-L7.LLLFF7|F-JLJL-7L7L-7|L7LJ|||F7||-FJ|FJ|LF7FJ|F-JLJF-J|LJLJ|L-7|F7.||-F--J|L---7|FJ||F7FJF||F-7F-J|||L7L-JLJL-7|F--J|F--J7L7LJ.L.JL--7|
7J-|7|.LLFJLJ|7F7.F7L7|F7|L7L-7LJLJ||L7|FJ|FJFJ||FJL-7F-JF7L---7|F7|LJL-JL7L--7L7F7FJLJFJLJ|L-7|LJFJL-7LJ|J|F7F--7FJ|L---JL-7F77.||F|..|J.LL
LJFFFLJ-FL--7L-JL-JL-J||||FJF7L---7||FJ|L7|L7|FJ|L---J|F7|L7F-7|LJLJF-7F--JF7LL7LJLJF--JF7FJF7|L7FJF-7L-7L7||LJF7||FJF---7F7LJL7-L--|7|7--.J
F7-777L-LLF7L------7F7|||||FJL7F--J||L7|FJL7LJ|FJF----J|LJFJL7|L7F-7||LJJF7||F7|F--7L-7||||FJLJFJL7L7|F7L7||L-7||LJL7|.F7LJL---J..|JLJ---J|J
-J7L|F7F|J|L7JF--7LLJ|LJLJ|L-7|L--7||FJ|L7FJF-JL7|LF7F7|F-JJFJ|FJL7LJF7F7||||||LJF-JF-JFJ||L--7L-7L7|||L7|LJF-J|L7F7|L-JL-----7F7FF-77J.J-|.
.-J7FJLLJFL7L7L-7|F77L7F-7L-7|L7F-J||L7L7|L7L7F-JL-J||LJL--7L7|L7FJF7|||||LJ||L7FJF-JF7L7LJF--JF7L7|||L7LJF-JJFJFJ|LJF7F------J|L-JFJ77-JLFF
F7LL7-LJ.F-JFJF-J||L7-LJ7L7FJL7||F7LJFJFJ|FJFJL---7FJ|F--7FJFJ|FJL-J||LJ|L7FJ|FJL7L7|||LL7FJF7FJL-J|||FJF7|LF7L7L7|F7|LJJF-----JF7FJJLFJ.F|.
7J.L|.|.L|F7L7L-7LJFJF--7FJ|F-J|LJL-7L7L7|L7|F7F-7|L7LJF-JL7L7|L7F7FJ|F-JFJL7||F7|FJFJL7FJ|FJ|L---7||LJFJLJFJL7L7|||LJF--JF7F---JLJF7JL--F|7
J7L-J-7|LLJL7|F7|F7L7L-7|L7|L-7L7F--JFJFJ|FJ||||FJL7L7.L--7|FJ|FJ|LJFJL-7L-7|||||||FJF-JL7||FJF7F-J|L-7|F7F|F-JFJLJL7-|F--JLJF--7F7-|7.FL7.J
FF-FJL7JJF--JLJ||||FJF-J|FJ|F7L7||F-7|FL7|L7|||||F7|FJF7F7||L7||FJF7L7F-JF7||||||||L7|7F7||||F||L7FJF7|||L7|L7FJF--7L-JL-----JF7LJL-7----77.
L-7.--||FL--7F7|LJ|L7L-7|L7|||FJ|LJFJL--J|FJ||||||||L7||||||FJ||L7||FJL7FJ||||||||L7||FJ||LJ|FJ|FJL7|||||FJL7||FJF7L7F7F-7F-7FJL7F7FJ-L-J|--
FJLJFF--7F-7LJ||F7|FJF7||||LJ|L7|F7L---7FJ|FJ|||LJ||FJ|||||||FJL7|||L7FJ|-|||||||L7||||FJ|F-JL7||LFJ|||||L-7|LJL-J|LLJ|L7||JLJ-FLJLJJJJ-FJ.|
7JF.LL7FJL7L--JLJLJL-JLJL-JF7L7|LJ|F---JL-JL7||L-7||L7||||||||F7||||FJL7L7||||LJ|FJ||LJ|FJL-7FJ|L7L-J||||F7LJF-7F7L--7L-JLJF--7F-7J|.|7|||FJ
LL|J.|||J7L7F-7F-----7F7F7FJL7|L-7|L------7J||L7FJ|L7||LJ|||||||||||L-7L7|||||F-JL7|L-7||F--JL7L7|F--J||||L-7L7||L-7FJF--7FJF-J|FJ7L--F7F-7|
--FJFFJL7F7LJLLJF77F-J|||||F-JL--JL-7F7F7FJFJL7LJFJFJ||F-J|||||||||L--J-||||||L7F-J|F-JLJL---7L7LJL--7|LJL-7|FJ|L-7|L7|F-JL7|F-JL-77J.L|7FL-
LFL7-L-7|||F7FF-JL-JF7|LJLJL7F7F7F-7||LJ||FJF7L7LL7L7||L7FJ|||||||L7FF7FJ|||||FJL-7|L7.F7F7F-JFJF----J|F---J|L7L--JL-J||.F7|LJF7F-JJLFL|-7LJ
LLJ|.|L||||||FJF----J|L7F---J|||||L||L-7||L7|L7L-7|FJ||FJ|FJ|LJ||L7L-J|L7|||LJL-7FJL7L7|LJLJF7L7L-7F-7|L---7L7L-7F7F7FJL7|||F-J|L7F7.7-7-L..
FL-LFF-JLJLJLJFJLF---JFJL--7FJ||||FJ|F7|LJFJL7L7FJ|L7|||FJ|FJF-JL7|F-7L7LJ|L--7FJL7F|FJL7F-7|L7L-7LJFJ|F---JJL-7LJ|||L7FJ|LJL-7L-J||F7.F7LL|
FLFJLL--7F7F7FJF-JF-7FJF--7LJ-LJLJL7LJLJF7|F-JJ|L7L7|LJ||FJL7L7F7|LJ|L7|F-JF--JL-7L7|L-7LJJ||.L--JF7L-J|F--7F-7L--J|L-JL-JF7F7L7F-JLJ|.L-7FJ
F.L7|.|LLJLJLJLL--JFJ|-L-7L--7|F7F7L---7||LJF--JFJL||F-J|L7FJFJ||L-7F7|||F7L----7|FJL--J.F-J|F----JL-7.LJF-JL7L----JF7F7F-JLJL7LJF-7FJ-JJ|F|
-.L|77J7F--------7|L-JF7LL--7L7|LJL----J||F7L--7|F7LJL-7L7LJ-L7||F-J|LJ||||F-7F7||L----7FJF7|L7F----7L7F-J|F7|F---7FJLJ|L----7|F-JL||J7F|F--
L-F7J-JFL-------7L----J|F--7L7|L--------JLJL7F-JLJL-7F-JFJF7F7|||L-7L7FJ||||FJ||||F-7F7|L7|LJFJ|F---JFJL---JLJL7F7LJF7FJF----J|L7J7LJ|.|-|-|
LJ||-JJL|F------JF7F-7FJL7FJJ|L7F-----7F7F-7||F7F---J|F7|FJ|||||L-7L7|L7||||L7|||||FLJ|L7||F7L-JL---7|LF----7F7LJ|F7||L-JF---7|FJ-F7||7J.-FJ
F|L-7.FF7L--7F--7|LJFJL7J||LFJFJL----7LJLJLLJ|||L---7LJ||L7LJLJL-7L-J|FJ||LJFJ||||L-7||FJLJ||LF-----JL7L---7LJL--J||||F7FJF7FJ|L-77-7LL7L..F
L|J||L-LF---J|F7LJ-FJF7L-JL7L7|F7F--7L---7F--J||F7F-JF-J|-L---7F-JF-7||FJL7FL7||||F7L7LJF7FJL-JF-7F7F7L----JJF7JF7|LJLJLJFJ|L7L--JJF7-||-|7L
L|-|-JJ|L-7F7||L---JFJL7F-7L-JLJ|L-7|F---JL7F7||||L-7|F7L7.F--JL-7|FJLJ|F7L-7LJ|||||FJFFJ|L--7FJ.LJ|||F7F----JL7|LJF-----JFL-JJF7LF-7-LL7.JJ
FJLF7|-|JL|||||F--7FJ-F||-L--7F7L--J|L7F--7LJLJ|||F7||||FJFJF-7F7LJL--7|||F7|F-J|LJ||F7L7|.F-J|F7F-J|||LJF----7||F7L----7F7FF--JL7L7|J7L-7L7
FJF.LJFJLFJ|LJLJF7LJ||FJ|F---J||F--7L-J|F-J|F-7||||LJ||LJ7L7|FJ||F-7F-J||||LJL7FJF-JLJ|FJL-JF-J||L7FJLJFFJF--7LJ||L--7F7LJL7L7F--J-||.|-.L7J
|-F-|||.FL7|F-7||L7FF-JFJL7F--JLJF-JLF7|L---JFJLJ|L-7|L7LF7LJ|FJ|L7|L7LLJ|||F-J|FJF7F7||F---J7FJL-J|F7F7L-JF7L--JL-7-LJ|F-7L-JL7F--JL-7J7|L7
|.|LFF|7FLLJL7L7L7L7L--JF-J|F----JF--JLJF----J|F7|F7|L7L7|L--JL7|FJL7L--7LJ-L-7||FJ||||||F----JF7F7||LJL--7||F--7F7L--7|L7L---7LJF----J.F-JF
F-|FFJF-L7F||L7L-JFJF--7L--JL7F---JF-7F-JF7F7F-J|LJLJ||FJL---7FJ|L7.|F--JJ|JFFJ|LJFJ|LJLJL-----JLJLJL----7|||L7|LJL-7FJL7L---7|F-JJ7LLJ-JF-7
F7|J..J.F7J|FFJF-7L-JF7L--7J|LJF7F7L7|L--JLJLJF-JF--7FJL7LF--JL7L7|FJL-7F-7-FJFJF7L7|7||.F---------------JLJL7L-7LF7LJJJL----JLJF--7-|7.L7J.
L|L||-LF-.|FFL7|FJF7FJ|F-7L7F--JLJL-JL-------7L--JF7|L-7L7|F-7FJJ||L7F7LJFJ-|FJFJL-JL7JJ7L--7F---------7F---7|F-JFJL7JLF7FF---7FJF7|FF-7FLL7
LJ.FJF7JL|-F77LJL-JLJLLJLL7|L---------------7L7F7FJ|||FJFJ|L7|L7-LJFJ||F-JLLLJJL-7F7FJJ|F7F7LJF7F7JF--7LJF7FJLJF-JF7L7FJL-JF-7LJFJ||-J7L|.||
FLF-7LL--F-JL-------------J|F7F-------------JJLJ|L7|L7L7|J|FJL7L--7|FJ|L777|-L7F|LJ||LF-JLJL--JLJL7L-7L--JLJF7F|F-J|FJ|F---JJL--J.LJJF7.J-J-
|J|L||FJ.L-7F--------7F-7F7LJ|L-------7F----7F-7L-JL7|-||FJ||L|F7FJLJFL-J7-L.F|L-F-JL7L---------7FJF7L----7J|L-JL-7|L-J|F-------7F7-|L|-L7.J
777LL7-F-JFJ|F7F-----JL7LJL-7L--------J|F---J|FJF7F7LJFJ|L7L7FJ||L7..7|L|L7--J7.F|F-7|-F7F-7F---JL-JL7F---JFJF7F-7||F-7||F--7F--J||F7L7-F..|
LL7-F|.L-LL-J||L-------JF--7|F---7F7F7FJL7F--JL-JLJL77L-J.|FJL7||FJ..F7L|7LF-LF--LJ-LJFJ|L7|L-----7F7LJF---JFJ|L7LJ||FJLJL-7LJF--JL-77|-LFF|
FF7F7J||||.F-JL---7F7F7FL-7LJ|F--J|LJLJF-J|F-7F7F--7L-7F-7LJLFJ|||J.F|-7J|.77-LJ||J-LFJFJF|||F7JF-J||F-JF---J|L-JF7LJL----7L7JL7F---J-J.LF77
F-J||F-J7L-L-7F7F7LJLJL---JF7|L---JF7F-JF7|L7LJLJF7L-7||FJ||FL7|LJJ.LJLJJ7FLJ77L|JJFFL7L7FJL-JL-JF7|LJF7L--------JL-----7-L-JF7|||F-7JJ-F-7L
FJ-7|J-LF-7|FLJLJL7F7F7F7F7|LJF----JLJF-JLJFJF7F7|L7LLJ|L-7J|-||-JL7-FFJFLJ|.FJ7JJF7J-L7LJF-7F-7FJ||F-JL--7F7F-------7F7L----JLJL-JFJJJFLLL|
F||LJJ|LL-|7F-----J|LJLJLJLJF7L7F---77|F---JFJLJLJFJF7F|F-J-|-||-LLL7JL77|.-L--LFF--7F7L--JJLJLLJFJ|L-7F-7LJLJF7F---7LJ|F7F7F------JJJ.|7-L|
.L|JJFL7|F-FL---7F7|F-7F7F--JL-J|F--JFJL7F77L7F--7|FJL7||F7J.LLJ--7||-7L-7-|.J.LLL-7LJL--7LF-7FF7L7|F7LJ-L----JLJF--JF-J|LJ|L---7F7F7.F|JLFJ
LLL.|LJ-L-FF7FF7LJLJL7||LJF--7F-JL---JF-J|L7FJL7.LJ|F-J|LJL7-7FLJ7|-|.L-||-JFL|LL|LL-7F-7L-JFJFJL7LJ||F7F----7F--JLF7L-7L-7|F-7FJ|LJL7L|FL7J
F|7FL-FF7L-|L-J|7F-7FJLJF7|F7LJ7F-----JF7|FJ|F-JF7FJL--JF7FJ.FF-J|FF-7F-7J||7JLF-F---JL7L--7L7L-7|F7|LJ|L-7F7LJLF--JL-7|F7|||FJL-JF7FJ.F-JJ|
L|-7..F-|7FL--7L7L7|L---JLJ||F--JF-----JLJL-JL-7|||F----JLJ|7FFJ7FF-L7JFL.FL.F7LLL--7F-JF--JFJF7||||L-7L7FJ|L7F7L7F---JLJLJ|||F7F-JLJL|.L-77
L|.FJ-L.|JFF7JL7L-J|F--7F7FJ|L---JF------7F----J|||L---7F----7|F7J-L-JF--F.L--F-----JL-7L--7L-J||LJ|F7L7|L-JFJ|L-JL----7F7LLJLJ|L--7JF|FFJLJ
||LLJ-LFF7F||F7L--7|L-7LJ|L7|FF7F7L77F7F7LJ7F7F7||L7F-7LJF---JF-7J7.|L|7L7F-7LL--7F----JJF7|F-7|L-7LJL7|L---JFJF7F7F---S||F7F-7L7F-J.FJJ|J..
--|L7-F7||FJ||L-7FJ|F7L-7L-J|FJLJL7L7|||L---JLJ||L-JL7L--JFF7||FJ-FF7.LF7|7.-JJ.L||F-----J|LJFJ|F7L--7|L-----JFJ|||L---7|||||FJJ|L--7L||-FJ7
L-7FLFJLJ||FJL-7|L7|||F7|F-7LJF--7L-J|||F-----7LJF7F7L-7F7FJL7||-F7||-LL|-FFJJLF-LJL-7F--7L-7L7|||LF-JL-------JFLJ|F7F7||||||L-7|F--J-|J|JF-
F|L-JL7F7LJL-7FJL-JLJLJLJL7L7FJF7L---JLJL----7L7FJ|||F-J||L-7LJL7|LJL7-LFJ.7JJ.L.F7F7LJF7L-7|J|LJL-JF-------7F7F7FLJLJLJ|LJLJF-J||J|J7LL|FJ7
|-7LF-|||F--7LJF7F7F7F7F--JFLJFJL------------JJLJFJ||L--JL--JF7FJL7F-J-7|-F7-F7LF|LJ|F-JL-7|L-JF7F7FJF7F---7LJLJL----7F7|F7F7L-7LJ-|7LF7JF7|
.FJ7L7||LJF-JF7|LJ||LJ||F-7F7FJF7F--------------7L-JL7F---7F-JLJ-FJL7J7FJJ||.J7.LL-7LJF--7LJF7FJ||||FJLJF77L7F7F7F-7FJ||||LJ|F7|JFLJF|JL7|77
F-FJLLLJF-JF7|||F-J|F7LJL7|||L7|LJF----7F-------JF--7|L--7LJF-7F7L7FJ-|LJ-|L7-FF-7-L7FJFFJF7|||FJ|LJL7F7||F7LJLJ|L7|L-JLJL-7||LJJLF7-|7.JJF7
J7FJ7JF-JF7|LJLJL--J||F7FJLJL7LJF7L---7||F-----7FJF7|L7F7L--JFJ|L-JL-7F77FJFJF7L7|.L||F-JFJ|||||FJLF-J|||LJL---7L-J|F-7F-7FJ|L7J7-L7.L--|J||
LF7--FL-7|||F-7F7F--JLJLJF7F7L--JL--7FJ|LJF7F-7LJFJ|L7LJ|F-7FJ|L-7F--J||FJFJ-||FJL7|LJL-7L7LJLJLJF7L-7|LJF7F---J-F7LJL|L7LJ|L-JJ||J.-|-LJL-.
LLJ-JLL|LJLJL7LJ|L---7F7FJLJL7F--7F7LJJL--JLJLL7FJFL7L-7LJL||F7LFJ||F7|LJFJF7|LJF-JF7F--JFJLF----J|F7||F-JLJF7F7FJL--7L7L7F7F7.LF|LJ|.|||-LF
--LJ|.-F-7F7FL-7L--7LLJLJFF-7||F-J|L7F--7F----7|L--7|F-JFF7LJ||FJFJFJ|L-7|FJ||F-J-FJ|L--7|F-JF---7|||LJL----JLJLJF7F7L7L7LJLJ|7-7L7.-FJ-|.F-
.LJ.|.LL7LJL---JF-7L-----7L7|LJL--JFJ|F-J|F7F7|L-7FJLJF7FJ|F7||L7L7L7L7-||L7||L7JLL7|F7JLJL--JF7FJ|||-F7F------7FJLJ|FJLL7F-7L7.|LJ-|JF7JF-7
7.FJ.7JL|F-7F-7FJLL-----7L-JL7|F--7L-JL7L||LJLJF7LJLF7|||FJ||||F|FJFJFJFJ|FJ|L7L7F7|||L77F7F7F||L7LJL7||L-----7LJF-7|L-7FJL7|FJ7||F7|FJ|7J-L
LFJ.LLJ.LJF||FJL7F------JF--7L7L-7|F7F7L-JL7|F-JL--7||||||FJ||L7|L7L7L7L7|L7|FJFJ||||L7|FJLJL-J|JL7F7LJL------JF7|FJL-7||F-JLJF7F77L||LJ7F7.
-JL|FJF-F-7LJL--JL--7F--7|F7L7L-7|LJLJL7F-7L7L-7F--J|LJ|||L7||FJ|FJFJFJFJ|FJ|L7L7||||FJ|L-7F7F7|F7LJL---------7|LJL--7LJLJLF77||-LF7F7.L7-F7
FFFL|.J.L7|F7F7F7F-7LJF7LJ|L7L-7|L----7||FJFJF7||F-7|F-J|L7|||L7|L7L7L7L7||FJFJFJ||||L7L-7LJLJ||||F7F--------7LJF-7F-JF7F-7|L7||-F|LJL7.JF|7
FFL-77.FFJLJ||LJ||FJF-JL--JFJF7||F---7|||L7L-J|||L7LJL-7L7LJ||FJ|FJ7L7|L|||L-JFJJ|LJL7|F-JF---JLJLJLJF-7F7F-7L7FJFLJF-J|L7||FJ||F7|F--J7L-77
FLJ-|7-FJF-7|L-7LJL7L-----7|FJLJ|L--7LJ|L7L7F-J||FJF7F-JFL-7||L7|L7F7||FJ||F--JF7L--7|||F7L----------J|LJLJFJ|LJF7F7L-7L-J||L-JLJLJL7J.--LF-
|-|7|L-L-J-||F7L-7FJF-7F--JLJF-7L---JF7L-JFJL--JLJFJLJF7F-7|||FJ|FJ|LJ|L7|||F--J|F-7|LJLJL7F-----7F--------JLF--J|||F-JF--JL7F------J77J-|FJ
7.-7|-L||F-JLJ|F-JL7L7|L--7F7L7L7F---JL7F7L--7F-7FJF7L|LJFJ|LJL7|L7L-7|FJ||LJF--JL7||F---7|L----7LJF7F-------JF--J||L7FJF7F7||F-------7---|.
LJ7|J7.LLL-7F7LJF-7L-JL---J|L7|FJ|F----J||F-7||FJL7|L7L-7L7|F-7||FJJFJ||FJL7FJ.F-7|||L7F7LJF7F77L--J||F-------JF7|||FJL-JLJ||||F-7F---J--||F
|LL|J7F7.F-J||F-J7L-------7L7LJL-JL-----JLJFJLJL--J|FJF7|FJ|L7LJ|||FJFJ|L7FJ|F7L7|||L7||L7FJLJ|F7F7FJ|L7F7F----J|FJ||F-----J|LJL7LJ.L|LFFJ77
F7|LFL7L-L-7|LJF----------JFJF--7F-------7FJF-7F-7FJL7|||L-JFJF-J|FJFJFJFJL7|||FJ||L7|||FJ|F--J|LJLJFJ-LJLJF----J|FJ|L----7L|F--JJF7L7.F7.|.
7L7-FF-JJLJ||F-JF-7F7F7F7F7L7L-7|L------7LJ7|FJ|FJL7FJ|LJF-7L7L7FJ|FJFJFJ|FJLJ||FJL7||||L-JL7F7L----JF-7F-7|F7F7FJ|||F----JFJ|F7F7|L--7|J.|J
|.L7FJ.F777LJL--J.LJ||||LJL7|F-J|-F-----JF7FJ|FJL7FJL7L-7L7L-JFJL-JL7|FJF7|F--J|L7FJLJ|L-7F-J||JF7F7LL7|L7LJ|||LJFJFJL-77F7L7||LJLJF--J7.FJJ
F7||L-J-L--F-----7F7LJLJF7JLJ|F7L7L---7F-J||FJL-7|L7FJ7FJFJF-7|F--7FJ|L7||||LF7|FJL--7L7|||F-J|FJ|||F-JL-JF-JLJF7|FJF--JFJL-JLJF-7FJF---7LF7
L--7FL|7.|FL--7F7LJL7F7FJL-7FJ|L7L--7FJL7FJ||LF7||F|L7FJFJFJFJLJF7||FJFJ|||L7|LJL7|F7|FJFJLJF-JL7|||L--7F-JF7F7|LJL7L7F7|F----7L7|L-JF-7|LLJ
L|F7JL7-F-7J||LJ|F-7LJLJF7FJL-JFL7F7|L7J||FJL7|LJ|FJFJL7L7L7||F-JLJLJFJFJ||FJ|F--JFJ||L-JF7FJF7FJLJL7F7LJF-JLJ||F7-L7LJLJL---7|FJ|F-7||LJ-LF
FF-7L-JLL7|F7F7FJ|L|F---J||F--7F7LJ|L-JFJ||F-JL-7|L7L7||FJFJL7L----7FJFJFJ||FJL7F7L7|L7F-JLJFJ|L-7F-J|L--JF-7FLJ|L7FJF7F7F--7||L7|L7|L7JJ7-J
F|JL7J|-FJLJ|||L-JFJ|F-7FJLJF7LJL-7L7F7|FJ||F7FFJL7L7|FJ|FJF-JF-7F-J|LL7|FJ||F-J||FJ|FJ|F-77L7L7FJL-7|F---JFJF7-|FJL7|LJ|L7FLJL-JL-JL-J.|.|.
LL77-F7.|F-7LJL7F7L-JL7LJF-7||F7F7L-J|LJL7|||L7L-7|L|||FJ|FJ-FJFJL7FJF7||L7LJL-7||L7||FJ|FJF7|FJL-7FJLJF---JFJL-JL--JL-7L-JF7FF7F7F7F7F7LFLJ
.FL.FJJ-LJJL7F7LJL7|F7|F7L7||LJLJL--7|F7FJ|||FJF-JL7|||L7||F7L7|F7|L7|LJL7L-7F-J|L7||||FJ|FJ|||F-7|L7F7L----JF-7F7F----JF--JL-JLJLJLJLJ|F7|.
-7-LLJJ.|J.L||L--7L-JLJ|L-JLJF7F----JLJ||.|||||L--7||||FJ||||F|||||FJ|F--JF7||F7|FJ|||||FJL7|||L7||FJ||F7F7F7L7LJ|L-----JF7F--7F-7F7F--J|L77
|F7-|JJF|.LLLJ|F7|F7F-7|7F---J||F-7F7F-JL7||||F7F7||||||FJ|||FJ|||||FJ|F-7|||||||L7|||||L7FJLJL7||||FJ||LJLJL7L-7L-7F--7FJ|L-7|L7|||L---JFJ7
JLJ--7FFF.|JF--J|LJ|L7||FJF--7LJ|FJ|||F--J||||||||||||||L7||LJ-||LJLJ-LJ7||||||||FJ|||||FJL--7FJ|LJ||FJL--7F-JF7L-7||F7LJF|F-JL7|LJ|F-7F-JJJ
|..|JL7|LF7FJF-7L--JFJ||L7|F-JF-J|FJLJ|F-7|LJ||||||||LJL7|LJF--JL----7F--J|||LJ||L7|LJLJL7F7FJL7|F-J||F---JL7FJ|F7||LJL--7||LF7||F7LJFJL7.|J
L|J.LFLJJ.FJFJFJF---JFJ|FJ||F7|F-JL-7FJ|FJL7FJ|||LJ||F7FJL7FJF7F7F7F-J|F-7|||F-J|FJL--7.FJ||L7-||L-7||L----7LJ.LJ|||F7F--J|L-J||||||LL-7|7|7
F-F-7|-JFFL7L7L7|F-7.L7|L-J||LJL-7F7|L7|L-7|L7||L-7|||LJF7||FJ||LJ|L-7LJ|||||L-7||F7F7|FJFJ|FJFJL77LJ|F7F-7L-7F7FJ|LJ|L--7|F7FJ|LJL7LLFJ|-L-
F.JFJ||7FFFJFJFLJL7L-7|||F-JL7F--J|LJFJL-7|L7|||F-J||L7FJ||||FJL7FJF7L7F7||||F-J||||||||FJFJL7L7FJF-7LJ|L7|F7LJ|L7L-7|F7FJ||||7L---J77|FJ|||
J7J|LJ7-|JL-JF7F7J|F-JLJFJF7FJL--7|F-JF7FJ|FJ|||L-7LJJ||FLJ||L7FJL7|L7LJ|||LJL7FJ||||||||FJF7|FJL7L7L--JFJ|||F-J-L7FJ||LJJLJ|L7JF-7L|FLJJ-L7
|7.L-7|.LFJ7FJLJL-J|F77FJFJ||F7F-J|L7FJ||||L7LJL7FJ-F-J|F7FJ|FJL7FJL7|F7||L7F7||JLJ||||||L7||||F7L7L7F7FJFJ||L---7|L7||F77F7L-JFJFJ-7FLJ7L||
F7-|JL7-F.|-|F--7F7LJ|FJFJ-LJ|LJF7L7||FJL7|FJF--JL7FJF7LJ|L7||F-J|F7||||||FJ|LJL--7||||||FJ|||||L7|FJ||L7L7|L7F-7||FJ|LJL-J|F--JFJF|JL7FJFL7
|J7LJL|7L-LFLJLFJ|L-7LJFJF--7L--J|FJLJL--J|L7L-7F7|L7||F-JL|||L7FJ|||||||||FJF7F7FJ||||LJL7||||L7||L-JL7L7|L7|L7|||L7L--7F7LJF--J-|JL|7L-JL|
F-J7.FJ-FJLLJF-JFJ-FJF7L7L-7|F7F7|L----77FJFJF-J|||.LJ|L-7FJ||FJ|FJ||LJ||||L7|LJLJJ|||L--7||||L7||L7LF7|FJ|FJ|FJ||L7L--7LJL-7L----7J7.|F7--J
7J.F.|||L--J-L7FJF-JFJL7L7FJLJLJLJF-7F-JFJFJ7L-7|||F--JF7|L-J||J||FJ|F7||||FJL7F---J||F7FJLJ||FJ|L7L7|LJL7LJ-||.LJ||F-7L---7|F----JJF-LL..F|
.FF|FLL777L|7L|L7L-7L-7|FJL----7F7L7|L-7L-JF7F7|||||F7FJ|L-7FJL7LJL7LJ|LJ|||F-JL---7|||LJF-7LJL7L7L7||F7FJF--JL-7F-J|FJF7F-J|L-7J..||F-J77F|
-7.|--.FL--7F-|FJF-JF-JLJ|F7F--J|L7||F7L7F-JLJLJ||||||L7L7FJ|F7|FF-JF-JFFJ|||F----7|||L--JFJ-F-JFJ-LJ|||L7L7F7F7|L-7||FJ|L-7|F-J.|7F-|-|F-FL
.F.J.|F|F|.L--||LL-7|F7F--JLJF7FJFJ||||FJ|F-7F7FJ|||||FJ-LJFJ||L7L-7|F-7|FJ||L7F-7LJ|L7F-7L-7L7FJF7LFJ|L7|FJ|||LJF7||LJFJF7|LJJJ-|F7||7|7-7.
-J.F7--|--7.LJLJ-F-JLJ|L--7F7|LJ-|FJ|||L7||FJ||L7||||LJF--7L7||FJF-JLJFJ|L7||J||F|F7L7|L7L--J||L7||FJFJ7||L7||L7FJLJ|F7L-J||LLJLLL7J7L-JL.F.
|-F-7.LJ|.F||F-LJL-7F-JF--J|||JF-J|||||FJLJL7|L-J|||L--JF-JF||||FJF7F7|-L7|||FJL7||L7|L7L--7F7L-J|LJFJF-JL7||L-JL7F7LJL-7JLJ.L7J.|L||J-F|JJ.
F-JFJ-JFLL7LLJFLF--J|F7L--7|LJFJF7L7|||L7F--JL-7FJ||F-7FJF--J|LJL7||||L-7LJLJL7FJLJF|L7|F-7LJL--7L7FJ|L7F7||L-7||LJ|F-7FJLL-7.JJL--J7--JJ..7
J77|J-J7|.-.|FLJL---J|L---J|F-JFJ|FJ||L7||F-7F-J|FJ|L7LJ-L--7|F--J||||F7L7F7F7||F7F7L7||L7L7F7F-JFJ|F--J||||F7L7F--J|FJL7J|7|F|F|J.FF7||F-FJ
J-|J.||-FJ-FJ--|FLF7F|F7F-7||F7|FJL7|L7LJ||FJ|F-J|7L7L-7F---J|L7F-J||LJL7LJLJ||||LJL-J||FJJ|||L-7L7|L7F-J||LJL7|L-7FJ|F7|LLL7-77L7--J7|-J..|
JF|FJ-7FL7F.F|.77F|L7LJ||J||LJ||L7FJ|FJ.FJ|L-J|F7L-7|F-JL7F-7L7||F-JL--7|F-7FJ||L7F-7FJ||F7LJ|F-JFJL7||F-JL--7LJ7FJ|FJ|LJ7LFJ7L-7|-7LJLF.7.-
LFF|JLJ-JLJ7LLF-F-L7L--JL7|L7.||FJ|-|L-7L-JF--J|L7FJLJJ7L||FJFJLJ|F7F-7|LJL|L7LJ-||FJL7|LJL77|L-7L--JLJL-7F-7L7F-L-J|FJJFJ7LJ|7FF||L-|7|FJL7
F-JL7.|J.F|-.L|.|.L|F7F7FJL7L7||L7|FJF-JJJFJF-7L7|L----7J||L7|F--J|||FJL7JJL7L7JJLJL7FJ|F7FJFJF7||F-7F---JL7L7L7.LL-LJJ|7-|7-LJL7.F|J.L|L-7|
|J.|.7-..|J7L--JLFJ||||LJF-JFJLJFLJL7L--7-L-JLL-JL-7F7FJ-LJ-LJL--7|LJ|F7|F--L-J-FF--JL7||LJ-L7|LJ-L7LJF7F-7|.L-J7JJ|LLFLJL|F-77J.-7F-7-L7J|J
7JFLJ-7FJ--JJJ.|7.-LJ|L7-L-7|JL|77F-JF7FJ7F|7J|.F--J||L77.|.FF7F-J|F7LJ|L7LF|7J|JL-7F-J|L-7J.LJLLJLL-7|LJFJL7JLJJ.LJ-F||F-F|.J7FL.|7F-.|FJL|
|--JJFJ|-L-7|FFF7-FJ.L-JJ.LLJ7-L--|F7|LJ.-J|F-|-|F--JL-JJF7.FJLJF7LJL-7|FJ||JL777.FJL-7L-7|FFJ|JLLF|LLJ|FL-7L7|-FLF-F7.F|7F77FF7J7||7|-L-.F7
-7-|.L--J7-|--LL-7|FFLJF77L|F|-L|F|||L7|.|FFL7LFLJ7JF|LL-LLFL--7|L-7F-JLJJJL7.|JJFL7F-JJLLJJ|LL77LL7F|FL7LF|FJJFL7|-FJL|J-JJLL-LJF7J-FF7L|7.
L|.7-7FJ-J--7LJ-FLJJ-.FJL77.|.FFL-LJ|FJ7-LL7L|FLJJLFJ.|.LF||FJ|LJF-JL--7|.L---L7.LFJL-7..L||7.LL-F7L7J||F--|||FJ7FJ||FFF.LJ-7JJJ.||FFJ.L..F-
F7-|J||F|-7LJ|F-7|77LL--L-F7LL--F7|FJL-7..|F-F-|L|FL7--.F-F7JF-7.L--7F-J-.J-L-|||LL---J7|-|F77.J.LJLL-77|LFLJ7J.--7|JF|LJFF7.LF7L7-7J.LL-F.J
||.L-L-7-F7JLF|L|J-7-L-F.|L-FJ|.LJFL---JJFLF7.7|F-JLF7LFJFJ7.JLJFJJFJ|-J|7..|7JF-7LLJ|FL7.-JJLFL.-JL7|LF7FLJJ|.J.L7J.|.FLL--7||FFJ.J-FJJ-F-J
|LF7F|.L----F-77||.|FL7|.L.||L|JJF7FJJJ|LL7FL7L7|7.-L7-J|L|J-L7|L|7|FJ7FL---|7.L.F.|.F-F-|JLJFF..L7J.|-LF7..FL7JF.L----JLJLL---7L.|.-J|7FLF.
|J||7LJ|.||.L7L--7F-|7LJ.|..|7||-JLJJ-77FLJJ-|J||-7|JJ|L-.L7|F|-J.L||J77F7|F-J.|F--77JLLL|-F--|-|-77LJJ|LFLJJL|LF7|-7F--F|7.LFJ7-|.L7FLL|LJ7
J-F-JJJF7-|7.|.LJ-LJ|LL7LFJ-7-|7FLF|.FFL7.||.J--J-|7.L|7|.FJ-7.|J|F||-J7JL|J7.FFJ|7||-..L|-J7F|LF7-|.-.F-JFFL-|L|-7|.|L77.FF7-7L7LFLJ||J.F-7
.FF.J.F7J.L--LF7J.|.LJ7||L|F7|JJF.|JFLJL|7LL7-||JJL|-7JF--|J7|.FFJ7LJ7|JLFJLJ7L.L-77|L|-.L.|-FL7.FJ.FJF-J.F|-FJ||.FJ-.|.F-L-F.F-F-7.FF|JFL7.
-L|JL--J--J.LLLL7-F7-L-L-JL-JL..L-.L|J.F7-JL|--J---JJJLLL-7--FJLLLFJL-|JJL--LFL7.LLL-7JLLJ-7-J.F-FJ-L-LJJF7JL|JLF7J.L-L--JJ.|.LJ.LJ.-7J.L7-7
`;

const moves = new Map([
    // | is a vertical pipe connecting north and south.
    ["|", {move1: (i,j) => [i-1, j], move2: (i,j) => [i+1, j]}],
    // - is a horizontal pipe connecting east and west.
    ["-", {move1: (i,j) => [i, j-1], move2: (i,j) => [i, j+1]}],
    // L is a 90-degree bend connecting north and east.
    ["L", {move1: (i,j) => [i-1, j], move2: (i,j) => [i, j+1]}],
    // J is a 90-degree bend connecting north and west.
    ["J", {move1: (i,j) => [i-1, j], move2: (i,j) => [i, j-1]}],
    // 7 is a 90-degree bend connecting south and west.
    ["7", {move1: (i,j) => [i, j-1], move2: (i,j) => [i+1, j]}],
    // F is a 90-degree bend connecting south and east.
    ["F", {move1: (i,j) => [i, j+1], move2: (i,j) => [i+1, j]}]
]);

function move(i: number, j: number, field: string[], prev_i: number, prev_j: number): [number, number] {
    const ch = field[i][j];
    const m = moves.get(ch);
    if (!m) {
        console.log(`ERROR ${i} ${j} ${prev_j} ${prev_j}`);
        throw new Error("Should not happen")
    }
    const {move1, move2} = m;
    const next = move1(i, j);
    if (next[0] === prev_i && next[1] === prev_j) {
        return move2(i, j) as [number, number];
    }
    return next as [number, number];
}

function findFirstMove(prev_i: number, prev_j: number, lines: string[]) {
    let i = prev_i;
    let j = prev_j;

    // top
    if (lines[prev_i - 1] && (lines[prev_i - 1][prev_j] === "|" || lines[prev_i - 1][prev_j] === "7" || lines[prev_i - 1][prev_j] === "F")) {
        i = prev_i - 1;
    } else 
    // bottom
    if (lines[prev_i + 1][prev_j] === "|" || lines[prev_i + 1][prev_j] === "L" || lines[prev_i + 1][prev_j] === "J") {
        i = prev_i + 1;
    } else 
    // left
    if (lines[prev_i][prev_j - 1] === "L" || lines[prev_i][prev_j - 1] === "F" || lines[prev_i][prev_j - 1] === "-") {
        j = prev_j - 1;
    }else 
    // left
    if (lines[prev_i][prev_j + 1] === "J" || lines[prev_i][prev_j + 1] === "7" || lines[prev_i][prev_j + 1] === "-") {
        j = prev_j + 1;
    } else {
        throw new Error("Invalid start");
    }
    return [i, j];
}

function findPath(start: [number, number], lines: string[]) {
    let prev_i = start[0];
    let prev_j = start[1];
    const path = [];
    let [i, j] = findFirstMove(prev_i, prev_j, lines);
    path.push([prev_i, prev_j]);
    path.push([i, j]);
    
    while (!(i === start[0] && j === start[1])) {
        const res = move(i, j, lines, prev_i, prev_j);
        prev_i = i;
        prev_j = j;
        i = res[0];
        j = res[1];
        path.push([i, j]);
    }
    return path;
}

function inPath(i: number, j: number, path: Array<[number, number]>): boolean {
    return !path.every(p => !(i === p[0] && j === p[1]));
}

function checkIfNewIntersect(i: number, j: number, lines: string[]): boolean {
    // "F----7" - 2 intersections - if F7 than true
    // "F----J" - 1 intersection - only F will return true
    const current = lines[i][j];
    if (current === "-") return false;
    if (current === "J") {
        j--;
        while(j>=0) {
            if (lines[i][j] === "-") {
                j--;
            } else {
                if (lines[i][j] === "F") {
                    return false;
                }
                return true;
            }
        }
        return true;
    }
    if (current === "7") {
        j--;
        while(j>=0) {
            if (lines[i][j] === "-") {
                j--;
            } else {
                if (lines[i][j] === "L") {
                    return false;
                }
                return true;
            }
        }
        return true;
    }
    return true;
}

function main(input: string) {
    const lines = input.split("\n").map(t => t.trim()).filter((t) => t);

    let start: [number, number] = [0,0];
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        for (let j = 0; j < line.length; j++) {
            if (line[j] === "S") {
                start = [i, j];
                break;
            } 
        }
    }

    const path = findPath(start, lines);
    let counter = 0;
    for (let i = 0; i < lines.length; i++) {
        let pathIntersectCounter = 0;
        let outLine = "";
        for (let j = 0; j < lines[0].length; j++) {
            if (inPath(i, j, path)) {
                if(checkIfNewIntersect(i, j, lines)) {
                    pathIntersectCounter++;
                }
                outLine += lines[i][j];
            } else {
                if (pathIntersectCounter % 2 === 1) {
                    outLine += "X";
                    counter++;
                } else {
                    outLine += ".";
                }
            }
        }
        console.log(outLine);
    }

    console.log(counter);
}

console.log("test");
main(test);
console.log("test1");
main(test1);
console.log("test2");
main(test2);
console.log("task");
main(task);
console.log("done");

// Problem with S sign - so manually extract XXXXXXXX from answer - will be 467
