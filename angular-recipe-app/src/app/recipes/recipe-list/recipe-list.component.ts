import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Dhosai", "Everyone's Favo", "https://b.zmtcdn.com/data/reviews_photos/1e2/19f261b43d11344ce5f483c20a0941e2_1561214851.jpg"),
    new Recipe("Idly", "World's Healthiest Breakfast", "https://www.kannammacooks.com/wp-content/uploads/soft-idli-batter-recipe-using-idli-rava-mixie-blender-method.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
