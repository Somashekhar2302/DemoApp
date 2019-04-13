import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
   recipes: Recipes[]= [
      new Recipes('Recipe1','Testing the recipe',
      'https://pinchofyum.com/wp-content/uploads/Instant-Pot-Beef-Stew-Recipe.jpg'),
      new Recipes('Recipe1','Testing the recipe',
      'https://pinchofyum.com/wp-content/uploads/Instant-Pot-Beef-Stew-Recipe.jpg')

   ];
  constructor() { }

  ngOnInit() {
  }

}
