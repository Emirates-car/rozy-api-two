import { countrycode } from "../../../CountryCode";

export default function handler(req, res) {
  const { codeId } = req.query;
  const code = countrycode.find((a) => a.dial_code === codeId);
  res.status(200).json(code);
}
