import { CARS } from '../../../../../car-data'

export default function handler(req, res) {
  const { make, location } = req.query
  // Filter to find cars that match both make and location
  const post = CARS.filter(
    (b) => b.make === make && b.location.includes(location)
  )

  res.status(200).json(post)
}
