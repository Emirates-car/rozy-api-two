import { basecity } from '../../../basecity'

export default function handler(req, res) {
  res.status(200).json(basecity)
}
