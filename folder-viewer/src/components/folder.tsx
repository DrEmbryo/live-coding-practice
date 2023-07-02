import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolder,
  faFolderOpen,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

import { Typography } from "@material-tailwind/react";

import { Folder } from "../interfaces";

import { FileComponent } from "./file";

type FolderComponentProps = {
  folder: Folder;
  isCollapsible: boolean;
  openedIndex: Set<string>;
  handleToggleFolder: (id: string) => void;
};

export const FolderComponent: React.FC<FolderComponentProps> = ({
  folder,
  openedIndex,
  isCollapsible,
  handleToggleFolder,
}) => {
  const isOpen = openedIndex.has(folder.id);
  return (
    <>
      <div className="item">
        <span className="highlight absolute left-0 cursor-pointer h-8 w-80 z-10" />
        <div
          className="relative flex items-center cursor-pointer h-8 pl-2 z-20"
          onClick={() => handleToggleFolder(folder.id)}
        >
          {isOpen ? (
            <FontAwesomeIcon
              icon={faFolderOpen}
              className="mr-2"
              color="white"
            />
          ) : (
            <FontAwesomeIcon icon={faFolder} className="mr-2" color="white" />
          )}
          <Typography color="white" variant="small">
            {folder.name}
          </Typography>
          {isCollapsible ? (
            isOpen ? (
              <FontAwesomeIcon
                icon={faChevronUp}
                className="ml-2"
                color="white"
              />
            ) : (
              <FontAwesomeIcon
                icon={faChevronDown}
                className="ml-2"
                color="white"
              />
            )
          ) : null}
        </div>
      </div>

      {folder.subfolders.length ? (
        <div className={`pl-2 ${!isOpen && "hidden"}`}>
          {folder.subfolders.map((item) => {
            if ("subfolders" in item) {
              const hasItems = !!item.subfolders.length;

              return hasItems ? (
                <FolderComponent
                  isCollapsible={hasItems}
                  openedIndex={openedIndex}
                  folder={item}
                  handleToggleFolder={handleToggleFolder}
                />
              ) : null;
            } else {
              return <FileComponent name={item.name} key={item.id} />;
            }
          })}
        </div>
      ) : null}
    </>
  );
};
