'use client';

import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import {
  FoodLog,
  FoodLogEntry,
  SingleLoggedFood,
} from '../../model/food-types';
import EntryEditor from './entry-editor';

type Props = { foodLog: FoodLog };

export default function FoodLogEditor({ foodLog }: Props) {
  const [selectedFoodId, setSelectedFoodId] = useState<string | undefined>(
    undefined,
  );
  const router = useRouter();
  const [isFetching, setIsFetching] = useState(false);
  const [isPending, startTransition] = useTransition();
  const isMutating = isFetching || isPending;
  const selectedEntry =
    selectedFoodId === undefined
      ? undefined
      : foodLog.entries.find((e) => e.food.id === selectedFoodId);

  const addMeal = async (entry: SingleLoggedFood) => {
    if (!selectedEntry || entry.comment === '' || entry.amount <= 0.0) return;

    setIsFetching(true);
    await fetch(`/api/log/${foodLog.date}/entries/${selectedEntry.food.id}`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify([...selectedEntry.log, entry]),
    });
    setIsFetching(false);

    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      router.refresh();
    });
  };

  const rows = foodLog.entries.map((entry) => {
    const active = selectedEntry?.food === entry.food;
    const meals = entry.log.length;
    const hasMeals = meals > 0;
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
            className={`btn-sm btn gap-2 ${active ? 'btn-disabled' : ''}`}
            onClick={() => setSelectedFoodId(entry.food.id)}
          >
            Meals
            {hasMeals && <div className="badge-secondary badge">{meals}</div>}
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
        {selectedEntry && (
          <EntryEditor
            entry={selectedEntry}
            onAdd={addMeal}
            mutating={isMutating}
          />
        )}
      </div>
    </div>
  );
}
