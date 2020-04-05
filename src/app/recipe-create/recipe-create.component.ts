import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';


@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.css']
})
export class RecipeCreateComponent implements OnInit {

  @Input() recipeDetails = { title: '', description: ''};

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

}
