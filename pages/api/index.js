import { CarBrandList } from "../../CarBrandList";

export default function handler(req, res) {
  res.status(200).json(CarBrandList);
}
