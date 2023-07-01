import { Graph, GraphEdges, Node } from "../interfaces";

export const buildGraph = (edges: GraphEdges) => {
  let graph: Graph = {};
  for (const edge of edges) {
    edge.forEach((node: Node) => {
      const [p1, p2] = node;
      if (!(p1 in graph)) graph[p1] = [];
      if (!(p2 in graph)) graph[p2] = [];
      if (!graph[p1].includes(p2)) {
        graph[p1].push(p2);
      }
      if (!graph[p2].includes(p1)) {
        graph[p2].push(p1);
      }
    });
  }
  return graph;
};
