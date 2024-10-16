import { CARS } from "../../../../car-data";

export default function handler(req, res) {
  const { year } = req.query;
  const post = CARS.filter((b) =>
    b.year === parseInt(year)
  );
  res.status(200).json(post);
}
