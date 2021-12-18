import { CARS } from "../../../../../car-data";

export default function handler(req, res) {
  const {  make, model } = req.query;
  const post = CARS.filter((b) => b.make === make && b.model === model);
  res.status(200).json(post);
}
