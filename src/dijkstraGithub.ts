import { BinaryHeap } from "./priorityQueue";

export type NodeKey = string | number;

export interface Edge {
    node: string;
    weight: number;
}

interface QueueEntry {
    node: string;
    cost: number;
}

export interface IGraphAdapter {
    getKey?: (node: string) => NodeKey;
    getEdges: (node: string) => Edge[];
}

const getNodeKey = (node: string, adapter: IGraphAdapter): NodeKey => {
    if (typeof adapter.getKey === "function") return adapter.getKey(node);
    if (typeof node === "string" || typeof node === "number") return node;
    throw new Error("Adapter must implement method getKey");
};

export const dijkstra = (
    adapter: IGraphAdapter,
    startNode: string,
    finishNode?: string
) => {
    const getKey = (node: string) => getNodeKey(node, adapter);
    const parents: Record<NodeKey, string> = Object.create(null);
    const costs: Record<NodeKey, number> = Object.create(null);
    const explored: Record<NodeKey, boolean> = Object.create(null);
    const prioQueue = new BinaryHeap<QueueEntry>({ comparator: (a, b) => b.cost - a.cost });
    prioQueue.push({ node: startNode, cost: 0 });

    do {
        let node = prioQueue.pop().node;
        let nodeKey = getKey(node);
        let cost = costs[nodeKey] || 0;

        explored[nodeKey] = true;

        // Early return when the shortest path in our
        // graph is already the finishNode
        if (undefined !== finishNode && nodeKey === getKey(finishNode)) break;

        const edges = adapter.getEdges(node);
        for (let i = 0; i < edges.length; i++) {
            const childNode = edges[i].node;
            const childNodeKey = getKey(childNode);
            let alt = cost + edges[i].weight;

            if (undefined === costs[childNodeKey] || alt < costs[childNodeKey]) {
                costs[childNodeKey] = alt;
                parents[childNodeKey] = node;

                if (!explored[childNodeKey]) {
                    prioQueue.push({ node: childNode, cost: alt });
                }
            }
        }
    } while (!prioQueue.isEmpty());

    return {
        costs,
        parents,
    };
};

export const findShortestPath = (
    adapter: IGraphAdapter,
    startNode: string,
    finishNode: string
) => {
    const getKey = (node: string) => getNodeKey(node, adapter);
    const { costs, parents } = dijkstra(adapter, startNode, finishNode);

    let optimalPath = [finishNode];
    let parent = parents[getKey(finishNode)];
    while (parent && parent !== startNode) {
        optimalPath.push(parent);
        parent = parents[getKey(parent)];
    }
    optimalPath.reverse();

    const results = {
        distance: costs[getKey(finishNode)],
        path: optimalPath,
    };

    return results;
};

// A: { C: 4, D: 2 }
export type GraphType = Record<string, Record<string, number>>;

export class GraphAdapter implements IGraphAdapter {
    graph: GraphType;

    constructor(graph: GraphType) {
        this.graph = graph;
    }

    getEdges(n: string): Edge[] {
        return Object.entries(this.graph[n]).map(([key, value]) => ({
            node: key,
            weight: value,
        }));
    }
}
