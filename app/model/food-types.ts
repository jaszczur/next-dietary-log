export interface FoodType {
  id: string;
  name: string;
  comment?: string;
  strategy: 'max' | 'suggested';
  unit: string;
  amount: number;
}

export interface SingleLoggedFood {
  amount: number;
  comment: string;
}

export interface FoodLogEntry {
  date: string;
  food: FoodType;
  log: SingleLoggedFood[];
}

export interface FoodLog {
  date: string;
  entries: FoodLogEntry[];
}
