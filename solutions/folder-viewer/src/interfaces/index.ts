export type Folder = {
  id: string;
  name: string;
  subfolders: (Folder | File)[];
};

export type File = { id: string; name: string };
