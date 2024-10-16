import { countrycode } from "../../../CountryCode";

export default function handler(req, res) {
  res.status(200).json(countrycode);
}
