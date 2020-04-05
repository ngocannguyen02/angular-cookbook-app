import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-recipe' },
  { path: 'create-recipe', component: RecipeCreateComponent },
  { path: 'recipe-list', component: RecipeListComponent },
  { path: 'recipe-edit/:id', component: RecipeEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
