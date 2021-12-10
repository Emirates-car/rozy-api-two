import { CARS } from "../../../car-data";

export default function handler(req, res) {
  res.status(200).json(CARS);
}
