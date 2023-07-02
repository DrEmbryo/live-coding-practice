# City Road Connectivity

## Problem statement

You are presented with a collection of undirected graph edges that represent roads connecting cities. Your task is to create a UI that allows users to select two cities and determine if there is a path between them.

### Data sample for a task

    const Roads = [
        [["a", "b"],["a", "g"],],               // city A
        [["b", "a"],["b", "d"],["b", "c"],],    // city B
        [["c", "b"],["c", "e"],],               // city C
        [["e", "c"],["e", "d"],["e", "f"],],    // city E
        [["d", "e"],["d", "b"],["d", "g"],],    // city D
        [["g", "a"],["g", "d"],["g", "h"],],    // city G
        [["f", "e"],["f", "h"],],               // city F
        [["h", "g"],["h", "f"],],               // city H
    ];

## Requirements

- Display the list of cities and their connections based on the provided graph edges.
- Provide a way for users to select two cities from the list.
- Implement a function that determines if there is a path between the two selected cities.
- Display the result to the user, indicating whether a path exists or not.
- Handle any edge cases or invalid input gracefully.

## Notes

The UI should allow the user to select two cities (e.g., 'New York' and 'Miami') and determine if there is a path between them. In this case, the result should indicate that a path exists (New York -> Boston -> Washington, D.C. -> Atlanta -> Miami). If the user selects 'New York' and 'Seattle', the result should indicate that there is no path between them.

- You can decide on the specific design and layout of the user interface.
- You can use any additional libraries or tools that you find helpful.
- Focus on writing clean, readable, and modular code.
- Consider error handling and edge cases in your implementation.
- Feel free to add any extra features or improvements you see fit.
