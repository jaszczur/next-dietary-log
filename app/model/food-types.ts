export interface FoodType {
  name: string;
  comment?: string;
  strategy: 'max' | 'suggested';
  unit: string;
  amount: number;
}

export interface FoodLogEntry {
  date: string;
  food: FoodType;
  log: number[];
}

export interface FoodLog {
  date: string;
  entries: FoodLogEntry[];
}

export function foodTypes(): FoodType[] {
  return [
    {
      name: 'gotowane warzywa niekapustne',
      strategy: 'suggested',
      unit: 'szklanka gotowanych',
      amount: 1.5,
    },
    {
      name: 'gotowane warzywa kapustne',
      strategy: 'suggested',
      unit: 'szklanka gotowanych',
      amount: 1.5,
    },
    {
      name: 'surowe warzywa liściaste',
      strategy: 'suggested',
      unit: 'szklanka',
      amount: 1.5,
    },
    {
      name: 'surowe warzywa nieliściaste',
      strategy: 'suggested',
      unit: 'szklanka',
      amount: 1,
    },
    {
      name: 'zupa warzywna',
      strategy: 'suggested',
      unit: 'talerz',
      amount: 1,
    },
    {
      name: 'strączki',
      strategy: 'suggested',
      unit: 'szklanka gotowanych',
      amount: 1,
    },
    {
      name: 'kasze / ryż',
      strategy: 'suggested',
      unit: 'szklanka gotowanych',
      amount: 1.5,
    },
    {
      name: 'owoce',
      strategy: 'max',
      unit: 'g',
      amount: 600,
    },
  ];
}

export function foodLog(date: string): FoodLog {
  return {
    date,
    entries: foodTypes().map((food) => ({
      date,
      food,
      log: [],
    })),
  };
}
