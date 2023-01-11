// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { FoodLog } from '../../../app/model/food-types';
import { findFoodLog } from '../../../app/services/food-log';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<FoodLog>,
) {
  if (req.method === 'GET') {
    const { date } = req.query;
    res.status(200).json(findFoodLog(date?.toString() ?? 'today'));
  }
}
