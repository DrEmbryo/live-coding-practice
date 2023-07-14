import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

import { Typography } from "@material-tailwind/react";

type FileComponentProps = {
  name: string;
};

export const FileComponent: React.FC<FileComponentProps> = ({ name }) => {
  return (
    <div className="item">
      <span className="highlight absolute left-0 cursor-pointer h-8 w-80 z-10" />
      <div className="relative flex w-full h-8 items-center cursor-pointer z-20 pl-2">
        <FontAwesomeIcon icon={faFile} className="mr-2" color="white" />
        <Typography color="white" variant="small">
          {name}
        </Typography>
      </div>
    </div>
  );
};
