import { CARS } from '../../../../../car-data'

export default function handler(req, res) {
  const { make, location } = req.query
  const post = CARS.filter(
    (b) => b.make === make && b.location.filter((c) => c === location)
  )
  res.status(200).json(post)
}
