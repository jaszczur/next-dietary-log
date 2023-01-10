import { foodLog } from '../../model/food-types';

type Props = { params: { relativeDay: 'yesterday' | 'today' | 'tomorrow' } };

export default function Day({ params: { relativeDay } }: Props) {
  const header = relativeDay;
  const date = relativeDay;

  const rows = foodLog(date).entries.map((entry) => (
    <tr key={entry.food.name}>
      <th>{entry.food.name}</th>
      <td>{entry.food.unit}</td>
      <td>
        {entry.food.strategy === 'max' ? 'max' : ''} {entry.food.amount}
      </td>
      <td>{entry.log.reduce((result, x) => result + x, 0)}</td>
      <td>
        <a href={`/day/${relativeDay}/food/${entry.food.name}`}>Fill</a>
      </td>
    </tr>
  ));
  return (
    <section>
      <header className="pb-4 text-lg capitalize">{header}</header>
      <div className="overflow-x-auto">
        <table className="table-zebra table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Unit</th>
              <th>Amount</th>
              <th>Log</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    </section>
  );
}
