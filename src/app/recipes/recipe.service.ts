import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    
    recipesChanged = new Subject<Recipe[]>();
  
    private recipes: Recipe[] = [
      new Recipe('Grilled Salmon', 'Delicious salmon with cripsy skin!', 'https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/2048x1024/landscape-1520957481-grilled-salmon-horizontal.jpg',
      [
          new Ingredient("Salmon", 2),
          new Ingredient("Pepper", 1),
          new Ingredient("Salt", 1)
          
          ])
    ];
    
    constructor(private slService: ShoppingListService) {}
    
    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
    
    getRecipes() {
        return this.recipes.slice();
    }
    
    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }
    
    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
    
    getRecipe(index: number) {
        return this.recipes[index];
    }
    
    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}