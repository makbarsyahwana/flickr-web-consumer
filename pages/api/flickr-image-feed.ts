import axios from "axios"

export default async function handler (req: any, res: any) {
  try {
    const url = "http://localhost:8000"
    const { data, status } = await axios.get(url)
    console.log(data)
    res.status(200).json(data)
  } catch(error: any) {
    console.log(error)
    res.status(500).json({
      message: error.message
    })
  }
}