'use client';

import { useState } from 'react';
import { FoodLog, FoodLogEntry } from '../../model/food-types';
import EntryEditor from './entry-editor';

type Props = { foodLog: FoodLog };

export default function FoodLogEditor({ foodLog }: Props) {
  const [selectedEntry, setSelectedEntry] = useState<FoodLogEntry | undefined>(
    undefined,
  );

  const rows = foodLog.entries.map((entry) => {
    const active = selectedEntry?.food === entry.food;
    return (
      <tr key={entry.food.name} className={active ? 'active' : ''}>
        <th>{entry.food.name}</th>
        <td>{entry.food.unit}</td>
        <td>
          {entry.food.strategy === 'max' ? 'max' : ''} {entry.food.amount}
        </td>
        <td>{entry.log.reduce((result, food) => result + food.amount, 0)}</td>
        <td>
          <button
            className={`btn-sm btn ${active ? 'btn-disabled' : ''}`}
            onClick={() => setSelectedEntry(entry)}
          >
            Fill
          </button>
        </td>
      </tr>
    );
  });
  return (
    <div className="flex">
      <div className="overflow-x-auto pr-8">
        <table className="table-zebra table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Unit</th>
              <th>Amount</th>
              <th>Logged</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>

      <div className="pl-8">
        {selectedEntry && <EntryEditor entry={selectedEntry} />}
      </div>
    </div>
  );
}
