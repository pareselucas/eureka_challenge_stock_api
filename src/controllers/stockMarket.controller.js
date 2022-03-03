import fetch from 'node-fetch';

const API_KEY = "X86NOH6II01P7R24"

export const getAlphaApi = async (req, res) => {
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${API_KEY}`;
  const options = {
    "method": "GET"
  }
  const response = await fetch(url, options)
  .then(res => res.json())
  .catch(e => {
    console.error({
      error: e
    })
  })
  res.json(response)
}