import { BreathFirstSearch, NodeQueue, NodeQueueItem } from "../interfaces";

export const breathFirstSearch: BreathFirstSearch = (
  graph,
  start,
  end,
  visited
): string => {
  const queue: NodeQueue = [{ node: start, path: start }];
  while (queue.length) {
    const current = queue.shift() as NodeQueueItem;
    if (current.node === end) return current.path;
    if (visited.has(current.node)) continue;
    visited.add(current.node);
    graph[current.node].forEach((node) => {
      queue.push({ node, path: `${current.path} -> ${node}` });
    });
  }
  return `There is no path between ${start} and ${end}`;
};
