import { BLOG } from "../../../Blog";

export default function handler(req, res) {
  const { blogId } = req.query;
  const post = BLOG.find((b) => b.TITLE === blogId);
  res.status(200).json(post);
}
