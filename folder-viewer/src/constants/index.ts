import { Folder } from "../interfaces";

export const folders: Array<Folder> = [
  {
    id: "1",
    name: "folder 1",
    subfolders: [
      { id: "1.1", name: "test.txt" },
      { id: "1.2", name: "folder 1.1", subfolders: [] },
    ],
  },
  {
    id: "2",
    name: "folder 2",
    subfolders: [
      { id: "2.1", name: "homework.doc" },
      {
        id: "2.2",
        name: "folder 2.1",
        subfolders: [{ id: "2.2.1", name: "papers.pdf" }],
      },
    ],
  },
  {
    id: "3",
    name: "folder 3",
    subfolders: [],
  },
];
