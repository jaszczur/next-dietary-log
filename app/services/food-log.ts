import {
  FoodLog,
  FoodLogEntry,
  FoodType,
  SingleLoggedFood,
} from '../model/food-types';

export function foodTypes(): FoodType[] {
  return [
    {
      id: 'gwn',
      name: 'gotowane warzywa niekapustne',
      strategy: 'suggested',
      unit: 'szklanka gotowanych',
      amount: 1.5,
    },
    {
      id: 'gwk',
      name: 'gotowane warzywa kapustne',
      strategy: 'suggested',
      unit: 'szklanka gotowanych',
      amount: 1.5,
    },
    {
      id: 'swl',
      name: 'surowe warzywa liściaste',
      strategy: 'suggested',
      unit: 'szklanka',
      amount: 1.5,
    },
    {
      id: 'swn',
      name: 'surowe warzywa nieliściaste',
      strategy: 'suggested',
      unit: 'szklanka',
      amount: 1,
    },
    {
      id: 'zw',
      name: 'zupa warzywna',
      strategy: 'suggested',
      unit: 'talerz',
      amount: 1,
    },
    {
      id: 's',
      name: 'strączki',
      strategy: 'suggested',
      unit: 'szklanka gotowanych',
      amount: 1,
    },
    {
      id: 'kr',
      name: 'kasze / ryż',
      strategy: 'suggested',
      unit: 'szklanka gotowanych',
      amount: 1.5,
    },
    {
      id: 'o',
      name: 'owoce',
      strategy: 'max',
      unit: 'g',
      amount: 600,
    },
  ];
}

function generateEmptyFoodLog(date: string): FoodLog {
  return {
    date,
    entries: foodTypes().map((food) => ({
      date,
      food,
      log: [],
    })),
  };
}

type Db = { [key: string]: FoodLog };

let database: Db = {};

export function findFoodLog(date: string): FoodLog {
  let result = database[date];
  if (!result) {
    result = generateEmptyFoodLog(date);
    database[date] = result;
  }
  return result;
}

export function updateMeals(
  date: string,
  foodId: string,
  loggedFoods: SingleLoggedFood[],
): FoodLogEntry | undefined {
  const entry = findFoodLog(date).entries.find((e) => e.food.id === foodId);

  if (entry) {
    entry.log = loggedFoods;
  }

  return entry;
}
