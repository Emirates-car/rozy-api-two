import { carLogos } from "../../../car-logos";

export default function handler(req, res) {
  res.status(200).json(carLogos);
}
