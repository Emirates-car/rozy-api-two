import { cities } from "../../../cities";

export default function handler(req, res) {
  const { cityId } = req.query;
  const city = cities.find((a) => a.city === cityId);
  res.status(200).json(city);
}
