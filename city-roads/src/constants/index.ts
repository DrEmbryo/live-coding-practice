import { GraphEdges } from "../interfaces";

export const edges: GraphEdges = [
  [
    ["a", "b"],
    ["a", "g"],
  ], // city A
  [
    ["b", "a"],
    ["b", "d"],
    ["b", "c"],
  ], // city B
  [
    ["c", "b"],
    ["c", "e"],
  ], // city C
  [
    ["e", "c"],
    ["e", "d"],
    ["e", "f"],
  ], // city E
  [
    ["d", "e"],
    ["d", "b"],
    ["d", "g"],
  ], // city D
  [
    ["g", "a"],
    ["g", "d"],
    ["g", "h"],
  ], // city G
  [
    ["f", "e"],
    ["f", "h"],
  ], // city F
  [
    ["h", "g"],
    ["h", "f"],
  ], // city H
];
