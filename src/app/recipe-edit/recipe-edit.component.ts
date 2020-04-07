import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from '../shared/recipe';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})

export class RecipeEditComponent implements OnInit {
  id = this.actRoute.snapshot.params.id;
  recipeData: any = {};

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.restApi.getRecipe(this.id).subscribe((data: {}) => {
      this.recipeData = data;
    });
  }

  // Update recipe data
  updateRecipe() {
    if (window.confirm('Are you sure, you want to update?')){
      this.restApi.updateRecipe(this.id, this.recipeData).subscribe(data => {
        this.router.navigate(['/recipes-list']);
      });
    }
  }

  addIngredient() {
    this.recipeData.ingredients.push(this.createNewIngredient(this.recipeData.name, this.recipeData.quantity));
  }

  createNewIngredient(name: string, quantity: string): Ingredient {

    return {
      name: name.toString(),
      quantity: quantity.toString()
    };
  }

}
