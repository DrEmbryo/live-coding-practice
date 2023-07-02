# Folder Viewer

## Problem statement

You are tasked to create a folder view component that displays a list of folders and their nested subfolders in a hierarchical manner (folders also can contain files). The component should allow the user to interact with the folders by expanding and collapsing them to view their contents.

### Data sample for a task

    const folders = [
    {
        id: 1,
        type: "folder",
        name: "folder 1",
        subfolders: [
        { id: "1.1", type: "file", name: "file 1" },
        { id: "1.2", type: "folder", name: "folder 1.1", subfolders: [] },
        ],
    },
    {
        id: 2,
        type: "folder",
        name: "folder 2",
        subfolders: [
        { id: "2.1", type: "file", name: "file 2" },
        {
            id: "2.2",
            type: "folder",
            name: "folder 1.1",
            subfolders: [{ id: "2.2.1", type: "file", name: "file 2.2.1" }],
        },
        ],
    },
    ];

## Requirements

- The FolderView component should render the list of top-level folders with their names and an option to expand/collapse them.
- When a folder is expanded, its subfolders should be displayed below it, and the user should be able to see the nested subfolders in a hierarchical structure.
- Use appropriate icons to represent open and closed folders for better user experience.
- Implement functionality to toggle the folders' visibility. Clicking on a folder name or icon should expand/collapse the folder to show/hide its subfolders.
- If a folder has no subfolders, clicking on it should have no effect.

## Notes

- You are free to use any frontend technologies or libraries you are comfortable with.
- Focus on writing clean, well-structured, and maintainable code. Consider the performance and efficiency of your solution, especially for large folder structures.
- Make sure to handle edge cases, such as empty folders or invalid data, gracefully.
