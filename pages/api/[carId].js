import { CarBrandList } from "../../CarBrandList";

export default function handler(req, res) {
  const { carId } = req.query;
  const name = CarBrandList.find((car) => car.name === carId);
  res.status(200).json(name);
}
