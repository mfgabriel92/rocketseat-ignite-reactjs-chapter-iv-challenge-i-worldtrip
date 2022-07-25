import { NextApiRequest, NextApiResponse } from "next";
import continents from "./_data";

async function continentHandler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req;
  const continent = continents.find((c: any) => c.id === query.id);

  if (!continent) {
    return res.status(404).json({ continent: null, error: "Continent not found" });
  }

  return res.status(200).json(continent);
}

export default continentHandler;
