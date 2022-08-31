import axios from "axios"

export default async function handler (req: any, res: any) {
  try {
    const { data, status } = await axios.get(process.env.BASE_API as any)
    res.status(200).json(data)
  } catch(error: any) {
    res.status(500).json({
      message: error.message
    })
  }
}