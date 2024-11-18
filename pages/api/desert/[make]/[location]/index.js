import { CARS } from '../../../../../car-data'

export default function handler(req, res) {
  const { make, location } = req.query
  const post = CARS.filter(
    (b) => b.make === make && b.location.includes(location)
  )
  if (post.length === 0) {
    return res.status(404).json({ message: 'No matching data found' })
  }

  res.status(200).json(post)
}
