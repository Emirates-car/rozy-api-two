import { CARS } from '../../../../../../car-data';

export default function handler(req, res) {
  const { make, model, year } = req.query;
  const post = CARS.filter(
    (b) => b.make === make && b.model === model && b.year === parseInt(year)
  );
  console.log(post);
  res.status(200).json(post);
}
