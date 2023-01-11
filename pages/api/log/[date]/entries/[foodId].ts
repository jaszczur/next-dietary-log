import type { NextApiRequest, NextApiResponse } from 'next';
import {
  FoodLogEntry,
  SingleLoggedFood,
} from '../../../../../app/model/food-types';
import { updateMeals } from '../../../../../app/services/food-log';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<FoodLogEntry | { error: string }>,
) {
  if (req.method === 'POST') {
    const { date, foodId } = req.query;
    console.log(req.body);
    const result = updateMeals(
      date?.toString() ?? 'today',
      foodId?.toString() ?? '',
      req.body as SingleLoggedFood[],
    );
    console.log(result);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: 'Not found' });
    }
  } else {
    res.status(405).json({ error: 'method not allowed' });
  }
}
