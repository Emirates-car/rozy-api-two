import { parts } from "../../../parts";

export default function handler(req, res) {
  res.status(200).json(parts);
}
