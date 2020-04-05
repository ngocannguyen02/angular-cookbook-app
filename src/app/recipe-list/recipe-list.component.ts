import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  Recipe: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadRecipes();
  }

  // Get recipes list
  loadRecipes() {
    return this.restApi.getRecipes().subscribe((data: {}) => {
      this.Recipe = data;
    });
  }

  // Delete recipe
  deleteRecipe(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deleteRecipe(id).subscribe(data => {
        this.loadRecipes();
      });
    }
  }

}
