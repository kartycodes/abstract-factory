import { NextApiRequest, NextApiResponse } from 'next'
import { sampleData } from '../../../utils/sample-data'

export default (_: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleData)) {
      throw new Error('Cannot find field data')
    }

    res.status(200).json(sampleData)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}
