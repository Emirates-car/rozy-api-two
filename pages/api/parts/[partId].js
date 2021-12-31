import { parts } from "../../../parts";

export default function handler(req, res) {
  const { partId } = req.query;
  const parts = parts.find((a) => a.parts === partId);
  res.status(200).json(parts);
}
