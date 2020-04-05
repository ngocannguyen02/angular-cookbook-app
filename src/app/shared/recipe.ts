export class Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: Ingredient[];
}

export class Ingredient {
  name: string;
  quantity: string;
}
