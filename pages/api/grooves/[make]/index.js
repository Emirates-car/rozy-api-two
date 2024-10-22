import { CARS } from '../../../../car-data'

export default function handler(req, res) {
  const { make } = req.query
  const post = CARS.filter((b) => b.make === make)
  res.status(200).json(post)
}
