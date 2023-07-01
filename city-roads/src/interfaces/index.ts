export type Graph = { [key: string]: string[] };
export type GraphNode = [string, string];
export type GraphEdge = Array<GraphNode>;
export type GraphEdges = Array<GraphEdge>;

export type BreathFirstSearch = (
  graph: Graph,
  startPosition: string,
  endPosition: string,
  visitedNodes: Set<string>
) => string;

export type NodeQueueItem = { node: string; path: string };
export type NodeQueue = Array<NodeQueueItem>;
