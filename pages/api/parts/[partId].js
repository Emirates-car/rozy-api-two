import { PARTS } from "../../../parts";

export default function handler(req, res) {
  const { partId } = req.query;
  const parts = PARTS.find((a) => a.PARTS === partId);
  res.status(200).json(parts);
}
