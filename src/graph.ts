export type Graph = Map<string, Map<string, number>>;
export function connectTwoNodes(graph: Graph, a: string, b: string, len: number) {
    if (!graph.has(a)) graph.set(a, new Map());
    if (!graph.has(b)) graph.set(b, new Map());
    graph.get(a).set(b, len);
    graph.get(b).set(a, len);
}

export function dfsMaxPath(graph: Graph, start: string, end: string, seen: Set<string> = new Set()): number {
    if (start === end) return 0
    let max = -Infinity;
    seen.add(start);
    const queue: string[] = [start];
    for (const [to, len] of graph.get(start).entries()) {
        if (!seen.has(to)) {
            max = Math.max(max, dfsMaxPath(graph, to, end, seen) + len)
        }
    }
    seen.delete(start);
    return max;
}

export function dfsMinPath(graph: Graph, start: string, end: string, seen: Set<string> = new Set()): number {
    if (start === end) return 0
    let min = Infinity;
    seen.add(start);
    const queue: string[] = [start];
    for (const [to, len] of graph.get(start).entries()) {
        if (!seen.has(to)) {
            min = Math.min(min, dfsMaxPath(graph, to, end, seen) + len)
        }
    }
    seen.delete(start);
    return min;
}
