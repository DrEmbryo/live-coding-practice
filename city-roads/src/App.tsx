import { useState } from "react";

import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Typography,
} from "@material-tailwind/react";
import { CitySelect } from "./components/select";

import { edges } from "./constants";
import { buildGraph } from "./utils/buildGraph";
import { breathFirstSearch } from "./utils/breathFirstSearch";

export const App = () => {
  const [inputs, setInputs] = useState({ from: "", to: "" });
  const [searchResult, setSearchResult] = useState("");
  const graph = buildGraph(edges);
  const cities = Object.keys(graph);

  const handleInputs = (field: "from" | "to", value: string) => {
    const current = { ...inputs };
    current[field] = value;
    setInputs(current);
  };

  const handleFindPath = () => {
    const result = breathFirstSearch(graph, inputs.from, inputs.to, new Set());
    setSearchResult(result);
  };

  return (
    <div className="flex h-screen bg-gray-700">
      <Card className="w-96 m-auto">
        <CardBody className="flex flex-col gap-4">
          <CitySelect label="from" cities={cities} onChange={handleInputs} />
          <CitySelect label="to" cities={cities} onChange={handleInputs} />
          {searchResult && <Typography>{searchResult}</Typography>}
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth onClick={handleFindPath}>
            Find Path
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
