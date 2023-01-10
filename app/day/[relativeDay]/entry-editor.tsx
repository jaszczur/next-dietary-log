'use client';
import { useState } from 'react';
import { FoodLogEntry, SingleLoggedFood } from '../../model/food-types';

type Props = {
  entry: FoodLogEntry;
  onRemove?: (idx: number) => void;
  onAdd?: (entry: SingleLoggedFood) => void;
};

export default function EntryEditor({ entry, onRemove, onAdd }: Props) {
  const [comment, setComment] = useState('');
  const [amount, setAmount] = useState('');
  return (
    <ul className="steps steps-vertical">
      {entry.log.map((food, idx) => (
        <li key={idx} className="step-primary step">
          {food.amount} ({food.comment})
        </li>
      ))}
      <li className="step">
        <div className="left flex flex-col p-2">
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Amount"
              className="input-bordered input max-w-xs"
            />
            <input
              type="text"
              placeholder="Comment"
              className="input-bordered input max-w-xs"
            />
            <button
              className="btn-primary btn"
              onClick={() => {
                if (onAdd) onAdd({ comment, amount: Number(amount) });
              }}
            >
              Add
            </button>
          </div>
        </div>
      </li>
    </ul>
  );
}
