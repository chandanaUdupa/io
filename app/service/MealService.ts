import {Meal} from "../domain/Meal";
/**
 * Created by Konrad on 2017-01-28.
 */
export class MealService {
    private static _meals: Array<Meal> = [new Meal("Jajka na twardo", 6.99),
        new Meal("kanapka z szynka", 4.99),
        new Meal("Kanapka z serem", 3.99),];

    public static getById(id: number): Meal {
        for (let meal of MealService._meals) {
            if(meal.id == id) {
                return meal;
            }
        }
        return null;
    }

    public static deleteById(id: number): void {
        let index:number = 0;
        for (let meal of MealService._meals) {
            if(meal.id == id) {
                MealService._meals.splice(index, 1);
                break;
            }
            index++;
        }
    }

    public static addMeal(meal: Meal): Meal {
        MealService._meals.push(meal);
        return meal;
    }

    public static get meals(): Array<Meal> {
        return this._meals;
    }

    public static editMeal(editedMeal: Meal): Meal {
        let index = 0;
        for (let meal of MealService._meals) {
            if(meal.id == editedMeal.id) {
                MealService._meals[index] = editedMeal;
                break;
            }
            index++;
        }
        return editedMeal;
    }
}