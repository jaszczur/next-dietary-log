import { FoodLog } from '../../model/food-types';
import FoodLogEditor from './log-editor';

type Props = {
  params: {
    relativeDay: 'yesterday' | 'today' | 'tomorrow';
  };
};

async function fetchFoodLog(date: string): Promise<FoodLog> {
  const resp = await fetch(`http://localhost:3001/api/log/${date}`, {
    cache: 'no-cache',
  });
  return (await resp.json()) as FoodLog;
}

export default async function Day({ params: { relativeDay } }: Props) {
  const header = relativeDay;
  const date = relativeDay;
  const log = await fetchFoodLog(date);

  return (
    <section>
      <header className="pb-4 text-lg capitalize">{header}</header>
      <FoodLogEditor foodLog={log} />
    </section>
  );
}
