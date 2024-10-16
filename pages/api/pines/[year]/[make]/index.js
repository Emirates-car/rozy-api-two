import { CARS } from "../../../../../car-data";

export default function handler(req, res) {
  const { year, make } = req.query;
  const post = CARS.filter((b) => b.year === parseInt(year) && b.make === make);
  res.status(200).json(post);
}
