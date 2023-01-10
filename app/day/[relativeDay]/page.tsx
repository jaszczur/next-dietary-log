import { foodLog } from '../../model/food-types';
import FoodLogEditor from './log-editor';

type Props = {
  params: {
    relativeDay: 'yesterday' | 'today' | 'tomorrow';
  };
};

export default function Day({ params: { relativeDay } }: Props) {
  const header = relativeDay;
  const date = relativeDay;

  return (
    <section>
      <header className="pb-4 text-lg capitalize">{header}</header>
      <FoodLogEditor foodLog={foodLog(date)} />
    </section>
  );
}
