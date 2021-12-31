import { CARS } from "../../../../../../car-data";

export default function handler(req, res) {
  const { year, make, model } = req.query;
  const post = CARS.filter((b) => b.year === parseInt(year) && b.make === make && b.model.replace("%2F","/") === model);
  res.status(200).json(post);
}
