'use client';
import { useState } from 'react';
import { FoodLogEntry, SingleLoggedFood } from '../../model/food-types';

type Props = {
  entry: FoodLogEntry;
  onRemove?: (idx: number) => void;
  onAdd?: (entry: SingleLoggedFood) => void;
  mutating?: boolean;
};

export default function EntryEditor({
  entry,
  onRemove,
  onAdd,
  mutating,
}: Props) {
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
              onChange={(evt) => setAmount(evt.target.value)}
              type="text"
              placeholder="Amount"
              className="input-bordered input max-w-xs"
            />
            <input
              onChange={(evt) => setComment(evt.target.value)}
              type="text"
              placeholder="Comment"
              className="input-bordered input max-w-xs"
            />
            <button
              className={`btn-primary btn ${mutating ? 'loading' : ''}`}
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
