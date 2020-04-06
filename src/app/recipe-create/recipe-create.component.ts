import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';
import { Ingredient } from '../shared/recipe';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.css']
})
export class RecipeCreateComponent implements OnInit {

  @Input() recipeDetails = { title: '', description: '', ingredients: [{name: '', quantity: ''}]};
  @Input() ingredientDetails = { name: '', quantity: ''};

  constructor(
    public restApi: RestApiService,
    public router: Router
  ) {}

  ngOnInit() {}

  addRecipe() {
    this.restApi.createRecipe(this.recipeDetails).subscribe((data: {}) => {
      this.router.navigate(['/recipes-list']);
    });
  }

  addIngredient() {
    this.recipeDetails.ingredients.push(this.createNewIngredient(this.ingredientDetails.name, this.ingredientDetails.quantity));
  }

  createNewIngredient(name: string, quantity: string): Ingredient {

    return {
      name: name.toString(),
      quantity: quantity.toString()
    };
  }

}
