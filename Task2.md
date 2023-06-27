# Shop Checkout Queues

## Problem statement

You are tasked with creating a simulation of a shop with multiple checkouts and their respective queues. Each checkout can have a queue of people, and each person in the queue holds a certain number of items. The simulation will run in real-time, with each person in the queue decreasing their number of items by one every 0.5 seconds. Once a person's item count reaches zero, they will leave the queue.

Your goal is to implement the simulation and create a user interface that visualizes the checkouts, the number of items held by each person, and the overall wait time for each queue. You should also implement the logic to find the queue with the shortest wait time and place a new person in that queue.

## Requirements

- Create a simulation with 5 checkouts, each with its own queue.
- Each person in a queue should have a random number of items initially (between 1 and 10, for example).
- Every 0.5 seconds, each person in a queue should decrease their item count by one.
- Once a person's item count reaches zero, they should be removed from the queue.
- Implement a mechanism to find the queue with the shortest wait time (total item count of all people in the queue) and place a new person in that queue. The new person should have a random number of items.
- Create a user interface that displays the checkouts, the number of items held by each person, and the overall wait time for each queue.
- Update the user interface in real-time as the simulation progresses.

## Notes

- You can decide on the specific design and layout of the user interface.
- You can use any additional libraries or tools that you find helpful.
- Focus on writing clean, readable, and modular code.
- Consider error handling and edge cases in your implementation.
- Feel free to add any extra features or improvements you see fit.
