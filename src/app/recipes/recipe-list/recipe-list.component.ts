import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router'
import { Subsccription } from 'rxjs'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  
  recipes: Recipe[];
  subscription: Subsccription;
      
  constructor(private recipeService: RecipeService,
      private router: Router,
      private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged
    this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        })
    this.recipes = this.recipeService.getRecipes();
  }
  
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }
  
  ngOnDestroy() {
    this.subscripton.unsubscribe();
  }

}
