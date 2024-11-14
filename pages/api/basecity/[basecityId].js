import { basecity } from '../../../basecity'

export default function handler(req, res) {
  const { basecityId } = req.query
  const city = basecity.find((a) => a.city === basecityId)
  res.status(200).json(city)
}
