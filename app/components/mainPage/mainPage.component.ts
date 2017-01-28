import {Component} from '@angular/core';
import {MealService} from "../../service/MealService";

@Component({
    selector: 'main-page',
    templateUrl: 'app/components/mainPage/mainPage.template.html'

})

export class MainPageComponent {


    getMeals() {
        return MealService.meals;
    }
}