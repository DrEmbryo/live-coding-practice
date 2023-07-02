import { useState } from "react";

import { Typography } from "@material-tailwind/react";

import { FolderComponent } from "./components/folder";

import { Folder } from "./interfaces";

import { folders } from "./constants";

export const App = () => {
  const [openFolders, setOpenFolders] = useState<Set<string>>(new Set());

  const handleToggleFolder = (id: string) => {
    const copy = new Set(openFolders);
    if (copy.has(id)) {
      copy.delete(id);
    } else {
      copy.add(id);
    }
    setOpenFolders(copy);
  };

  return (
    <div className="w-screen h-screen bg-gray-900">
      <div className="h-screen w-80 bg-gray-800">
        <Typography
          variant="paragraph"
          color="white"
          className="flex items-center justify-center h-10 font-bold uppercase border-b-2 border-gray-500"
        >
          File Viewer
        </Typography>
        <div className="relative">
          {folders.map((folder) => {
            const hasItems = !!folder.subfolders.length;
            return (
              <FolderComponent
                folder={folder as Folder}
                openedIndex={openFolders}
                isCollapsible={hasItems}
                handleToggleFolder={handleToggleFolder}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
