import { BLOG } from "../../../Blog";

export default function handler(req, res) {
  res.status(200).json(BLOG);
}
